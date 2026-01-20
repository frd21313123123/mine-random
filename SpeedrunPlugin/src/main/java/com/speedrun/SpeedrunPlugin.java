package com.speedrun;

import org.bukkit.*;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.EntityType;
import org.bukkit.entity.Firework;
import org.bukkit.entity.Player;
import org.bukkit.inventory.meta.FireworkMeta;
import org.bukkit.plugin.java.JavaPlugin;
import org.bukkit.scheduler.BukkitRunnable;
import org.bukkit.scheduler.BukkitTask;

import java.util.Random;

public class SpeedrunPlugin extends JavaPlugin {

    private boolean gameActive = false;
    private Material targetItem = null;
    private long startTime = 0;
    private BukkitTask inventoryCheckTask = null;
    private BukkitTask timerDisplayTask = null;
    private final Random random = new Random();

    @Override
    public void onEnable() {
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

            startCountdown();
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

    private void startCountdown() {
        gameActive = true;
        
        broadcastTitle(ChatColor.GOLD + "СПИДРАН", ChatColor.YELLOW + "Цель: " + formatItemName(targetItem), 10, 40, 10);
        broadcastMessage(ChatColor.GREEN + "═══════════════════════════════════");
        broadcastMessage(ChatColor.GOLD + "🎯 СПИДРАН НАЧИНАЕТСЯ!");
        broadcastMessage(ChatColor.WHITE + "Цель: " + ChatColor.AQUA + formatItemName(targetItem));
        broadcastMessage(ChatColor.GREEN + "═══════════════════════════════════");

        // Countdown from 10
        new BukkitRunnable() {
            int countdown = 10;

            @Override
            public void run() {
                if (countdown <= 0) {
                    cancel();
                    startGame();
                    return;
                }

                if (countdown <= 5) {
                    broadcastTitle(ChatColor.RED + String.valueOf(countdown), "", 0, 25, 0);
                    playCountdownSound();
                } else {
                    broadcastMessage(ChatColor.YELLOW + "Старт через " + countdown + " секунд...");
                }

                countdown--;
            }
        }.runTaskTimer(this, 0L, 20L);
    }

    private void startGame() {
        // Teleport all players randomly
        teleportAllPlayersRandomly();

        // Play start sound
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.playSound(player.getLocation(), Sound.ENTITY_ENDER_DRAGON_GROWL, 1.0f, 1.0f);
        }

        broadcastTitle(ChatColor.GREEN + "СТАРТ!", ChatColor.AQUA + "Найдите: " + formatItemName(targetItem), 0, 40, 10);
        
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

        // Start timer display task (every 5 seconds)
        timerDisplayTask = new BukkitRunnable() {
            @Override
            public void run() {
                if (!gameActive) {
                    cancel();
                    return;
                }

                String time = formatTime(System.currentTimeMillis() - startTime);
                for (Player player : Bukkit.getOnlinePlayers()) {
                    player.sendActionBar(ChatColor.GOLD + "⏱ " + time + ChatColor.GRAY + " | " + 
                                        ChatColor.WHITE + "Цель: " + ChatColor.AQUA + formatItemName(targetItem));
                }
            }
        }.runTaskTimer(this, 0L, 20L);
    }

    private void playerWins(Player winner) {
        long endTime = System.currentTimeMillis();
        String finalTime = formatTime(endTime - startTime);

        gameActive = false;

        // Stop tasks
        if (inventoryCheckTask != null) inventoryCheckTask.cancel();
        if (timerDisplayTask != null) timerDisplayTask.cancel();

        // Spawn fireworks at winner's location
        spawnFireworks(winner.getLocation(), 10);

        // Play victory sound
        for (Player player : Bukkit.getOnlinePlayers()) {
            player.playSound(player.getLocation(), Sound.UI_TOAST_CHALLENGE_COMPLETE, 1.0f, 1.0f);
        }

        // Announce winner
        broadcastMessage("");
        broadcastMessage(ChatColor.GOLD + "╔════════════════════════════════════╗");
        broadcastMessage(ChatColor.GOLD + "║" + ChatColor.GREEN + "      🏆 ПОБЕДИТЕЛЬ! 🏆" + ChatColor.GOLD + "            ║");
        broadcastMessage(ChatColor.GOLD + "╠════════════════════════════════════╣");
        broadcastMessage(ChatColor.GOLD + "║ " + ChatColor.WHITE + "Игрок: " + ChatColor.AQUA + winner.getName());
        broadcastMessage(ChatColor.GOLD + "║ " + ChatColor.WHITE + "Предмет: " + ChatColor.YELLOW + formatItemName(targetItem));
        broadcastMessage(ChatColor.GOLD + "║ " + ChatColor.WHITE + "Время: " + ChatColor.GREEN + finalTime);
        broadcastMessage(ChatColor.GOLD + "╚════════════════════════════════════╝");
        broadcastMessage("");

        broadcastTitle(ChatColor.GOLD + "🏆 " + winner.getName() + " 🏆", 
                      ChatColor.GREEN + "Время: " + finalTime, 10, 100, 20);
    }

    private void teleportAllPlayersRandomly() {
        World world = Bukkit.getWorlds().get(0); // Overworld

        for (Player player : Bukkit.getOnlinePlayers()) {
            Location safeLoc = findSafeLocation(world);
            if (safeLoc != null) {
                player.teleport(safeLoc);
                player.sendMessage(ChatColor.GREEN + "✓ Вы телепортированы в случайную точку!");
            } else {
                player.sendMessage(ChatColor.RED + "Не удалось найти безопасную точку, телепортация на спавн.");
                player.teleport(world.getSpawnLocation());
            }
        }
    }

    private Location findSafeLocation(World world) {
        int attempts = 50;
        
        while (attempts > 0) {
            int x = random.nextInt(10000) - 5000; // -5000 to 5000
            int z = random.nextInt(10000) - 5000;
            
            int y = world.getHighestBlockYAt(x, z);
            Location loc = new Location(world, x + 0.5, y + 1, z + 0.5);
            
            Material blockBelow = world.getBlockAt(x, y, z).getType();
            
            // Check if safe (not water, lava, or cactus)
            if (blockBelow.isSolid() && 
                blockBelow != Material.LAVA && 
                blockBelow != Material.WATER &&
                blockBelow != Material.CACTUS &&
                blockBelow != Material.MAGMA_BLOCK) {
                return loc;
            }
            
            attempts--;
        }
        
        return null;
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
                    random.nextDouble() * 6 - 3
                );

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
        targetItem = null;
        startTime = 0;
        
        if (inventoryCheckTask != null) {
            inventoryCheckTask.cancel();
            inventoryCheckTask = null;
        }
        if (timerDisplayTask != null) {
            timerDisplayTask.cancel();
            timerDisplayTask = null;
        }
    }

    private String formatTime(long millis) {
        long seconds = millis / 1000;
        long minutes = seconds / 60;
        seconds = seconds % 60;
        long ms = (millis % 1000) / 10;
        return String.format("%02d:%02d.%02d", minutes, seconds, ms);
    }

    private String formatItemName(Material material) {
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
