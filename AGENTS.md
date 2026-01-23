# Repository Guidelines for SpeedrunPlugin

## Project Structure & Module Organization
- **Main module**: `SpeedrunPlugin/` — contains the Minecraft server plugin
- **Source code**: `SpeedrunPlugin/src/main/java/com/speedrun/` — all Java sources
  - `SpeedrunPlugin.java` — monolithic main plugin class (currently ~1600 lines)
- **Resources**: `SpeedrunPlugin/src/main/resources/`
  - `plugin.yml` — plugin metadata (name, version, commands, permissions)
  - `config.yml` — configuration (game settings, modifiers, language)
  - `lang/messages_ru.yml` — Russian localization
  - `lang/messages_en.yml` — English localization
- **Build outputs**: 
  - `SpeedrunPlugin/target/` — Maven build output (JAR with version)
  - `SpeedrunPlugin/SpeedrunPlugin.jar` — copied final artifact
- **Build cache**: `SpeedrunPlugin/.build/` — manual build temporary files
- **Dependencies**: `SpeedrunPlugin/.deps/` — downloaded Spigot API and bungeecord chat JARs

## Build, Test, and Development Commands

### Standard Maven Build (Preferred)
```bash
cd SpeedrunPlugin
# Use the local Maven wrapper if 'mvn' is not in PATH:
# Windows: ..\.build\apache-maven-3.9.6\bin\mvn.cmd clean package
# Linux/Mac: ../.build/apache-maven-3.9.6/bin/mvn clean package

# If 'mvn' is installed globally:
mvn clean package          # Full clean build
mvn package                # Incremental build
mvn compile                # Compile only (no JAR)
```
Output: `SpeedrunPlugin/target/SpeedrunPlugin-<version>.jar`

### Alternative: Manual javac Build
```bash
# Single-line build command used in development:
set -e; MODULE="SpeedrunPlugin"; DEPS="$MODULE/.deps"; BUILD="$MODULE/.build"; \
VER=$(python -c "import xml.etree.ElementTree as ET; ns={'m':'http://maven.apache.org/POM/4.0.0'}; \
root=ET.parse('SpeedrunPlugin/pom.xml').getroot(); \
print((root.findtext('m:version', namespaces=ns) or '').strip())"); \
javac --release 17 -encoding UTF-8 -cp "$DEPS/spigot-api.jar;$DEPS/bungeecord-chat.jar" -d "$BUILD/classes" @"$BUILD/sources.txt"; \
cp -R "$MODULE/src/main/resources/." "$BUILD/classes/"; \
jar --create --file "$MODULE/target/SpeedrunPlugin-$VER.jar" -C "$BUILD/classes" .; \
cp "$MODULE/target/SpeedrunPlugin-$VER.jar" "$MODULE/SpeedrunPlugin.jar"; \
echo "Built SpeedrunPlugin-$VER.jar"
```

### Testing Commands
```bash
mvn test                   # Run all tests (currently no tests)
mvn test -Dtest=ClassName  # Run single test class (when tests exist)
```
**Note**: No testing framework is currently configured. If adding tests:
- Place under `SpeedrunPlugin/src/test/java/`
- Name test classes `*Test.java`
- Consider JUnit 5 or Mockito for Bukkit/Spigot mocking

### Version Management
Current version is stored in `SpeedrunPlugin/pom.xml`:
```xml
<version>1.8.0</version>
```
Must also be updated in `plugin.yml`:
```yaml
version: 1.8.0
```

## Coding Style & Naming Conventions

### Language & JDK
- **Java 17+** required (source/target compatibility)
- Encoding: **UTF-8** for all source files
- API: **Spigot 1.21-R0.1-SNAPSHOT**

### Formatting & Indentation
- **4 spaces** for indentation (no tabs in Java code)
- Opening braces on same line: `if (condition) {`
- Blank lines between methods and logical sections
- Line length: No strict limit, but keep reasonable (~120 chars)

### Naming Conventions
- **Classes**: `PascalCase` (e.g., `SpeedrunPlugin`, `GameModifier`)
- **Methods**: `camelCase` (e.g., `startGame()`, `enforceHotbarOnly()`)
- **Fields**: `camelCase` (e.g., `gameActive`, `targetItem`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `INFINITE_EFFECT_DURATION`)
- **Enum values**: `UPPER_SNAKE_CASE` (e.g., `GOLDEN_TOOLS_ONLY`, `LUNAR_GRAVITY`)
- **Packages**: lowercase, under `com.speedrun` namespace

### Import Organization
- Group imports by top-level package:
  1. `org.bukkit.*` (alphabetical)
  2. Blank line
  3. `org.bukkit.plugin.java.*`
  4. `org.bukkit.scheduler.*`
  5. Blank line
  6. `java.*` (alphabetical)
- Avoid wildcard imports except for common packages (current code uses wildcards)
- Remove unused imports

### Code Structure
- **One public class per file**
- **Inner enums allowed** (e.g., `GameModifier` enum inside `SpeedrunPlugin`)
- **Private helper methods** below public methods
- **Event handlers** grouped together with `@EventHandler` annotation

### Null Handling & Validation
- Check for `null` or `AIR` material: `if (stack == null || stack.getType() == Material.AIR)`
- Validate player state before operations
- Use early returns for guard clauses:
  ```java
  if (!gameActive) {
      return;
  }
  ```

### Error Handling & Logging
- Use `getLogger().info()`, `.warning()`, `.severe()` for logging
- Log important state changes (game start/stop, config load)
- Warn on configuration issues (missing language files, invalid config)
- **No stack traces to players** — use `ChatColor.RED + "Error message"`

### Comments & Documentation
- Use `//` for single-line comments
- Comment complex logic (e.g., modifier enforcement, gravity physics)
- **JavaDoc not required** for internal methods (this is a small plugin)
- Comment out legacy/unused code with explanation (e.g., `// Legacy field, no longer used`)

### String Handling & Messages
- **All user-facing messages** go through `getMessage(key)` localization system
- Use `ChatColor.translateAlternateColorCodes('&', message)` for colors
- String replacements: `getMessage("key", "placeholder1", value1, "placeholder2", value2)`
- Config keys use `kebab-case`: `golden-tools-only`, `fall-protection-duration`

### Collections & Data Structures
- Use `EnumSet` for enum collections: `EnumSet<GameModifier>`
- Use `HashMap` and `HashSet` for UUID tracking
- Initialize collections inline: `new ArrayList<>()`
- Use `List<Material>` for item lists

### Task & Scheduler Management
- Store `BukkitTask` references for all repeating tasks
- Always cancel tasks in cleanup: `if (task != null) { task.cancel(); task = null; }`
- Use `BukkitRunnable` for timed tasks
- Check game state inside tasks: `if (!gameActive) { cancel(); return; }`

## Plugin-Specific Guidelines

### Game State Management
- `gameActive` = true during entire game (including countdown)
- `gameStarted` = true only after countdown finishes
- Always reset state in `stopGame()` method
- Cancel all running tasks when stopping

### Modifier System
- Add new modifiers to `GameModifier` enum
- Update `parseModifier()` for command aliases
- Update `getModifierDisplayName()` for localization
- Update `startModifierEnforcement()` for activation logic
- Add to `config.yml` modifier pool
- Add translations to both `messages_ru.yml` and `messages_en.yml`

### Configuration Files
- **Always keep in sync**:
  - Version in `pom.xml` and `plugin.yml`
  - Commands/permissions in code and `plugin.yml`
  - Modifier names in code, config, and language files
- Reload configs with `saveDefaultConfig()` and `reloadConfig()`

### Event Handling
- Use `@EventHandler` annotation
- Check `instanceof Player` before casting entities
- Validate game state (`gameActive`, `gameStarted`) before processing
- Use `event.setCancelled(true)` to block actions

## Localization & User Experience

### Language Support
- Default language: **Russian** (`ru`)
- Fallback: Russian if language file missing
- User prefers Russian UI/messages
- All messages support color codes with `&` prefix

### Message Keys
- Follow pattern: `category-description` (e.g., `game-starting`, `modifier-lunar-gravity`)
- Use placeholders: `%player%`, `%item%`, `%time%`, `%modifier%`

## Commit & Pull Request Guidelines

### Commit Messages
- **Style**: Short, lightweight, imperative mood
- **Examples**: `release`, `plugin4`, `3.1`
- **Format**: `<summary>` (one line) or `<summary>\n\n<description>` (if context needed)
- No issue/ticket references (not used in this repo)

### Pull Requests (if applicable)
- Describe functional changes (new modifiers, bug fixes, etc.)
- List new commands or permissions added
- Mention Minecraft version compatibility impact
- Include testing notes if server behavior changed

## Testing & Deployment

### Manual Testing Checklist
- Compile plugin successfully
- Test on Minecraft 1.21 Spigot/Paper server
- Verify new modifiers work correctly
- Check inventory locking behavior
- Test win conditions and fireworks
- Verify localization messages display correctly

### Deployment
1. Build: `mvn package` or manual javac command
2. Copy JAR: `SpeedrunPlugin/SpeedrunPlugin.jar` to server `plugins/` folder
3. Restart server or use plugin reload command
4. Test `/speedrun random` command

## Known Technical Debt & Patterns

### Current Architecture
- **Monolithic design**: All code in single 1600-line `SpeedrunPlugin.java` file
- **No separation of concerns**: Game logic, modifiers, config all mixed
- **No tests**: Testing framework not set up
- **Legacy fields**: `randomBlockDropChance` no longer used but kept for reference

### Future Improvements (if needed)
- Extract modifiers into separate classes/handlers
- Add JUnit tests with Bukkit mocking
- Separate game state management into dedicated class
- Add checkstyle or SpotBugs for code quality

## Dependencies & Platform

### Runtime Requirements
- **Minecraft**: 1.21 (Spigot or Paper)
- **Java**: 17 or higher
- **API**: Spigot API 1.21-R0.1-SNAPSHOT (provided scope)

### Build Requirements
- **Maven**: 3.6+ (or use manual javac build)
- **Java Development Kit**: 17+
- **Python**: 3.x (only for manual build version extraction)

## Important Files to Keep in Sync

When making changes, ensure these files stay consistent:

| File | What to Update |
|------|----------------|
| `pom.xml` | Version number |
| `plugin.yml` | Version, commands, permissions, main class |
| `config.yml` | New modifiers in pool |
| `messages_ru.yml` | Russian translations for new features |
| `messages_en.yml` | English translations for new features |
| `SpeedrunPlugin.java` | Command parsing, modifier enum, display names |

---

**Last Updated**: January 23, 2026 (v1.8.0)  
**Target Platform**: Minecraft 1.21 (Spigot/Paper)  
**Primary Language**: Russian (with English support)
