
package com.speedrun;

import org.bukkit.*;
import org.bukkit.GameMode;

import org.bukkit.attribute.Attribute;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;

import org.bukkit.entity.Animals;
import org.bukkit.entity.Ambient;
import org.bukkit.entity.Entity;
import org.bukkit.entity.EntityType;
import org.bukkit.entity.Firework;
import org.bukkit.entity.Item;
import org.bukkit.entity.LivingEntity;
import org.bukkit.entity.Mob;
import org.bukkit.entity.Player;
import org.bukkit.entity.WaterMob;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.EntityPickupItemEvent;
import org.bukkit.event.entity.PlayerDeathEvent;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryDragEvent;
import org.bukkit.event.inventory.InventoryOpenEvent;
import org.bukkit.event.inventory.InventoryType;
import org.bukkit.event.player.PlayerBedEnterEvent;
import org.bukkit.event.player.PlayerItemConsumeEvent;
import org.bukkit.event.player.PlayerInteractEntityEvent;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.player.PlayerMoveEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.event.player.PlayerRespawnEvent;
import org.bukkit.event.player.PlayerSwapHandItemsEvent;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.PlayerInventory;
import org.bukkit.inventory.meta.FireworkMeta;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.potion.PotionEffect;
import org.bukkit.potion.PotionEffectType;
import org.bukkit.util.Vector;

import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scheduler.BukkitRunnable;
import org.bukkit.scheduler.BukkitTask;

import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

import net.md_5.bungee.api.chat.ClickEvent;
import net.md_5.bungee.api.chat.TextComponent;
import org.bukkit.block.Block;

public class SpeedrunPlugin extends JavaPlugin implements Listener {

    private enum GameModifier {
        GOLDEN_TOOLS_ONLY,
        VEGETARIAN_ONLY,
        TIME_X2,
        INFINITE_NIGHT,
        LUNAR_GRAVITY,
        NO_VILLAGER_TRADING,
        RANDOM_BLOCK_DROPS,
        AGGRESSIVE_ANIMALS,
        HOTBAR_ONLY,
        ELYTRA_MODE
    }

    private boolean gameActive = false;
    private boolean gameStarted = false; // True after countdown, false during countdown
    private Material targetItem = null;
    private long startTime = 0;
    private BukkitTask inventoryCheckTask = null;
    private BukkitTask timerDisplayTask = null;
    private BukkitTask tabUpdateTask = null;
    private BukkitTask modifierEnforcementTask = null;
    private BukkitTask timeControlTask = null;
    private BukkitTask lunarItemTask = null;
    private BukkitTask aggressiveAnimalsTask = null;
    private BukkitTask countdownTask = null;
    private BukkitTask fireworksTask = null;
    private final Random random = new Random();

    // GUI constants
    private static final String MENU_TITLE_KEY = "menu-title";
    private static final int MENU_SIZE = 27;
    private static final int SLOT_ITEM = 11;
    private static final int SLOT_START = 13;
    private static final int SLOT_MODIFIER = 15;

    // GUI State (Transient, per player who opened menu)
    // We only support one pending config at a time (global) because the game is global.
    private GameModifier pendingModifier = null; // null means 'random' or 'none' logic? 
    // Let's make: null = Random from pool, or specific. 
    // Actually, let's use a separate variable for "Menu Selection Mode"
    private boolean pendingRandomModifier = true;
    private GameModifier pendingSpecificModifier = null; // Used if pendingRandomModifier is false
    private boolean pendingRandomItem = true;
    
    private static final int INFINITE_EFFECT_DURATION = Integer.MAX_VALUE;
    private static final int ELYTRA_FIREWORK_AMOUNT = 64;
    private final ItemStack lockedSlotItem = new ItemStack(Material.BARRIER);

    private final EnumSet<GameModifier> modifierPool = EnumSet.noneOf(GameModifier.class);
    private final EnumSet<GameModifier> activeModifiers = EnumSet.noneOf(GameModifier.class);

    private List<Material> obtainableItemsCache = null;

    // World state (for time-related modifiers)
    private Long originalWorldTime = null;
    private Boolean originalDoDaylightCycle = null;

    // Player state for modifiers
    private final Set<UUID> landedFromCapsule = new HashSet<>();
    private final Map<UUID, Long> lastAggressiveAnimalHit = new HashMap<>();

    // Modifiers configuration
    private String modifierMode;

    // Configuration
    private FileConfiguration messagesConfig;
    private int countdownTime;
    private int platformHeight;
    private int fallProtectionDuration;
    private int spawnRange;
    private boolean fireworksEnabled;
    private int fireworksCount;
    private boolean soundsEnabled;
    private boolean easyMode;

    // Tracking
    private final Map<UUID, Location> playerPlatforms = new HashMap<>();
    private final Set<UUID> fallingPlayers = new HashSet<>();
    private final Set<UUID> protectedPlayers = new HashSet<>();
    private final Set<UUID> activePlayers = new HashSet<>(); // Players still in the game
    private int initialPlayerCount = 0; // How many players started the game

    // Pause state
    private boolean gamePaused = false;
    private Location pauseBoxLocation = null;
    private final Map<UUID, Location> prePauseLocations = new HashMap<>();
    private final Map<UUID, GameMode> prePauseGameModes = new HashMap<>();
    private long pauseElapsedTime = 0; // Time elapsed before pause (for timer correction)

    @Override
    public void onEnable() {
        // Save default config
        saveDefaultConfig();

        // Create lang folder and save default language files
        File langFolder = new File(getDataFolder(), "lang");
        if (!langFolder.exists()) {
            langFolder.mkdirs();
        }

        // Save default language files if they don't exist
        saveResource("lang/messages_ru.yml", false);
        saveResource("lang/messages_en.yml", false);

        // Load configuration
        loadConfiguration();

        getServer().getPluginManager().registerEvents(this, this);
        getLogger().info("SpeedrunPlugin enabled! Use /speedrun <item_id> to start.");
    }

    private void loadConfiguration() {
        reloadConfig();
        FileConfiguration config = getConfig();

        // Load settings from config
        String language = config.getString("language", "ru");
        countdownTime = config.getInt("game.countdown", 20);
        platformHeight = config.getInt("game.platform-height", 200);
        fallProtectionDuration = config.getInt("game.fall-protection-duration", 20);
        spawnRange = config.getInt("game.spawn-range", 5000);
        fireworksEnabled = config.getBoolean("fireworks.enabled", true);
        fireworksCount = config.getInt("fireworks.count", 10);
        soundsEnabled = config.getBoolean("sounds.enabled", true);
        easyMode = config.getBoolean("game.easy-mode", false);

        // Modifiers
        modifierMode = config.getString("modifiers.mode", "random");

        modifierPool.clear();
        if (config.getBoolean("modifiers.pool.golden-tools-only", true)) {
            modifierPool.add(GameModifier.GOLDEN_TOOLS_ONLY);
        }
        if (config.getBoolean("modifiers.pool.vegetarian-only", true)) {
            modifierPool.add(GameModifier.VEGETARIAN_ONLY);
        }
        if (config.getBoolean("modifiers.pool.time-x2", true)) {
            modifierPool.add(GameModifier.TIME_X2);
        }
        if (config.getBoolean("modifiers.pool.infinite-night", true)) {
            modifierPool.add(GameModifier.INFINITE_NIGHT);
        }
        if (config.getBoolean("modifiers.pool.lunar-gravity", true)) {
            modifierPool.add(GameModifier.LUNAR_GRAVITY);
        }
        if (config.getBoolean("modifiers.pool.no-villager-trading", true)) {
            modifierPool.add(GameModifier.NO_VILLAGER_TRADING);
        }
        if (config.getBoolean("modifiers.pool.random-block-drops", true)) {
            modifierPool.add(GameModifier.RANDOM_BLOCK_DROPS);
        }
        if (config.getBoolean("modifiers.pool.aggressive-animals", true)) {
            modifierPool.add(GameModifier.AGGRESSIVE_ANIMALS);
        }
        if (config.getBoolean("modifiers.pool.hotbar-only", true)) {
            modifierPool.add(GameModifier.HOTBAR_ONLY);
        }
        if (config.getBoolean("modifiers.pool.elytra-mode", true)) {
            modifierPool.add(GameModifier.ELYTRA_MODE);
        }

        // Load language file
        File langFile = new File(getDataFolder(), "lang/messages_" + language + ".yml");
        if (!langFile.exists()) {
            getLogger().warning("Language file not found: " + language + ", falling back to Russian");
            langFile = new File(getDataFolder(), "lang/messages_ru.yml");
        }
        messagesConfig = YamlConfiguration.loadConfiguration(langFile);

        // Load defaults from jar for missing keys
        InputStream defaultStream = getResource("lang/messages_" + language + ".yml");
        if (defaultStream != null) {
            YamlConfiguration defaultConfig = YamlConfiguration.loadConfiguration(
                    new InputStreamReader(defaultStream, StandardCharsets.UTF_8));
            messagesConfig.setDefaults(defaultConfig);
        }

        getLogger().info("Loaded language: " + language);
    }

    public String getMessage(String key) {
        String message = messagesConfig.getString(key, key);
        return ChatColor.translateAlternateColorCodes('&', message);
    }

    public String getMessage(String key, Object... replacements) {
        String message = getMessage(key);
        for (int i = 0; i < replacements.length; i += 2) {
            if (i + 1 < replacements.length) {
                message = message.replace("%" + replacements[i] + "%", String.valueOf(replacements[i + 1]));
            }
        }
        return message;
    }

    @Override
    public void onDisable() {
        stopGame();
        getLogger().info("SpeedrunPlugin disabled.");
    }

    // Generate a list of all survival-obtainable items
    private List<Material> getAllObtainableItems() {
        if (obtainableItemsCache != null) {
            return obtainableItemsCache;
        }

        List<Material> items = new ArrayList<>();
        for (Material material : Material.values()) {
            if (!material.isItem())
                continue;
            if (material.isLegacy())
                continue;

            String name = material.name();
            // Filter out technical, unobtainable, and experimental items
            if (name.contains("AIR") ||
                    name.equals("BARRIER") ||
                    name.equals("BEDROCK") ||
                    name.contains("COMMAND_BLOCK") ||
                    name.contains("STRUCTURE") ||
                    name.contains("JIGSAW") ||
                    name.equals("DEBUG_STICK") ||
                    name.equals("KNOWLEDGE_BOOK") ||
                    name.contains("SPAWN_EGG") ||
                    name.equals("LIGHT") ||
                    name.contains("POTTED_") ||
                    name.endsWith("_WALL") ||
                    name.startsWith("MOVING_") ||
                    name.startsWith("PISTON_"))
                continue;

            items.add(material);
        }
        obtainableItemsCache = Collections.unmodifiableList(items);
        return obtainableItemsCache;
    }

    private boolean selectGameModifier(String modifierArg, CommandSender sender) {
        activeModifiers.clear();

        String mode = modifierArg;
        if (mode == null || mode.isBlank()) {
            mode = modifierMode;
        }
        if (mode == null) {
            mode = "none";
        }

        mode = mode.trim().toLowerCase(Locale.ROOT);
        if (mode.equals("none") || mode.equals("off") || mode.equals("no") || mode.equals("нет")
                || mode.equals("без")) {
            return true;
        }

        boolean randomMode = mode.equals("random") || mode.equals("rnd") || mode.equals("случайный")
                || mode.equals("рандом");

        GameModifier selected;
        if (randomMode) {
            selected = pickRandomModifier();
            if (selected == null) {
                // Empty pool -> just start without modifiers
                return true;
            }
        } else {
            selected = parseModifier(mode);
        }

        if (selected == null) {
            if (sender != null) {
                sender.sendMessage(getMessage("unknown-modifier", "modifier", mode));
                sender.sendMessage(getMessage("available-modifiers"));
            }
            return false;
        }

        activeModifiers.add(selected);
        return true;
    }

    private GameModifier pickRandomModifier() {
        if (modifierPool.isEmpty()) {
            return null;
        }
        int index = random.nextInt(modifierPool.size());
        int i = 0;
        for (GameModifier modifier : modifierPool) {
            if (i == index) {
                return modifier;
            }
            i++;
        }
        return null;
    }

    private GameModifier parseModifier(String value) {
        switch (value) {
            case "gold":
            case "golden":
            case "goldtools":
            case "golden-tools":
            case "golden-tools-only":
            case "золото":
            case "золотые":
            case "золотые-инструменты":
                return GameModifier.GOLDEN_TOOLS_ONLY;

            case "veg":
            case "vegan":
            case "vegetarian":
            case "vegetarian-only":
            case "plant":
            case "plant-only":
            case "веган":
            case "вегетариан":
            case "растительная":
            case "безмяса":
                return GameModifier.VEGETARIAN_ONLY;

            case "time":
            case "time2":
            case "time-x2":
            case "timex2":
            case "x2":
            case "fasttime":
            case "ускоренное":
            case "ускоренное-время":
            case "времяx2":
                return GameModifier.TIME_X2;

            case "night":
            case "night-only":
            case "infinite-night":
            case "eternal-night":
            case "ночь":
            case "тольконочь":
            case "бесконечная-ночь":
            case "бесконечнаяночь":
                return GameModifier.INFINITE_NIGHT;

            case "moon":
            case "lunar":
            case "lunar-gravity":
            case "moon-gravity":
            case "gravity":
            case "луна":
            case "лунная":
            case "луннаягравитация":
            case "лунная-гравитация":
                return GameModifier.LUNAR_GRAVITY;

            case "notrade":
            case "no-trade":
            case "no-trading":
            case "no-villager-trading":
            case "villager-trading":
            case "торговля":
            case "нетторговли":
            case "нельзя-торговать":
                return GameModifier.NO_VILLAGER_TRADING;

            case "randdrop":
            case "random-drop":
            case "random-drops":
            case "random-block-drops":
            case "block-drops":
            case "drops":
            case "дроп":
            case "рандомдроп":
            case "рандомныйдроп":
            case "случайныйдроп":
                return GameModifier.RANDOM_BLOCK_DROPS;

            case "aggro":
            case "aggressive":
            case "aggressive-animals":
            case "angry-animals":
            case "animals":
            case "агро":
            case "агрессивные":
            case "агрессивныеживотные":
            case "злыеживотные":
                return GameModifier.AGGRESSIVE_ANIMALS;

            case "hotbar":
            case "hotbar-only":
            case "hotbaronly":
            case "onlyhotbar":
            case "хотбар":
            case "панель":
            case "толькохотбар":
                return GameModifier.HOTBAR_ONLY;

            case "elytra":
            case "elytra-mode":
            case "wings":
            case "wing":
            case "крылья":
            case "крыло":
            case "элитра":
            case "элитры":
            case "гдетвоикрылья":
            case "где-твои-крылья":
                return GameModifier.ELYTRA_MODE;

            default:
                return null;
        }
    }

    private String getModifierDisplayName() {
        if (activeModifiers.isEmpty()) {
            return getMessage("modifier-none");
        }

        GameModifier modifier = activeModifiers.iterator().next();
        switch (modifier) {
            case GOLDEN_TOOLS_ONLY:
                return getMessage("modifier-golden-tools-only");
            case VEGETARIAN_ONLY:
                return getMessage("modifier-vegetarian-only");
            case TIME_X2:
                return getMessage("modifier-time-x2");
            case INFINITE_NIGHT:
                return getMessage("modifier-infinite-night");
            case LUNAR_GRAVITY:
                return getMessage("modifier-lunar-gravity");
            case NO_VILLAGER_TRADING:
                return getMessage("modifier-no-villager-trading");
            case RANDOM_BLOCK_DROPS:
                return getMessage("modifier-random-block-drops");
            case AGGRESSIVE_ANIMALS:
                return getMessage("modifier-aggressive-animals");
            case HOTBAR_ONLY:
                return getMessage("modifier-hotbar-only");
            case ELYTRA_MODE:
                return getMessage("modifier-elytra-mode");
            default:
                return getMessage("modifier-none");
        }
    }

    private void applyTimeModifier(World world) {
        if (timeControlTask != null) {
            timeControlTask.cancel();
            timeControlTask = null;
        }

        boolean infiniteNight = activeModifiers.contains(GameModifier.INFINITE_NIGHT);
        boolean timeX2 = activeModifiers.contains(GameModifier.TIME_X2);

        if (infiniteNight || timeX2) {
            storeWorldState(world);
        }

        if (infiniteNight) {
            world.setGameRule(GameRule.DO_DAYLIGHT_CYCLE, false);
            world.setTime(18000);

            timeControlTask = new BukkitRunnable() {
                @Override
                public void run() {
                    if (!gameActive) {
                        cancel();
                        return;
                    }
                    if (gamePaused) return;
                    world.setTime(18000);
                }
            }.runTaskTimer(this, 0L, 20L);
            return;
        }

        if (getConfig().getBoolean("world.set-morning", true)) {
            world.setTime(0);
        }

        if (timeX2) {
            world.setGameRule(GameRule.DO_DAYLIGHT_CYCLE, true);
            timeControlTask = new BukkitRunnable() {

                @Override
                public void run() {
                    if (!gameActive) {
                        cancel();
                        return;
                    }
                    if (gamePaused) return;
                    world.setTime(world.getTime() + 1);
                }

            }.runTaskTimer(this, 0L, 1L);
        }
    }

    private void storeWorldState(World world) {
        if (originalWorldTime == null) {
            originalWorldTime = world.getTime();
        }
        if (originalDoDaylightCycle == null) {
            Boolean daylightCycle = world.getGameRuleValue(GameRule.DO_DAYLIGHT_CYCLE);
            originalDoDaylightCycle = daylightCycle != null ? daylightCycle : true;
        }
    }

    private void restoreWorldState() {
        if (originalWorldTime == null && originalDoDaylightCycle == null) {
            return;
        }

        World world = Bukkit.getWorlds().get(0);
        if (originalDoDaylightCycle != null) {
            world.setGameRule(GameRule.DO_DAYLIGHT_CYCLE, originalDoDaylightCycle);
        }
        if (originalWorldTime != null) {
            world.setTime(originalWorldTime);
        }

        originalDoDaylightCycle = null;
        originalWorldTime = null;
    }

    private void startModifierEnforcement() {
        if (modifierEnforcementTask != null) {
            modifierEnforcementTask.cancel();
            modifierEnforcementTask = null;
        }

        modifierEnforcementTask = new BukkitRunnable() {
            @Override
            public void run() {
                if (!gameActive) {
                    cancel();
                    return;
                }
                if (gamePaused) return;

                for (Player player : Bukkit.getOnlinePlayers()) {
                    if (activeModifiers.contains(GameModifier.HOTBAR_ONLY)) {
                        enforceHotbarOnly(player);
                    }
                    if (activeModifiers.contains(GameModifier.GOLDEN_TOOLS_ONLY)) {
                        enforceGoldenToolsOnly(player);
                    }
                    if (activeModifiers.contains(GameModifier.LUNAR_GRAVITY)) {
                        enforceLunarGravity(player);
                    }
                    if (gameStarted && activeModifiers.contains(GameModifier.ELYTRA_MODE)) {
                        enforceElytraMode(player);
                    }
                }
            }
        }.runTaskTimer(this, 0L, 10L);

        startLunarItemTask();
        startAggressiveAnimalsTask();
    }

    private void cleanupModifiers() {
        boolean lunarGravity = activeModifiers.contains(GameModifier.LUNAR_GRAVITY);

        if (modifierEnforcementTask != null) {
            modifierEnforcementTask.cancel();
            modifierEnforcementTask = null;
        }
        if (timeControlTask != null) {
            timeControlTask.cancel();
            timeControlTask = null;
        }
        if (lunarItemTask != null) {
            lunarItemTask.cancel();
            lunarItemTask = null;
        }
        if (aggressiveAnimalsTask != null) {
            aggressiveAnimalsTask.cancel();
            aggressiveAnimalsTask = null;
        }

        for (Player player : Bukkit.getOnlinePlayers()) {
            removeHotbarOnlyLock(player);

            if (lunarGravity) {
                player.removePotionEffect(PotionEffectType.JUMP_BOOST);
                player.removePotionEffect(PotionEffectType.SLOW_FALLING);
            }
        }

        landedFromCapsule.clear();
        lastAggressiveAnimalHit.clear();

        restoreWorldState();
        activeModifiers.clear();
    }

    private boolean isLockedSlotItem(ItemStack item) {
        return item != null && item.getType() == Material.BARRIER;
    }

    private ItemStack lockedSlotItemClone() {
        return lockedSlotItem.clone();
    }

    // Hotbar is the only usable storage during the event.
    // All other slots are filled with barrier items.
    private void enforceHotbarOnly(Player player) {
        PlayerInventory inv = player.getInventory();
        boolean changed = false;

        // Remove any barrier items from hotbar (should never happen, but just in case)
        for (int slot = 0; slot < 9; slot++) {
            ItemStack item = inv.getItem(slot);
            if (isLockedSlotItem(item)) {
                inv.setItem(slot, null);
                changed = true;
            }
        }

        // Main inventory slots (locked) - slots 9-35 only
        // Armor and offhand are NOT blocked - players can use them
        for (int slot = 9; slot < 36; slot++) {
            ItemStack item = inv.getItem(slot);

            if (item == null || item.getType() == Material.AIR) {
                inv.setItem(slot, lockedSlotItemClone());
                changed = true;
                continue;
            }

            if (isLockedSlotItem(item)) {
                continue;
            }

            ItemStack leftover = moveToHotbar(player, item);
            inv.setItem(slot, lockedSlotItemClone());
            changed = true;

            if (leftover != null && leftover.getType() != Material.AIR) {
                player.getWorld().dropItemNaturally(player.getLocation(), leftover);
            }
        }

        if (changed) {
            player.updateInventory();
        }
    }

    private void removeHotbarOnlyLock(Player player) {
        PlayerInventory inv = player.getInventory();
        boolean changed = false;

        // Only clear barriers from main inventory slots (9-35)
        // Armor and offhand are not blocked, so no cleanup needed for them
        for (int slot = 9; slot < 36; slot++) {
            if (isLockedSlotItem(inv.getItem(slot))) {
                inv.setItem(slot, null);
                changed = true;
            }
        }

        if (changed) {
            player.updateInventory();
        }
    }

    private ItemStack moveToHotbar(Player player, ItemStack stack) {
        if (stack == null || stack.getType() == Material.AIR) {
            return null;
        }

        PlayerInventory inv = player.getInventory();
        ItemStack working = stack.clone();
        int remaining = working.getAmount();

        // First, stack into existing hotbar stacks
        for (int i = 0; i < 9 && remaining > 0; i++) {
            ItemStack slot = inv.getItem(i);
            if (slot == null || slot.getType() == Material.AIR) {
                continue;
            }
            if (!slot.isSimilar(working)) {
                continue;
            }
            int max = slot.getMaxStackSize();
            int space = max - slot.getAmount();
            if (space <= 0) {
                continue;
            }
            int toAdd = Math.min(space, remaining);
            slot.setAmount(slot.getAmount() + toAdd);
            inv.setItem(i, slot);
            remaining -= toAdd;
        }

        // Then, fill empty hotbar slots
        for (int i = 0; i < 9 && remaining > 0; i++) {
            ItemStack slot = inv.getItem(i);
            if (slot != null && slot.getType() != Material.AIR) {
                continue;
            }

            int max = working.getMaxStackSize();
            int toPut = Math.min(max, remaining);

            ItemStack newStack = working.clone();
            newStack.setAmount(toPut);
            inv.setItem(i, newStack);
            remaining -= toPut;
        }

        if (remaining <= 0) {
            return null;
        }

        ItemStack leftover = working.clone();
        leftover.setAmount(remaining);
        return leftover;
    }

    private void enforceGoldenToolsOnly(Player player) {
        PlayerInventory inv = player.getInventory();
        boolean changed = false;

        for (int i = 0; i < 36; i++) {
            ItemStack item = inv.getItem(i);
            if (item == null || item.getType() == Material.AIR) {
                continue;
            }

            Material type = item.getType();
            if (isTool(type) && !isGoldenTool(type)) {
                inv.setItem(i, null);
                changed = true;
            }
        }

        ItemStack offHand = inv.getItemInOffHand();
        if (offHand != null && offHand.getType() != Material.AIR) {
            Material type = offHand.getType();
            if (isTool(type) && !isGoldenTool(type)) {
                inv.setItemInOffHand(null);
                changed = true;
            }
        }

        if (changed) {
            player.updateInventory();
        }
    }

    private boolean isTool(Material type) {
        String name = type.name();
        return name.endsWith("_SWORD") || name.endsWith("_PICKAXE") || name.endsWith("_AXE") || name.endsWith("_SHOVEL")
                || name.endsWith("_HOE");
    }

    private boolean isGoldenTool(Material type) {
        return isTool(type) && type.name().startsWith("GOLDEN_");
    }

    private boolean isAnimalFood(Material type) {
        switch (type) {
            case BEEF:
            case COOKED_BEEF:
            case PORKCHOP:
            case COOKED_PORKCHOP:
            case CHICKEN:
            case COOKED_CHICKEN:
            case MUTTON:
            case COOKED_MUTTON:
            case RABBIT:
            case COOKED_RABBIT:
            case COD:
            case COOKED_COD:
            case SALMON:
            case COOKED_SALMON:
            case TROPICAL_FISH:
            case PUFFERFISH:
            case ROTTEN_FLESH:
            case SPIDER_EYE:
            case RABBIT_STEW:
            case MILK_BUCKET:
            case HONEY_BOTTLE:
                return true;
            default:
                return false;
        }
    }

    private boolean canFitAtLeastOneInHotbar(PlayerInventory inv, ItemStack stack) {
        if (stack == null || stack.getType() == Material.AIR) {
            return false;
        }

        for (int i = 0; i < 9; i++) {
            ItemStack slot = inv.getItem(i);
            if (slot == null || slot.getType() == Material.AIR) {
                return true;
            }
            if (slot.isSimilar(stack) && slot.getAmount() < slot.getMaxStackSize()) {
                return true;
            }
        }
        return false;
    }

    private void enforceLunarGravity(Player player) {
        player.addPotionEffect(new PotionEffect(PotionEffectType.JUMP_BOOST, INFINITE_EFFECT_DURATION, 1, false, false),
                true);

        if (landedFromCapsule.contains(player.getUniqueId())) {
            player.addPotionEffect(
                    new PotionEffect(PotionEffectType.SLOW_FALLING, INFINITE_EFFECT_DURATION, 0, false, false),
                    true);
        }
    }

    private void enforceElytraMode(Player player) {
        PlayerInventory inv = player.getInventory();
        boolean changed = false;

        ItemStack chestplate = inv.getChestplate();
        if (chestplate == null || chestplate.getType() == Material.AIR) {
            inv.setChestplate(new ItemStack(Material.ELYTRA));
            changed = true;
        } else if (chestplate.getType() != Material.ELYTRA) {
            storeItemOrDrop(player, chestplate);
            inv.setChestplate(new ItemStack(Material.ELYTRA));
            changed = true;
        }
        // If player already has elytra (even enchanted), keep it as-is

        ItemStack offHand = inv.getItemInOffHand();
        if (offHand == null || offHand.getType() == Material.AIR) {
            inv.setItemInOffHand(createFireworkStack());
            changed = true;
        } else if (offHand.getType() != Material.FIREWORK_ROCKET) {
            storeItemOrDrop(player, offHand);
            inv.setItemInOffHand(createFireworkStack());
            changed = true;
        } else if (offHand.getAmount() < ELYTRA_FIREWORK_AMOUNT) {
            offHand.setAmount(ELYTRA_FIREWORK_AMOUNT);
            inv.setItemInOffHand(offHand);
            changed = true;
        }

        if (changed) {
            player.updateInventory();
        }
    }

    private ItemStack createFireworkStack() {
        return new ItemStack(Material.FIREWORK_ROCKET, ELYTRA_FIREWORK_AMOUNT);
    }

    private void storeItemOrDrop(Player player, ItemStack item) {
        if (item == null || item.getType() == Material.AIR) {
            return;
        }

        Map<Integer, ItemStack> leftovers = player.getInventory().addItem(item);
        for (ItemStack leftover : leftovers.values()) {
            player.getWorld().dropItemNaturally(player.getLocation(), leftover);
        }
    }

    private void startLunarItemTask() {
        if (lunarItemTask != null) {
            lunarItemTask.cancel();
            lunarItemTask = null;
        }

        if (!activeModifiers.contains(GameModifier.LUNAR_GRAVITY)) {
            return;
        }

        lunarItemTask = new BukkitRunnable() {
            @Override
            public void run() {
                if (!gameActive || !activeModifiers.contains(GameModifier.LUNAR_GRAVITY)) {
                    cancel();
                    return;
                }
                if (gamePaused) return;

                for (World world : Bukkit.getWorlds()) {
                    for (Item item : world.getEntitiesByClass(Item.class)) {
                        if (item.isOnGround()) {
                            continue;
                        }
                        Vector velocity = item.getVelocity();
                        if (velocity.getY() < -0.05) {
                            item.setVelocity(new Vector(velocity.getX(), velocity.getY() + 0.025, velocity.getZ()));
                        }
                    }
                }
            }
        }.runTaskTimer(this, 1L, 1L);
    }

    private void startAggressiveAnimalsTask() {
        if (aggressiveAnimalsTask != null) {
            aggressiveAnimalsTask.cancel();
            aggressiveAnimalsTask = null;
        }

        if (!activeModifiers.contains(GameModifier.AGGRESSIVE_ANIMALS)) {
            return;
        }

        aggressiveAnimalsTask = new BukkitRunnable() {
            private int cleanupCounter = 0;

            @Override
            public void run() {
                if (!gameActive || !activeModifiers.contains(GameModifier.AGGRESSIVE_ANIMALS)) {
                    cancel();
                    return;
                }
                if (gamePaused) return;

                // Cleanup dead entities from hit tracking every ~5 seconds (10 runs)
                cleanupCounter++;
                if (cleanupCounter >= 10) {
                    cleanupCounter = 0;
                    lastAggressiveAnimalHit.keySet().removeIf(uuid -> {
                        Entity entity = Bukkit.getEntity(uuid);
                        return entity == null || entity.isDead();
                    });
                }

                for (World world : Bukkit.getWorlds()) {
                    List<Player> players = world.getPlayers();
                    if (players.isEmpty()) {
                        continue;
                    }

                    for (LivingEntity entity : world.getLivingEntities()) {
                        if (entity instanceof Player) {
                            continue;
                        }
                        if (!isAggressiveAnimalCandidate(entity)) {
                            continue;
                        }

                        Player target = findNearestPlayer(entity.getLocation(), players, 24);
                        if (target == null) {
                            continue;
                        }

                        if (entity instanceof Mob) {
                            ((Mob) entity).setTarget(target);
                        }

                        Vector dir = target.getLocation().toVector().subtract(entity.getLocation().toVector());
                        double distanceSq = dir.lengthSquared();
                        if (distanceSq > 0.01 && distanceSq < (24 * 24)) {
                            dir.setY(0);
                            if (dir.lengthSquared() > 0.01) {
                                dir.normalize().multiply(0.12);
                                entity.setVelocity(entity.getVelocity().add(dir));
                            }
                        }

                        if (distanceSq <= (1.8 * 1.8) && entity.hasLineOfSight(target)) {
                            long now = System.currentTimeMillis();
                            UUID attackerId = entity.getUniqueId();
                            long last = lastAggressiveAnimalHit.getOrDefault(attackerId, 0L);
                            if (now - last >= 900) {
                                target.damage(1.0, entity);
                                lastAggressiveAnimalHit.put(attackerId, now);
                            }
                        }
                    }
                }
            }
        }.runTaskTimer(this, 20L, 10L);
    }

    private boolean isAggressiveAnimalCandidate(LivingEntity entity) {
        return entity instanceof Animals || entity instanceof WaterMob || entity instanceof Ambient;
    }

    private Player findNearestPlayer(Location from, List<Player> players, double maxDistance) {
        double maxDistanceSq = maxDistance * maxDistance;
        Player nearest = null;
        double nearestSq = Double.MAX_VALUE;

        for (Player player : players) {
            if (!player.isOnline() || player.isDead()) {
                continue;
            }

            Location playerLoc = player.getLocation();
            // Skip players in different worlds
            if (!playerLoc.getWorld().equals(from.getWorld())) {
                continue;
            }

            double distSq = playerLoc.distanceSquared(from);
            if (distSq > maxDistanceSq) {
                continue;
            }
            if (distSq < nearestSq) {
                nearestSq = distSq;
                nearest = player;
            }
        }

        return nearest;
    }

    private void openConfigMenu(Player player) {
        org.bukkit.inventory.Inventory inv = Bukkit.createInventory(null, MENU_SIZE, getMessage(MENU_TITLE_KEY));
        
        // Initialize pending state
        pendingRandomModifier = true; // Default to random
        pendingSpecificModifier = null;
        pendingRandomItem = true; // Default to random
        
        // If we have a previous target item from a previous game, allow switching to it
        // (logic handled in click event)
        
        updateConfigMenu(inv);
        player.openInventory(inv);
    }

    private void updateConfigMenu(org.bukkit.inventory.Inventory inv) {
        // 1. Item Selector (Slot 11)
        ItemStack itemSelector;
        if (pendingRandomItem) {
            itemSelector = new ItemStack(Material.CHEST);
            ItemMeta meta = itemSelector.getItemMeta();
            meta.setDisplayName(getMessage("menu-item-random"));
            meta.setLore(Collections.singletonList(getMessage("menu-item-lore-click")));
            itemSelector.setItemMeta(meta);
        } else {
            // Specific item
            itemSelector = new ItemStack(targetItem != null ? targetItem : Material.BARRIER);
            ItemMeta meta = itemSelector.getItemMeta();
            meta.setDisplayName(getMessage("menu-item-specific", "item", formatItemName(targetItem)));
            meta.setLore(Collections.singletonList(getMessage("menu-item-lore-click")));
            itemSelector.setItemMeta(meta);
        }
        inv.setItem(SLOT_ITEM, itemSelector);

        // 2. Start Button (Slot 13)
        ItemStack startBtn = new ItemStack(Material.LIME_CONCRETE);
        ItemMeta startMeta = startBtn.getItemMeta();
        startMeta.setDisplayName(getMessage("menu-start-title"));
        startMeta.setLore(Collections.singletonList(getMessage("menu-start-lore")));
        startBtn.setItemMeta(startMeta);
        inv.setItem(SLOT_START, startBtn);

        // 3. Modifier Selector (Slot 15)
        ItemStack modSelector;
        String modName;
        Material modIcon;
        
        if (pendingRandomModifier) {
            modName = "Random";
            modIcon = Material.COMMAND_BLOCK;
        } else if (pendingSpecificModifier == null) {
            modName = getMessage("modifier-none");
            modIcon = Material.BARRIER;
        } else {
            // Get display name for specific modifier
            // We need a way to get display name without activeModifiers set. 
            // Reuse logic or duplicate simple switch? simpler to duplicate for GUI or refactor.
            // Let's just use the enum name for now or map it.
            // Actually I can just add a helper method getModifierName(GameModifier)
            modName = getModifierName(pendingSpecificModifier);
            modIcon = Material.GOLD_BLOCK; // Generic icon or specific?
            
            // Optional: Specific icons
            switch (pendingSpecificModifier) {
                case GOLDEN_TOOLS_ONLY: modIcon = Material.GOLDEN_PICKAXE; break;
                case VEGETARIAN_ONLY: modIcon = Material.CARROT; break;
                case TIME_X2: modIcon = Material.CLOCK; break;
                case INFINITE_NIGHT: modIcon = Material.BLACK_BED; break;
                case LUNAR_GRAVITY: modIcon = Material.FEATHER; break;
                case NO_VILLAGER_TRADING: modIcon = Material.EMERALD; break;
                case RANDOM_BLOCK_DROPS: modIcon = Material.DISPENSER; break;
                case AGGRESSIVE_ANIMALS: modIcon = Material.ZOMBIE_HEAD; break;
                case HOTBAR_ONLY: modIcon = Material.STRUCTURE_VOID; break;
                case ELYTRA_MODE: modIcon = Material.ELYTRA; break;
            }
        }
        
        modSelector = new ItemStack(modIcon);
        ItemMeta modMeta = modSelector.getItemMeta();
        modMeta.setDisplayName(getMessage("menu-modifier-title", "modifier", modName));
        modMeta.setLore(Collections.singletonList(getMessage("menu-item-lore-click")));
        modSelector.setItemMeta(modMeta);
        inv.setItem(SLOT_MODIFIER, modSelector);
        
        // Fill background? optional.
    }
    
    private String getModifierName(GameModifier mod) {
        if (mod == null) return getMessage("modifier-none");
        switch (mod) {
            case GOLDEN_TOOLS_ONLY: return getMessage("modifier-golden-tools-only");
            case VEGETARIAN_ONLY: return getMessage("modifier-vegetarian-only");
            case TIME_X2: return getMessage("modifier-time-x2");
            case INFINITE_NIGHT: return getMessage("modifier-infinite-night");
            case LUNAR_GRAVITY: return getMessage("modifier-lunar-gravity");
            case NO_VILLAGER_TRADING: return getMessage("modifier-no-villager-trading");
            case RANDOM_BLOCK_DROPS: return getMessage("modifier-random-block-drops");
            case AGGRESSIVE_ANIMALS: return getMessage("modifier-aggressive-animals");
            case HOTBAR_ONLY: return getMessage("modifier-hotbar-only");
            case ELYTRA_MODE: return getMessage("modifier-elytra-mode");
            default: return mod.name();
        }
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (command.getName().equalsIgnoreCase("speedrun")) {
            if (!(sender instanceof Player)) {
                sender.sendMessage(getMessage("only-player"));
                return true;
            }

            if (gameActive) {
                sender.sendMessage(getMessage("game-already-running"));
                return true;
            }

            if (args.length < 1) {
                // Open GUI if no args
                openConfigMenu((Player) sender);
                return true;
            }

            String itemArg = args[0].toLowerCase();

            // Check for menu command explicitly
            if (itemArg.equals("menu")) {
                openConfigMenu((Player) sender);
                return true;
            }

            // Check for random mode
            if (itemArg.equals("random") || itemArg.equals("случайный")) {
                List<Material> obtainable = getAllObtainableItems();
                targetItem = obtainable.get(random.nextInt(obtainable.size()));
                sender.sendMessage(getMessage("random-item-selected", "item", formatItemName(targetItem)));
            } else {
                String itemId = itemArg.replace("minecraft:", "").toUpperCase();
                try {
                    targetItem = Material.valueOf(itemId);
                } catch (IllegalArgumentException e) {
                    sender.sendMessage(getMessage("unknown-item", "item", args[0]));
                    sender.sendMessage(getMessage("check-item-id"));
                    return true;
                }
            }

            String modifierArg = args.length >= 2 ? args[1] : null;
            if (!selectGameModifier(modifierArg, sender)) {
                return true;
            }

            startPreGame();
            return true;

        } else if (command.getName().equalsIgnoreCase("speedrunstop")) {
            if (!gameActive) {
                sender.sendMessage(getMessage("game-not-running"));
                return true;
            }
            stopGame();
            broadcastMessage(getMessage("game-stopped-admin"));
            return true;

        } else if (command.getName().equalsIgnoreCase("speedrunpause")) {
            if (!gameActive) {
                sender.sendMessage(getMessage("game-not-running"));
                return true;
            }
            if (gamePaused) {
                sender.sendMessage(getMessage("game-already-paused"));
                return true;
            }
            pauseGame();
            return true;

        } else if (command.getName().equalsIgnoreCase("speedrunresume")) {
            if (!gameActive) {
                sender.sendMessage(getMessage("game-not-running"));
                return true;
            }
            if (!gamePaused) {
                sender.sendMessage(getMessage("game-not-paused"));
                return true;
            }
            resumeGame();
            return true;
        }

        return false;
    }

    @Override
    public List<String> onTabComplete(CommandSender sender, Command command, String alias, String[] args) {
        List<String> completions = new ArrayList<>();

        if (command.getName().equalsIgnoreCase("speedrun")) {
            if (args.length == 1) {
                // First argument: item name or "random"
                String input = args[0].toLowerCase();

                // Add special options
                if ("random".startsWith(input)) {
                    completions.add("random");
                }
                if ("случайный".startsWith(input)) {
                    completions.add("случайный");
                }

                // Add material names (limited to first 50 matches for performance)
                int count = 0;
                for (Material material : Material.values()) {
                    if (!material.isItem() || material.isLegacy()) continue;
                    String name = material.name().toLowerCase();
                    if (name.startsWith(input)) {
                        completions.add(name);
                        count++;
                        if (count >= 50) break;
                    }
                }
            } else if (args.length == 2) {
                // Second argument: modifier
                String input = args[1].toLowerCase();
                String[] modifiers = {
                    "none", "random", "golden-tools", "vegetarian", "time-x2",
                    "infinite-night", "lunar-gravity", "no-villager-trading",
                    "random-block-drops", "aggressive-animals", "hotbar-only", "elytra-mode"
                };
                for (String mod : modifiers) {
                    if (mod.startsWith(input)) {
                        completions.add(mod);
                    }
                }
            }
        }

        return completions;
    }

    private void startPreGame() {
        gameActive = true;
        landedFromCapsule.clear();
        lastAggressiveAnimalHit.clear();

        World world = Bukkit.getWorlds().get(0);

        applyTimeModifier(world);

        // Teleport all players to sky platforms
        teleportPlayersToSkyPlatforms(world);

        // Heal and feed all players
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.setHealth(player.getAttribute(Attribute.GENERIC_MAX_HEALTH).getValue());
            player.setFoodLevel(20);
            player.setSaturation(20f);
            player.getInventory().clear();
            player.getInventory().setHelmet(null);
            player.getInventory().setChestplate(null);
            player.getInventory().setLeggings(null);
            player.getInventory().setBoots(null);
            player.getInventory().setItemInOffHand(null);
            player.setExp(0);
            player.setLevel(0);

            // Add for Adventure Mode initially (while on platform)
            player.setGameMode(GameMode.ADVENTURE);

            // Add fall protection initially (safe while on platform)
            protectedPlayers.add(player.getUniqueId());
        }

        broadcastTitle(getMessage("game-title"), getMessage("game-subtitle", "item", formatItemName(targetItem)), 10,
                40,
                10);
        broadcastMessage(getMessage("game-start-message"));
        broadcastMessage(getMessage("game-announcement"));
        broadcastMessage(getMessage("game-target", "item", formatItemName(targetItem)));

        if (!activeModifiers.isEmpty()) {
            broadcastMessage(getMessage("modifier-selected", "modifier", getModifierDisplayName()));
        }

        broadcastMessage(getMessage("game-start-message"));

        // Start tab update
        startTabUpdate();

        // Start enforcement tasks for hotbar lock + selected modifier
        startModifierEnforcement();

        // Countdown
        countdownTask = new BukkitRunnable() {
            int countdown = countdownTime;

            @Override
            public void run() {
                if (!gameActive) {
                    cancel();
                    return;
                }

                if (countdown <= 0) {
                    cancel();
                    removePlatformsAndStart();
                    return;
                }

                if (countdown <= 5) {
                    broadcastTitle(ChatColor.RED + String.valueOf(countdown), "", 0, 25, 0);
                    playCountdownSound();
                } else if (countdown % 5 == 0) {
                    broadcastMessage(getMessage("countdown-message", "seconds", countdown));
                }

                countdown--;
            }
        }.runTaskTimer(this, 0L, 20L);
    }

    private void teleportPlayersToSkyPlatforms(World world) {
        for (Player player : Bukkit.getOnlinePlayers()) {
            Location safeLoc = findSafeLocation(world);

            int x = safeLoc.getBlockX();
            int z = safeLoc.getBlockZ();
            int y = platformHeight; // High in the sky

            Location platformCenter = new Location(world, x, y, z);

            // Create platform (5x5 glass)
            createPlatform(world, x, y, z);

            // Store platform location for removal later
            playerPlatforms.put(player.getUniqueId(), platformCenter);

            // Teleport player on top of platform
            Location playerLoc = new Location(world, x + 0.5, y + 1, z + 0.5);
            player.teleport(playerLoc);
            player.sendMessage(getMessage("teleport-message", "x", x, "z", z));
        }
    }

    private Location findSafeLocation(World world) {
        int attempts = 100;
        while (attempts > 0) {
            int x = random.nextInt(spawnRange * 2) - spawnRange;
            int z = random.nextInt(spawnRange * 2) - spawnRange;

            // Check biome
            org.bukkit.block.Biome biome = world.getBiome(x, 64, z); // check biome at sea level
            if (biome == null) {
                attempts--;
                continue;
            }
            String biomeName = biome.name();
            if (biomeName.contains("OCEAN") || biomeName.contains("RIVER")) {
                attempts--;
                continue;
            }

            // Check ground block (highest block)
            int y = world.getHighestBlockYAt(x, z);
            // safe check if y is valid
            if (y <= world.getMinHeight()) {
                attempts--;
                continue;
            }
            Material block = world.getBlockAt(x, y, z).getType();
            if (block == Material.WATER || block == Material.LAVA) {
                attempts--;
                continue;
            }

            return new Location(world, x, y, z);
        }

        // Fallback if no safe location found
        return new Location(world, 0, 64, 0);
    }

    private void createPlatform(World world, int centerX, int centerY, int centerZ) {
        // Create a 3x3x4 glass capsule (enclosed on all sides except the top for
        // visibility)
        // Floor (Y)
        for (int x = centerX - 1; x <= centerX + 1; x++) {
            for (int z = centerZ - 1; z <= centerZ + 1; z++) {
                world.getBlockAt(x, centerY, z).setType(Material.GLASS);
            }
        }
        // Walls (Y+1, Y+2)
        for (int y = centerY + 1; y <= centerY + 2; y++) {
            for (int x = centerX - 1; x <= centerX + 1; x++) {
                for (int z = centerZ - 1; z <= centerZ + 1; z++) {
                    // Only set walls (edges), leave interior air
                    if (x == centerX - 1 || x == centerX + 1 || z == centerZ - 1 || z == centerZ + 1) {
                        world.getBlockAt(x, y, z).setType(Material.GLASS);
                    }
                }
            }
        }
        // Ceiling (Y+3)
        for (int x = centerX - 1; x <= centerX + 1; x++) {
            for (int z = centerZ - 1; z <= centerZ + 1; z++) {
                world.getBlockAt(x, centerY + 3, z).setType(Material.GLASS);
            }
        }
    }

    private void removePlatform(World world, int centerX, int centerY, int centerZ) {
        // Remove the entire capsule (floor, walls, ceiling)
        for (int y = centerY; y <= centerY + 3; y++) {
            for (int x = centerX - 1; x <= centerX + 1; x++) {
                for (int z = centerZ - 1; z <= centerZ + 1; z++) {
                    world.getBlockAt(x, y, z).setType(Material.AIR);
                }
            }
        }
    }

    private void removePlatformsAndStart() {
        World world = Bukkit.getWorlds().get(0);

        // Remove all platforms
        for (Map.Entry<UUID, Location> entry : playerPlatforms.entrySet()) {
            Location loc = entry.getValue();
            removePlatform(world, loc.getBlockX(), loc.getBlockY(), loc.getBlockZ());
        }

        playerPlatforms.clear();
        fallingPlayers.clear();

        // Mark ALL online players as falling and protected
        // This ensures everyone is covered even if they glitched or joined late
        for (Player player : Bukkit.getOnlinePlayers()) {
            fallingPlayers.add(player.getUniqueId());
            protectedPlayers.add(player.getUniqueId());

            // Set Survival Mode
            player.setGameMode(GameMode.SURVIVAL);

            if (activeModifiers.contains(GameModifier.ELYTRA_MODE)) {
                enforceElytraMode(player);
            }

            // Give God Mode (Resistance 255) for 20 seconds to guarantee fall survival
            player.addPotionEffect(new org.bukkit.potion.PotionEffect(
                    org.bukkit.potion.PotionEffectType.RESISTANCE,
                    400, // 20 seconds (400 ticks)
                    255, // Max amplifier (invulnerable)
                    false,
                    false));

            // Add to active players list
            activePlayers.add(player.getUniqueId());
        }

        // Store initial player count for last-man-standing logic
        initialPlayerCount = activePlayers.size();
        gameStarted = true;

        // Play start sound
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.playSound(player.getLocation(), Sound.ENTITY_ENDER_DRAGON_GROWL, 1.0f, 1.0f);
        }

        broadcastTitle(getMessage("start-title"), getMessage("start-subtitle", "item", formatItemName(targetItem)), 0,
                40,
                10);

        startTime = System.currentTimeMillis();

        // Start inventory check task (every second)
        inventoryCheckTask = new BukkitRunnable() {
            @Override
            public void run() {
                if (!gameActive) {
                    cancel();
                    return;
                }
                if (gamePaused) return;

                for (Player player : Bukkit.getOnlinePlayers()) {
                    if (player.getInventory().contains(targetItem)) {
                        playerWins(player);
                        cancel();
                        return;
                    }
                }
            }
        }.runTaskTimer(this, 20L, 20L);

        // Timer display task removed as requested
    }

    private void startTabUpdate() {
        tabUpdateTask = new BukkitRunnable() {
            @Override
            public void run() {
                if (!gameActive) {
                    // Clear tab when game ends
                    for (Player player : Bukkit.getOnlinePlayers()) {
                        player.setPlayerListHeaderFooter("", "");
                    }
                    cancel();
                    return;
                }
                if (gamePaused) return;

                String time = startTime > 0 ? formatTime(System.currentTimeMillis() - startTime) : "00:00";
                String header = getMessage("tab-header", "item", formatItemName(targetItem), "modifier",
                        getModifierDisplayName());
                int activeCount = activePlayers.size();
                int totalCount = Bukkit.getOnlinePlayers().size();
                String footer = getMessage("tab-footer", "time", time, "active", activeCount, "total", totalCount);

                for (Player player : Bukkit.getOnlinePlayers()) {
                    player.setPlayerListHeaderFooter(header, footer);
                }
            }
        }.runTaskTimer(this, 0L, 10L); // Update every 0.5 seconds
    }

    @EventHandler
    public void onInventoryClick(InventoryClickEvent event) {
        if (event.getView().getTitle().equals(getMessage(MENU_TITLE_KEY))) {
            event.setCancelled(true);
            if (event.getCurrentItem() == null) return;
            
            Player player = (Player) event.getWhoClicked();
            int slot = event.getSlot();
            
            if (slot == SLOT_ITEM) {
                // Toggle Random Item <-> Specific (if set previously, otherwise just stay Random)
                // Since we don't have an anvil GUI, let's just toggle Random ON/OFF if targetItem is already set.
                // If targetItem is null, we can only be Random.
                if (targetItem != null) {
                    pendingRandomItem = !pendingRandomItem;
                    // If we switched to specific but targetItem is null (shouldn't happen with logic above), switch back
                } else {
                    pendingRandomItem = true;
                    // Maybe play a sound indicating "Use command to set specific item first"
                }
                updateConfigMenu(event.getClickedInventory());
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 1, 1);
            } else if (slot == SLOT_MODIFIER) {
                // Cycle modifiers: Random -> None -> [List...] -> Random
                if (pendingRandomModifier) {
                    pendingRandomModifier = false;
                    pendingSpecificModifier = null; // None
                } else if (pendingSpecificModifier == null) {
                    // Was None, go to first modifier
                    if (!modifierPool.isEmpty()) {
                        pendingSpecificModifier = modifierPool.iterator().next();
                    } else {
                        // No modifiers available, go back to Random
                        pendingRandomModifier = true;
                    }
                } else {
                    // Go to next modifier
                    List<GameModifier> mods = new ArrayList<>(modifierPool);
                    int index = mods.indexOf(pendingSpecificModifier);
                    if (index >= 0 && index < mods.size() - 1) {
                        pendingSpecificModifier = mods.get(index + 1);
                    } else {
                        // End of list, go back to Random
                        pendingRandomModifier = true;
                        pendingSpecificModifier = null;
                    }
                }
                updateConfigMenu(event.getClickedInventory());
                player.playSound(player.getLocation(), Sound.UI_BUTTON_CLICK, 1, 1);
            } else if (slot == SLOT_START) {
                player.closeInventory();
                
                // Configure game based on pending settings
                if (pendingRandomItem) {
                    List<Material> obtainable = getAllObtainableItems();
                    targetItem = obtainable.get(random.nextInt(obtainable.size()));
                    broadcastMessage(getMessage("random-item-selected", "item", formatItemName(targetItem)));
                } else {
                    // Use existing targetItem
                    if (targetItem == null) {
                         // Fallback
                         List<Material> obtainable = getAllObtainableItems();
                         targetItem = obtainable.get(random.nextInt(obtainable.size()));
                    }
                }
                
                activeModifiers.clear();
                if (pendingRandomModifier) {
                    GameModifier randomMod = pickRandomModifier();
                    if (randomMod != null) activeModifiers.add(randomMod);
                } else if (pendingSpecificModifier != null) {
                    activeModifiers.add(pendingSpecificModifier);
                }
                
                startPreGame();
            }
            return;
        }

        if (!gameActive || !activeModifiers.contains(GameModifier.HOTBAR_ONLY)) {
            return;
        }

        if (!(event.getWhoClicked() instanceof Player)) {
            return;
        }

        Player player = (Player) event.getWhoClicked();

        if (event.getClickedInventory() == null) {
            return;
        }

        // Allow shift-click only if the item can fit in the hotbar
        if (event.isShiftClick() && !(event.getClickedInventory() instanceof PlayerInventory)) {
            ItemStack current = event.getCurrentItem();
            if (current != null && current.getType() != Material.AIR
                    && !canFitAtLeastOneInHotbar(player.getInventory(), current)) {
                event.setCancelled(true);
                return;
            }
        }

        // Allow only hotbar slots in player inventory
        if (event.getClickedInventory() instanceof PlayerInventory) {
            int slot = event.getSlot();
            if (slot >= 9 && slot < 36) {
                event.setCancelled(true);
            }
        }
    }

    @EventHandler
    public void onInventoryDrag(InventoryDragEvent event) {
        if (!gameActive || !activeModifiers.contains(GameModifier.HOTBAR_ONLY)) {
            return;
        }

        int topSize = event.getView().getTopInventory().getSize();
        for (int rawSlot : event.getRawSlots()) {
            if (rawSlot >= topSize) {
                int slot = rawSlot - topSize;
                if (slot >= 9 && slot < 36) {
                    event.setCancelled(true);
                    return;
                }
            }
        }
    }

    @EventHandler
    public void onSwapHandItems(PlayerSwapHandItemsEvent event) {
        // Allow hand swapping during the game - offhand is not blocked
    }

    @EventHandler
    public void onEntityPickupItem(EntityPickupItemEvent event) {
        if (!gameActive || !activeModifiers.contains(GameModifier.HOTBAR_ONLY)) {
            return;
        }

        if (!(event.getEntity() instanceof Player)) {
            return;
        }

        Player player = (Player) event.getEntity();
        ItemStack stack = event.getItem().getItemStack();

        if (!canFitAtLeastOneInHotbar(player.getInventory(), stack)) {
            event.setCancelled(true);
        }
    }

    @EventHandler
    public void onItemConsume(PlayerItemConsumeEvent event) {
        if (!gameActive || !activeModifiers.contains(GameModifier.VEGETARIAN_ONLY)) {
            return;
        }

        ItemStack item = event.getItem();
        if (item == null) {
            return;
        }

        if (isAnimalFood(item.getType())) {
            event.setCancelled(true);
            event.getPlayer().sendMessage(getMessage("vegetarian-blocked"));
        }
    }

    @EventHandler
    public void onPlayerBedEnter(PlayerBedEnterEvent event) {
        if (!gameActive || !activeModifiers.contains(GameModifier.INFINITE_NIGHT)) {
            return;
        }

        event.setCancelled(true);
        event.getPlayer().sendMessage(getMessage("night-no-sleep"));
    }

    @EventHandler
    public void onPlayerRespawn(PlayerRespawnEvent event) {
        if (!gameActive) {
            return;
        }

        Player player = event.getPlayer();
        Bukkit.getScheduler().runTask(this, () -> {
            if (!gameActive) {
                return;
            }

            if (activeModifiers.contains(GameModifier.HOTBAR_ONLY)) {
                enforceHotbarOnly(player);
            }
            if (activeModifiers.contains(GameModifier.LUNAR_GRAVITY)) {
                enforceLunarGravity(player);
            }
            if (gameStarted && activeModifiers.contains(GameModifier.ELYTRA_MODE)) {
                enforceElytraMode(player);
            }
        });
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        Player player = event.getPlayer();
        Bukkit.getScheduler().runTask(this, () -> {
            if (gameActive) {
                // Add player to active players if game has started
                if (gameStarted) {
                    activePlayers.add(player.getUniqueId());
                    player.sendMessage(getMessage("game-target", "item", formatItemName(targetItem)));
                } else {
                    return;
                }

                if (activeModifiers.contains(GameModifier.HOTBAR_ONLY)) {
                    enforceHotbarOnly(player);
                }
                if (activeModifiers.contains(GameModifier.LUNAR_GRAVITY)) {
                    enforceLunarGravity(player);
                }
                if (gameStarted && activeModifiers.contains(GameModifier.ELYTRA_MODE)) {
                    enforceElytraMode(player);
                }
                return;
            }

            // Clean up leftovers (in case player disconnected during a game)
            removeHotbarOnlyLock(player);
            player.removePotionEffect(PotionEffectType.JUMP_BOOST);
            player.removePotionEffect(PotionEffectType.SLOW_FALLING);
        });
    }

    @EventHandler
    public void onPlayerInteractEntity(PlayerInteractEntityEvent event) {
        if (!gameActive || !activeModifiers.contains(GameModifier.NO_VILLAGER_TRADING)) {
            return;
        }

        Entity clicked = event.getRightClicked();
        if (clicked.getType() == EntityType.VILLAGER || clicked.getType() == EntityType.WANDERING_TRADER) {
            event.setCancelled(true);
            event.getPlayer().sendMessage(getMessage("villager-trading-blocked"));
        }
    }

    @EventHandler
    public void onInventoryOpen(InventoryOpenEvent event) {
        if (!gameActive || !activeModifiers.contains(GameModifier.NO_VILLAGER_TRADING)) {
            return;
        }

        if (event.getInventory().getType() != InventoryType.MERCHANT) {
            return;
        }

        event.setCancelled(true);
        if (event.getPlayer() instanceof Player) {
            ((Player) event.getPlayer()).sendMessage(getMessage("villager-trading-blocked"));
        }
    }

    @EventHandler
    public void onBlockBreak(BlockBreakEvent event) {
        if (!gameActive || !gameStarted || !activeModifiers.contains(GameModifier.RANDOM_BLOCK_DROPS)) {
            return;
        }

        // Cancel normal block drops
        event.setDropItems(false);

        List<Material> obtainable = getAllObtainableItems();
        if (obtainable.isEmpty()) {
            return;
        }

        // Drop a random item instead of the normal block drop
        Material drop = obtainable.get(random.nextInt(obtainable.size()));
        event.getBlock().getWorld().dropItemNaturally(event.getBlock().getLocation().add(0.5, 0.5, 0.5),
                new ItemStack(drop));
    }

    // Event handler for fall damage protection
    @EventHandler
    public void onEntityDamage(EntityDamageEvent event) {
        if (!(event.getEntity() instanceof Player))
            return;

        Player player = (Player) event.getEntity();

        // Cancel fall damage for protected players
        if (event.getCause() == EntityDamageEvent.DamageCause.FALL &&
                protectedPlayers.contains(player.getUniqueId())) {
            event.setCancelled(true);
        }
    }

    // Event handler to detect landing
    @EventHandler
    public void onPlayerMove(PlayerMoveEvent event) {
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();

        // Check if player was falling and has now landed
        if (fallingPlayers.contains(uuid)) {
            // Check if player is on ground by checking block below AND velocity
            Location loc = player.getLocation();
            boolean blockBelowIsSolid = loc.getBlock().getRelative(0, -1, 0).getType().isSolid();
            boolean isMovingDown = player.getVelocity().getY() < -0.1;

            // If block below is solid and NOT moving down quickly (meaning stopped falling)
            if (player.isOnGround()) {
                fallingPlayers.remove(uuid);

                landedFromCapsule.add(uuid);
                if (activeModifiers.contains(GameModifier.LUNAR_GRAVITY)) {
                    player.addPotionEffect(
                            new PotionEffect(PotionEffectType.SLOW_FALLING, INFINITE_EFFECT_DURATION, 0, false, false),
                            true);
                }

                // Keep protection for configured seconds after landing
                player.sendMessage(getMessage("landed-message", "seconds", fallProtectionDuration));

                new BukkitRunnable() {
                    @Override
                    public void run() {
                        if (protectedPlayers.contains(uuid)) {
                            protectedPlayers.remove(uuid);
                            Player p = Bukkit.getPlayer(uuid);
                            if (p != null) {
                                p.sendMessage(getMessage("protection-removed"));
                                if (soundsEnabled) {
                                    p.playSound(p.getLocation(), Sound.BLOCK_NOTE_BLOCK_BASS, 1.0f, 1.0f);
                                }
                            }
                        }
                    }
                }.runTaskLater(SpeedrunPlugin.this, (long) fallProtectionDuration * 20L);
            }
        }
    }

    // Event handler for player death - remove from active players
    @EventHandler
    public void onPlayerDeath(PlayerDeathEvent event) {
        if (!gameActive || !gameStarted)
            return;

        Player player = event.getEntity();
        activePlayers.remove(player.getUniqueId());

        broadcastMessage(getMessage("player-died", "player", player.getName(), "count", activePlayers.size()));

        checkLastManStanding();
    }

    // Event handler for player quit - remove from active players
    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        Player player = event.getPlayer();
        UUID uuid = player.getUniqueId();

        // Clean up pause data if player quits during pause
        if (gamePaused) {
            prePauseLocations.remove(uuid);
            prePauseGameModes.remove(uuid);
        }

        if (!gameActive || !gameStarted)
            return;

        if (activePlayers.contains(uuid)) {
            activePlayers.remove(uuid);

            broadcastMessage(getMessage("player-left", "player", player.getName(), "count", activePlayers.size()));

            checkLastManStanding();
        }
    }

    // Check if only one player remains and declare them winner
    private void checkLastManStanding() {
        if (!gameActive || !gameStarted)
            return;

        // Easy mode - don't give victory to last survivor
        if (easyMode)
            return;

        // Only trigger last-man-standing if game started with more than 1 player
        if (initialPlayerCount <= 1)
            return;

        // Take a snapshot to avoid race conditions
        Set<UUID> activeSnapshot = new HashSet<>(activePlayers);

        if (activeSnapshot.size() == 1) {
            UUID winnerUUID = activeSnapshot.iterator().next();
            Player winner = Bukkit.getPlayer(winnerUUID);

            if (winner != null && winner.isOnline()) {
                broadcastMessage(getMessage("last-survivor", "player", winner.getName()));
                playerWinsTechnical(winner);
            }
        } else if (activeSnapshot.isEmpty()) {
            // Everyone died/left
            stopGame();
            broadcastMessage(getMessage("all-died"));
        }
    }

    private void playerWins(Player winner) {
        long endTime = System.currentTimeMillis();
        String finalTime = formatTime(endTime - startTime);

        // Stop tasks immediately to prevent race conditions
        if (inventoryCheckTask != null)
            inventoryCheckTask.cancel();
        if (timerDisplayTask != null)
            timerDisplayTask.cancel();
        if (tabUpdateTask != null)
            tabUpdateTask.cancel();
        
        gameActive = false;
        gameStarted = false;

        cleanupModifiers();

        // Clear protection sets
        fallingPlayers.clear();
        protectedPlayers.clear();

        // Spawn fireworks at winner's location
        if (fireworksEnabled) {
            spawnFireworks(winner.getLocation(), fireworksCount);
        }

        // Play victory sound
        for (Player player : Bukkit.getOnlinePlayers()) {
            if (soundsEnabled) {
                player.playSound(player.getLocation(), Sound.UI_TOAST_CHALLENGE_COMPLETE, 1.0f, 1.0f);
            }

            // Update tab with final time
            String header = getMessage("tab-victory-header");
            String footer = getMessage("tab-victory-footer", "player", winner.getName(), "time", finalTime);
            player.setPlayerListHeaderFooter(header, footer);
        }

        // Announce winner
        broadcastMessage("");
        broadcastMessage(getMessage("victory-header"));
        broadcastMessage(getMessage("victory-title"));
        broadcastMessage(getMessage("victory-separator"));
        broadcastMessage(getMessage("victory-player", "player", winner.getName()));
        broadcastMessage(getMessage("victory-item", "item", formatItemName(targetItem)));
        broadcastMessage(getMessage("victory-time", "time", finalTime));
        broadcastMessage(getMessage("victory-footer"));
        broadcastMessage("");

        broadcastTitle(getMessage("victory-broadcast-title", "player", winner.getName()),
                getMessage("victory-broadcast-subtitle", "time", finalTime), 10, 100, 20);
    }

    private void playerWinsTechnical(Player winner) {
        long endTime = System.currentTimeMillis();
        String finalTime = formatTime(endTime - startTime);

        // Stop tasks immediately to prevent race conditions
        if (inventoryCheckTask != null)
            inventoryCheckTask.cancel();
        if (timerDisplayTask != null)
            timerDisplayTask.cancel();
        if (tabUpdateTask != null)
            tabUpdateTask.cancel();

        gameActive = false;
        gameStarted = false;

        cleanupModifiers();

        // Clear protection sets
        fallingPlayers.clear();
        protectedPlayers.clear();

        // Spawn fireworks at winner's location
        if (fireworksEnabled) {
            spawnFireworks(winner.getLocation(), fireworksCount);
        }

        // Play victory sound
        for (Player player : Bukkit.getOnlinePlayers()) {
            if (soundsEnabled) {
                player.playSound(player.getLocation(), Sound.UI_TOAST_CHALLENGE_COMPLETE, 1.0f, 1.0f);
            }

            // Update tab with final time
            String header = getMessage("tab-victory-header");
            String footer = getMessage("tab-technical-victory-footer", "player", winner.getName(), "time", finalTime);
            player.setPlayerListHeaderFooter(header, footer);
        }

        // Announce technical winner
        broadcastMessage("");
        broadcastMessage(getMessage("technical-victory-header"));
        broadcastMessage(getMessage("technical-victory-title"));
        broadcastMessage(getMessage("technical-victory-separator"));
        broadcastMessage(getMessage("technical-victory-player", "player", winner.getName()));
        broadcastMessage(getMessage("technical-victory-reason"));
        broadcastMessage(getMessage("victory-time", "time", finalTime));
        broadcastMessage(getMessage("technical-victory-footer"));
        broadcastMessage("");

        broadcastTitle(getMessage("technical-victory-broadcast-title", "player", winner.getName()),
                getMessage("technical-victory-broadcast-subtitle", "time", finalTime), 10, 100, 20);
    }

    private void spawnFireworks(Location location, int count) {
        fireworksTask = new BukkitRunnable() {
            int spawned = 0;

            @Override
            public void run() {
                if (spawned >= count) {
                    cancel();
                    return;
                }

                Location fireworkLoc = location.clone().add(
                        random.nextDouble() * 6 - 3,
                        random.nextDouble() * 2,
                        random.nextDouble() * 6 - 3);

                Firework firework = (Firework) location.getWorld().spawnEntity(fireworkLoc, EntityType.FIREWORK_ROCKET);
                FireworkMeta meta = firework.getFireworkMeta();

                meta.addEffect(FireworkEffect.builder()
                        .withColor(Color.fromRGB(random.nextInt(256), random.nextInt(256), random.nextInt(256)))
                        .withFade(Color.WHITE)
                        .with(FireworkEffect.Type.values()[random.nextInt(FireworkEffect.Type.values().length)])
                        .trail(true)
                        .flicker(true)
                        .build());

                meta.setPower(1);
                firework.setFireworkMeta(meta);

                spawned++;
            }
        }.runTaskTimer(this, 0L, 5L);
    }

    private void pauseGame() {
        gamePaused = true;
        pauseElapsedTime = System.currentTimeMillis() - startTime;

        // Find a safe location for the box (high up)
        World world = Bukkit.getWorlds().get(0);
        // Use a fixed location far away
        int x = 10000;
        int z = 10000;
        pauseBoxLocation = new Location(world, x, 200, z);

        createPauseBox(pauseBoxLocation);

        prePauseLocations.clear();
        prePauseGameModes.clear();

        // Prepare clickable message using BungeeCord API
        TextComponent message = new TextComponent(getMessage("game-paused"));
        TextComponent button = new TextComponent(getMessage("game-paused-click"));
        button.setClickEvent(new ClickEvent(ClickEvent.Action.RUN_COMMAND, "/speedrunresume"));

        for (Player player : Bukkit.getOnlinePlayers()) {
            prePauseLocations.put(player.getUniqueId(), player.getLocation());
            prePauseGameModes.put(player.getUniqueId(), player.getGameMode());

            // Teleport to box center
            Location tpLoc = pauseBoxLocation.clone().add(0.5, 1, 0.5);
            tpLoc.setYaw(0);
            tpLoc.setPitch(0);

            player.teleport(tpLoc);
            player.setGameMode(GameMode.ADVENTURE);

            player.spigot().sendMessage(message);
            player.spigot().sendMessage(button);
        }

        broadcastMessage(getMessage("game-paused"));
    }

    private void resumeGame() {
        gamePaused = false;
        startTime = System.currentTimeMillis() - pauseElapsedTime;

        removePauseBox();

        for (Player player : Bukkit.getOnlinePlayers()) {
            if (prePauseLocations.containsKey(player.getUniqueId())) {
                player.teleport(prePauseLocations.get(player.getUniqueId()));
            }
            if (prePauseGameModes.containsKey(player.getUniqueId())) {
                player.setGameMode(prePauseGameModes.get(player.getUniqueId()));
            }
            player.sendMessage(getMessage("game-resumed"));
        }

        prePauseLocations.clear();
        prePauseGameModes.clear();

        broadcastMessage(getMessage("game-resumed"));
    }

    private void createPauseBox(Location center) {
        int r = 2; // radius 2 -> 5x5
        for (int x = -r; x <= r; x++) {
            for (int y = 0; y <= 4; y++) {
                for (int z = -r; z <= r; z++) {
                    Location loc = center.clone().add(x, y, z);
                    Block block = loc.getBlock();

                    if (y == 0 || y == 4 || x == -r || x == r || z == -r || z == r) {
                        block.setType(Material.GLASS);
                    } else {
                        block.setType(Material.AIR);
                    }
                }
            }
        }
    }

    private void removePauseBox() {
        if (pauseBoxLocation == null)
            return;

        int r = 2;
        for (int x = -r; x <= r; x++) {
            for (int y = 0; y <= 4; y++) {
                for (int z = -r; z <= r; z++) {
                    Location loc = pauseBoxLocation.clone().add(x, y, z);
                    loc.getBlock().setType(Material.AIR);
                }
            }
        }
    }

    private void stopGame() {
        if (gamePaused) {
            removePauseBox();
            gamePaused = false;
        }
        prePauseLocations.clear();
        prePauseGameModes.clear();
        pauseBoxLocation = null;

        gameActive = false;
        gameStarted = false;
        targetItem = null;
        startTime = 0;
        initialPlayerCount = 0;

        // Cancel tasks
        if (countdownTask != null) {
            countdownTask.cancel();
            countdownTask = null;
        }
        if (fireworksTask != null) {
            fireworksTask.cancel();
            fireworksTask = null;
        }

        // Clear all tracking
        playerPlatforms.clear();
        fallingPlayers.clear();
        protectedPlayers.clear();
        activePlayers.clear();

        if (inventoryCheckTask != null) {
            inventoryCheckTask.cancel();
            inventoryCheckTask = null;
        }
        if (timerDisplayTask != null) {
            timerDisplayTask.cancel();
            timerDisplayTask = null;
        }
        if (tabUpdateTask != null) {
            tabUpdateTask.cancel();
            tabUpdateTask = null;
        }

        cleanupModifiers();

        // Clear tab for all players
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.setPlayerListHeaderFooter("", "");
        }
    }

    // Format time (minutes and seconds only)
    private String formatTime(long millis) {
        long seconds = millis / 1000;
        long minutes = seconds / 60;
        seconds = seconds % 60;
        return String.format("%02d:%02d", minutes, seconds);
    }

    private String formatItemName(Material material) {
        if (material == null)
            return "???";
        String name = material.name().toLowerCase().replace("_", " ");
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    private void broadcastMessage(String message) {
        Bukkit.broadcastMessage(message);
    }

    private void broadcastTitle(String title, String subtitle, int fadeIn, int stay, int fadeOut) {
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.sendTitle(title, subtitle, fadeIn, stay, fadeOut);
        }
    }

    private void playCountdownSound() {
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.playSound(player.getLocation(), Sound.BLOCK_NOTE_BLOCK_PLING, 1.0f, 1.0f);
        }
    }
}
