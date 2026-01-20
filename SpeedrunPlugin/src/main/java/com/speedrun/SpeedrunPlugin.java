
package com.speedrun;

import org.bukkit.*;
import org.bukkit.GameMode;

import org.bukkit.attribute.Attribute;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;

import org.bukkit.entity.EntityType;
import org.bukkit.entity.Firework;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageEvent;
import org.bukkit.event.entity.PlayerDeathEvent;
import org.bukkit.event.player.PlayerMoveEvent;
import org.bukkit.event.player.PlayerQuitEvent;
import org.bukkit.inventory.meta.FireworkMeta;

import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scheduler.BukkitRunnable;
import org.bukkit.scheduler.BukkitTask;

import java.util.*;

public class SpeedrunPlugin extends JavaPlugin implements Listener {

    private boolean gameActive = false;
    private boolean gameStarted = false; // True after countdown, false during countdown
    private Material targetItem = null;
    private long startTime = 0;
    private BukkitTask inventoryCheckTask = null;
    private BukkitTask timerDisplayTask = null;
    private BukkitTask tabUpdateTask = null;
    private final Random random = new Random();

    // Tracking
    private final Map<UUID, Location> playerPlatforms = new HashMap<>();
    private final Set<UUID> fallingPlayers = new HashSet<>();
    private final Set<UUID> protectedPlayers = new HashSet<>();
    private final Set<UUID> activePlayers = new HashSet<>(); // Players still in the game
    private int initialPlayerCount = 0; // How many players started the game

    @Override
    public void onEnable() {
        getServer().getPluginManager().registerEvents(this, this);
        getLogger().info("SpeedrunPlugin enabled! Use /speedrun <item_id> to start.");
    }

    @Override
    public void onDisable() {
        stopGame();
        getLogger().info("SpeedrunPlugin disabled.");
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (command.getName().equalsIgnoreCase("speedrun")) {
            if (!(sender instanceof Player)) {
                sender.sendMessage(ChatColor.RED + "Эту команду может выполнить только игрок!");
                return true;
            }

            if (gameActive) {
                sender.sendMessage(ChatColor.RED + "Игра уже запущена! Используйте /speedrunstop чтобы остановить.");
                return true;
            }

            if (args.length < 1) {
                sender.sendMessage(ChatColor.RED + "Использование: /speedrun <item_id>");
                sender.sendMessage(ChatColor.GRAY + "Пример: /speedrun minecraft:diamond");
                return true;
            }

            String itemId = args[0].replace("minecraft:", "").toUpperCase();

            try {
                targetItem = Material.valueOf(itemId);
            } catch (IllegalArgumentException e) {
                sender.sendMessage(ChatColor.RED + "Неизвестный предмет: " + args[0]);
                sender.sendMessage(ChatColor.GRAY + "Убедитесь, что ID правильный (например: minecraft:diamond)");
                return true;
            }

            startPreGame();
            return true;

        } else if (command.getName().equalsIgnoreCase("speedrunstop")) {
            if (!gameActive) {
                sender.sendMessage(ChatColor.RED + "Игра не запущена.");
                return true;
            }
            stopGame();
            broadcastMessage(ChatColor.YELLOW + "⚠ Спидран остановлен администратором!");
            return true;
        }

        return false;
    }

    private void startPreGame() {
        gameActive = true;

        World world = Bukkit.getWorlds().get(0);

        // Set time to morning
        world.setTime(0);

        // Teleport all players to sky platforms
        teleportPlayersToSkyPlatforms(world);

        // Heal and feed all players
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.setHealth(player.getAttribute(Attribute.GENERIC_MAX_HEALTH).getValue());
            player.setFoodLevel(20);
            player.setSaturation(20f);
            player.getInventory().clear();
            player.setExp(0);
            player.setLevel(0);

            // Add fall protection initially (safe while on platform)
            protectedPlayers.add(player.getUniqueId());

            // Force Survival Mode immediately
            player.setGameMode(GameMode.SURVIVAL);
        }

        broadcastTitle(ChatColor.GOLD + "СПИДРАН", ChatColor.YELLOW + "Цель: " + formatItemName(targetItem), 10, 40,
                10);
        broadcastMessage(ChatColor.GREEN + "═══════════════════════════════════");
        broadcastMessage(ChatColor.GOLD + "🎯 СПИДРАН НАЧИНАЕТСЯ!");
        broadcastMessage(ChatColor.WHITE + "Цель: " + ChatColor.AQUA + formatItemName(targetItem));
        broadcastMessage(ChatColor.GREEN + "═══════════════════════════════════");

        // Start tab update
        startTabUpdate();

        // Countdown from 20
        new BukkitRunnable() {
            int countdown = 20;

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
                    broadcastMessage(ChatColor.YELLOW + "Старт через " + countdown + " секунд...");
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
            int y = 200; // High in the sky

            Location platformCenter = new Location(world, x, y, z);

            // Create platform (5x5 glass)
            createPlatform(world, x, y, z);

            // Store platform location for removal later
            playerPlatforms.put(player.getUniqueId(), platformCenter);

            // Teleport player on top of platform
            Location playerLoc = new Location(world, x + 0.5, y + 1, z + 0.5);
            player.teleport(playerLoc);
            player.sendMessage(ChatColor.GREEN + "✓ Вы телепортированы в случайную точку: X=" + x + " Z=" + z);
        }
    }

    private Location findSafeLocation(World world) {
        int attempts = 100;
        while (attempts > 0) {
            int x = random.nextInt(10000) - 5000;
            int z = random.nextInt(10000) - 5000;

            // Check biome
            org.bukkit.block.Biome biome = world.getBiome(x, 64, z); // check biome at sea level
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
        for (int x = centerX - 2; x <= centerX + 2; x++) {
            for (int z = centerZ - 2; z <= centerZ + 2; z++) {
                world.getBlockAt(x, centerY, z).setType(Material.GLASS);
            }
        }
    }

    private void removePlatform(World world, int centerX, int centerY, int centerZ) {
        for (int x = centerX - 2; x <= centerX + 2; x++) {
            for (int z = centerZ - 2; z <= centerZ + 2; z++) {
                world.getBlockAt(x, centerY, z).setType(Material.AIR);
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

        broadcastTitle(ChatColor.GREEN + "СТАРТ!", ChatColor.AQUA + "Найдите: " + formatItemName(targetItem), 0, 40,
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

                String time = startTime > 0 ? formatTimeSeconds(System.currentTimeMillis() - startTime) : "00:00";
                String header = ChatColor.GOLD + "═══ " + ChatColor.WHITE + "СПИДРАН" + ChatColor.GOLD + " ═══\n" +
                        ChatColor.YELLOW + "Цель: " + ChatColor.AQUA + formatItemName(targetItem);
                String footer = ChatColor.GREEN + "⏱ Время: " + ChatColor.WHITE + time + "\n" +
                        ChatColor.GRAY + "Игроков: " + Bukkit.getOnlinePlayers().size();

                for (Player player : Bukkit.getOnlinePlayers()) {
                    player.setPlayerListHeaderFooter(header, footer);
                }
            }
        }.runTaskTimer(this, 0L, 10L); // Update every 0.5 seconds
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
            if (blockBelowIsSolid && !isMovingDown) {
                fallingPlayers.remove(uuid);

                // Keep protection for 20 seconds after landing (increased from 5s)
                player.sendMessage(ChatColor.YELLOW + "⚠ Вы приземлились! Защита от падения спадет через 20 секунд.");

                new BukkitRunnable() {
                    @Override
                    public void run() {
                        if (protectedPlayers.contains(uuid)) {
                            protectedPlayers.remove(uuid);
                            Player p = Bukkit.getPlayer(uuid);
                            if (p != null) {
                                p.sendMessage(ChatColor.RED + "⚠ Защита от падения снята! Удачи!");
                                p.playSound(p.getLocation(), Sound.BLOCK_NOTE_BLOCK_BASS, 1.0f, 1.0f);
                            }
                        }
                    }
                }.runTaskLater(this, 400L); // 400 ticks = 20 seconds
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

        broadcastMessage(ChatColor.RED + "☠ " + player.getName() + " погиб! Осталось игроков: " + activePlayers.size());

        checkLastManStanding();
    }

    // Event handler for player quit - remove from active players
    @EventHandler
    public void onPlayerQuit(PlayerQuitEvent event) {
        if (!gameActive || !gameStarted)
            return;

        Player player = event.getPlayer();
        if (activePlayers.contains(player.getUniqueId())) {
            activePlayers.remove(player.getUniqueId());

            broadcastMessage(ChatColor.YELLOW + "⚠ " + player.getName() + " вышел из игры! Осталось игроков: "
                    + activePlayers.size());

            checkLastManStanding();
        }
    }

    // Check if only one player remains and declare them winner
    private void checkLastManStanding() {
        if (!gameActive || !gameStarted)
            return;

        // Only trigger last-man-standing if game started with more than 1 player
        if (initialPlayerCount <= 1)
            return;

        if (activePlayers.size() == 1) {
            UUID winnerUUID = activePlayers.iterator().next();
            Player winner = Bukkit.getPlayer(winnerUUID);

            if (winner != null && winner.isOnline()) {
                broadcastMessage(ChatColor.GOLD + "🏆 " + winner.getName() + " — последний выживший!");
                playerWins(winner);
            }
        } else if (activePlayers.isEmpty()) {
            // Everyone died/left
            stopGame();
            broadcastMessage(ChatColor.RED + "Все игроки погибли! Игра окончена без победителя.");
        }
    }

    private void playerWins(Player winner) {
        long endTime = System.currentTimeMillis();
        String finalTime = formatTime(endTime - startTime);

        gameActive = false;

        // Stop tasks
        if (inventoryCheckTask != null)
            inventoryCheckTask.cancel();
        if (timerDisplayTask != null)
            timerDisplayTask.cancel();
        if (tabUpdateTask != null)
            tabUpdateTask.cancel();

        // Clear protection sets
        fallingPlayers.clear();
        protectedPlayers.clear();

        // Spawn fireworks at winner's location
        spawnFireworks(winner.getLocation(), 10);

        // Play victory sound
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.playSound(player.getLocation(), Sound.UI_TOAST_CHALLENGE_COMPLETE, 1.0f, 1.0f);

            // Update tab with final time
            String header = ChatColor.GOLD + "═══ " + ChatColor.GREEN + "ПОБЕДА!" + ChatColor.GOLD + " ═══";
            String footer = ChatColor.WHITE + "Победитель: " + ChatColor.AQUA + winner.getName() + "\n" +
                    ChatColor.GREEN + "Время: " + ChatColor.WHITE + finalTime;
            player.setPlayerListHeaderFooter(header, footer);
        }

        // Announce winner
        broadcastMessage("");
        broadcastMessage(ChatColor.GOLD + "╔════════════════════════════════════╗");
        broadcastMessage(
                ChatColor.GOLD + "║" + ChatColor.GREEN + "      🏆 ПОБЕДИТЕЛЬ! 🏆" + ChatColor.GOLD + "            ║");
        broadcastMessage(ChatColor.GOLD + "╠════════════════════════════════════╣");
        broadcastMessage(ChatColor.GOLD + "║ " + ChatColor.WHITE + "Игрок: " + ChatColor.AQUA + winner.getName());
        broadcastMessage(
                ChatColor.GOLD + "║ " + ChatColor.WHITE + "Предмет: " + ChatColor.YELLOW + formatItemName(targetItem));
        broadcastMessage(ChatColor.GOLD + "║ " + ChatColor.WHITE + "Время: " + ChatColor.GREEN + finalTime);
        broadcastMessage(ChatColor.GOLD + "╚════════════════════════════════════╝");
        broadcastMessage("");

        broadcastTitle(ChatColor.GOLD + "🏆 " + winner.getName() + " 🏆",
                ChatColor.GREEN + "Время: " + finalTime, 10, 100, 20);
    }

    private void spawnFireworks(Location location, int count) {
        new BukkitRunnable() {
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

    private void stopGame() {
        gameActive = false;
        gameStarted = false;
        targetItem = null;
        startTime = 0;
        initialPlayerCount = 0;

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

        // Clear tab for all players
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.setPlayerListHeaderFooter("", "");
        }
    }

    // Format for Action Bar (includes milliseconds)
    private String formatTime(long millis) {
        long seconds = millis / 1000;
        long minutes = seconds / 60;
        seconds = seconds % 60;
        long ms = (millis % 1000) / 10;
        return String.format("%02d:%02d.%02d", minutes, seconds, ms);
    }

    // Format for Tab List (Seconds only)
    private String formatTimeSeconds(long millis) {
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
