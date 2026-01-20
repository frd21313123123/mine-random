// --- MINECRAFT ITEMS DATABASE (API-VERIFIED) ---
// Only includes items with verified images from minecraft-api.vercel.app

let pool = [
    {
        "id": "acacia_boat",
        "name": "Акациевая лодка",
        "type": "item",
        "fast": false
    },
    {
        "id": "acacia_button",
        "name": "Акациевая кнопка",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_door",
        "name": "Акациевая дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_fence",
        "name": "Акациевый забор",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_fence_gate",
        "name": "Акациевая калитка",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_leaves",
        "name": "Листья акации",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_log",
        "name": "Акациевое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "acacia_planks",
        "name": "Акациевые доски",
        "type": "block",
        "fast": true
    },
    {
        "id": "acacia_pressure_plate",
        "name": "Акациевая нажимная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_sapling",
        "name": "Саженец акации",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_sign",
        "name": "Акациевая табличка",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_slab",
        "name": "Акациевая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_stairs",
        "name": "Акациевые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_trapdoor",
        "name": "Акациевый люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "acacia_wood",
        "name": "Акация",
        "type": "block",
        "fast": true
    },
    {
        "id": "activator_rail",
        "name": "Активирующие рельсы",
        "type": "block",
        "fast": false
    },
    {
        "id": "allium",
        "name": "Лук-батун",
        "type": "block",
        "fast": false
    },
    {
        "id": "amethyst_block",
        "name": "Аметистовый блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "amethyst_cluster",
        "name": "Аметистовая друза",
        "type": "block",
        "fast": false
    },
    {
        "id": "ancient_debris",
        "name": "Древние обломки",
        "type": "block",
        "fast": false
    },
    {
        "id": "andesite",
        "name": "Андезит",
        "type": "block",
        "fast": false
    },
    {
        "id": "andesite_slab",
        "name": "Андезитовая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "andesite_stairs",
        "name": "Андезитовые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "andesite_wall",
        "name": "Андезитовая ограда",
        "type": "block",
        "fast": false
    },
    {
        "id": "anvil",
        "name": "Наковальня",
        "type": "block",
        "fast": false
    },
    {
        "id": "apple",
        "name": "Яблоко",
        "type": "item",
        "fast": true
    },
    {
        "id": "armor_stand",
        "name": "Стойка для брони",
        "type": "item",
        "fast": false
    },
    {
        "id": "arrow",
        "name": "Стрела",
        "type": "item",
        "fast": false
    },
    {
        "id": "axolotl_bucket",
        "name": "Аксолотль в ведре",
        "type": "item",
        "fast": false
    },
    {
        "id": "azalea",
        "name": "Азалия",
        "type": "block",
        "fast": false
    },
    {
        "id": "azalea_leaves",
        "name": "Листья азалии",
        "type": "block",
        "fast": false
    },
    {
        "id": "azure_bluet",
        "name": "Хаустония серая",
        "type": "block",
        "fast": false
    },
    {
        "id": "baked_potato",
        "name": "Печёный картофель",
        "type": "item",
        "fast": false
    },
    {
        "id": "bamboo",
        "name": "Бамбук",
        "type": "block",
        "fast": false
    },
    {
        "id": "barrel",
        "name": "Бочка",
        "type": "block",
        "fast": false
    },
    {
        "id": "basalt",
        "name": "Базальт",
        "type": "block",
        "fast": false
    },
    {
        "id": "beacon",
        "name": "Маяк",
        "type": "block",
        "fast": false
    },
    {
        "id": "bee_nest",
        "name": "Пчелиное гнездо",
        "type": "block",
        "fast": false
    },
    {
        "id": "beef",
        "name": "Сырая говядина",
        "type": "item",
        "fast": false
    },
    {
        "id": "beehive",
        "name": "Улей",
        "type": "block",
        "fast": false
    },
    {
        "id": "beetroot",
        "name": "Свёкла",
        "type": "item",
        "fast": false
    },
    {
        "id": "beetroot_seeds",
        "name": "Семена свёклы",
        "type": "item",
        "fast": false
    },
    {
        "id": "beetroot_soup",
        "name": "Свекольный суп",
        "type": "item",
        "fast": false
    },
    {
        "id": "bell",
        "name": "Колокол",
        "type": "block",
        "fast": false
    },
    {
        "id": "big_dripleaf",
        "name": "Большая бросянка",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_boat",
        "name": "Берёзовая лодка",
        "type": "item",
        "fast": false
    },
    {
        "id": "birch_button",
        "name": "Берёзовая кнопка",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_door",
        "name": "Берёзовая дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_fence",
        "name": "Берёзовый забор",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_fence_gate",
        "name": "Берёзовая калитка",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_leaves",
        "name": "Берёзовые листья",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_log",
        "name": "Берёзовое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "birch_planks",
        "name": "Берёзовые доски",
        "type": "block",
        "fast": true
    },
    {
        "id": "birch_pressure_plate",
        "name": "Берёзовая нажимная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_sapling",
        "name": "Саженец берёзы",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_sign",
        "name": "Берёзовая табличка",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_slab",
        "name": "Берёзовая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_stairs",
        "name": "Берёзовые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_trapdoor",
        "name": "Берёзовый люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "birch_wood",
        "name": "Берёза",
        "type": "block",
        "fast": true
    },
    {
        "id": "black_banner",
        "name": "Чёрный флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_bed",
        "name": "Чёрная кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_candle",
        "name": "Чёрная свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_carpet",
        "name": "Чёрный ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_concrete",
        "name": "Чёрный бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_concrete_powder",
        "name": "Чёрный сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_dye",
        "name": "Чёрный краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "black_glazed_terracotta",
        "name": "Чёрная глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_shulker_box",
        "name": "Чёрный шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_stained_glass",
        "name": "Чёрное стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_stained_glass_pane",
        "name": "Чёрная стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_terracotta",
        "name": "Чёрная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "black_wool",
        "name": "Чёрная шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "blackstone",
        "name": "Чернит",
        "type": "block",
        "fast": true
    },
    {
        "id": "blackstone_slab",
        "name": "Чернитная плита",
        "type": "block",
        "fast": true
    },
    {
        "id": "blackstone_stairs",
        "name": "Чернитные ступеньки",
        "type": "block",
        "fast": true
    },
    {
        "id": "blackstone_wall",
        "name": "Чернитная ограда",
        "type": "block",
        "fast": true
    },
    {
        "id": "blast_furnace",
        "name": "Плавильная печь",
        "type": "block",
        "fast": false
    },
    {
        "id": "blaze_powder",
        "name": "Огненный порошок",
        "type": "item",
        "fast": false
    },
    {
        "id": "blaze_rod",
        "name": "Огненный стержень",
        "type": "item",
        "fast": false
    },
    {
        "id": "blue_banner",
        "name": "Синий флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_bed",
        "name": "Синяя кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_candle",
        "name": "Синяя свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_carpet",
        "name": "Синий ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_concrete",
        "name": "Синий бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_concrete_powder",
        "name": "Синий сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_dye",
        "name": "Синий краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "blue_glazed_terracotta",
        "name": "Синяя глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_ice",
        "name": "Синий лёд",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_orchid",
        "name": "Синяя орхидея",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_shulker_box",
        "name": "Синий шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_stained_glass",
        "name": "Синее стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_stained_glass_pane",
        "name": "Синяя стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_terracotta",
        "name": "Синяя керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "blue_wool",
        "name": "Синяя шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "bone",
        "name": "Кость",
        "type": "item",
        "fast": false
    },
    {
        "id": "bone_block",
        "name": "Костный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "bone_meal",
        "name": "Костная мука",
        "type": "item",
        "fast": false
    },
    {
        "id": "book",
        "name": "Книга",
        "type": "item",
        "fast": false
    },
    {
        "id": "bookshelf",
        "name": "Книжная полка",
        "type": "block",
        "fast": false
    },
    {
        "id": "bow",
        "name": "Лук",
        "type": "item",
        "fast": false
    },
    {
        "id": "bowl",
        "name": "Миска",
        "type": "item",
        "fast": false
    },
    {
        "id": "brain_coral",
        "name": "Коралл-мозговик",
        "type": "block",
        "fast": false
    },
    {
        "id": "brain_coral_block",
        "name": "Блок коралла-мозговика",
        "type": "block",
        "fast": false
    },
    {
        "id": "brain_coral_fan",
        "name": "Веерный коралл-мозговик",
        "type": "block",
        "fast": false
    },
    {
        "id": "bread",
        "name": "Хлеб",
        "type": "item",
        "fast": true
    },
    {
        "id": "brewing_stand",
        "name": "Зельеварка",
        "type": "block",
        "fast": false
    },
    {
        "id": "brick",
        "name": "Кирпич",
        "type": "item",
        "fast": false
    },
    {
        "id": "brick_slab",
        "name": "Кирпичная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "brick_stairs",
        "name": "Кирпичные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "brick_wall",
        "name": "Кирпичная ограда",
        "type": "block",
        "fast": false
    },
    {
        "id": "bricks",
        "name": "Кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_banner",
        "name": "Коричневый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_bed",
        "name": "Коричневая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_candle",
        "name": "Коричневая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_carpet",
        "name": "Коричневый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_concrete",
        "name": "Коричневый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_concrete_powder",
        "name": "Коричневый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_dye",
        "name": "Коричневый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "brown_glazed_terracotta",
        "name": "Коричневая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_mushroom",
        "name": "Коричневый гриб",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_mushroom_block",
        "name": "Блок коричневого гриба",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_shulker_box",
        "name": "Коричневый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_stained_glass",
        "name": "Коричневое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_stained_glass_pane",
        "name": "Коричневая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_terracotta",
        "name": "Коричневая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "brown_wool",
        "name": "Коричневая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "bubble_coral",
        "name": "Пузырчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "bubble_coral_block",
        "name": "Блок пузырчатого коралла",
        "type": "block",
        "fast": false
    },
    {
        "id": "bubble_coral_fan",
        "name": "Веерный пузырчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "bucket",
        "name": "Ведро",
        "type": "item",
        "fast": false
    },
    {
        "id": "cactus",
        "name": "Кактус",
        "type": "block",
        "fast": false
    },
    {
        "id": "cake",
        "name": "Торт",
        "type": "block",
        "fast": false
    },
    {
        "id": "calcite",
        "name": "Кальцит",
        "type": "block",
        "fast": false
    },
    {
        "id": "candle",
        "name": "Свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "carrot",
        "name": "Морковь",
        "type": "item",
        "fast": false
    },
    {
        "id": "carrot_on_a_stick",
        "name": "Удочка с морковкой",
        "type": "item",
        "fast": false
    },
    {
        "id": "cartography_table",
        "name": "Стол картографа",
        "type": "block",
        "fast": false
    },
    {
        "id": "carved_pumpkin",
        "name": "Вырезанная тыква",
        "type": "block",
        "fast": false
    },
    {
        "id": "cauldron",
        "name": "Котёл",
        "type": "block",
        "fast": false
    },
    {
        "id": "chain",
        "name": "Цепь",
        "type": "block",
        "fast": false
    },
    {
        "id": "chainmail_boots",
        "name": "Кольчужные ботинки",
        "type": "item",
        "fast": false
    },
    {
        "id": "chainmail_chestplate",
        "name": "Кольчуга",
        "type": "item",
        "fast": false
    },
    {
        "id": "chainmail_helmet",
        "name": "Койф",
        "type": "item",
        "fast": false
    },
    {
        "id": "chainmail_leggings",
        "name": "Кольчужные поножи",
        "type": "item",
        "fast": false
    },
    {
        "id": "charcoal",
        "name": "Древесный уголь",
        "type": "item",
        "fast": false
    },
    {
        "id": "chest",
        "name": "Сундук",
        "type": "block",
        "fast": false
    },
    {
        "id": "chest_minecart",
        "name": "Грузовая вагонетка",
        "type": "item",
        "fast": false
    },
    {
        "id": "chicken",
        "name": "Курятина",
        "type": "item",
        "fast": false
    },
    {
        "id": "chipped_anvil",
        "name": "Повреждённая наковальня",
        "type": "block",
        "fast": false
    },
    {
        "id": "chiseled_deepslate",
        "name": "Резной глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "chiseled_nether_bricks",
        "name": "Резные незерские кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "chiseled_polished_blackstone",
        "name": "Резной полированный чернит",
        "type": "block",
        "fast": true
    },
    {
        "id": "chiseled_quartz_block",
        "name": "Резной кварцевый блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "chiseled_red_sandstone",
        "name": "Резной красный песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "chiseled_sandstone",
        "name": "Резной песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "chiseled_stone_bricks",
        "name": "Резные каменные кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "chorus_flower",
        "name": "Цветок хоруса",
        "type": "block",
        "fast": false
    },
    {
        "id": "chorus_fruit",
        "name": "Плод хоруса",
        "type": "item",
        "fast": false
    },
    {
        "id": "clay",
        "name": "Глина",
        "type": "block",
        "fast": false
    },
    {
        "id": "clay_ball",
        "name": "Комок глины",
        "type": "item",
        "fast": false
    },
    {
        "id": "clock",
        "name": "Часы",
        "type": "item",
        "fast": false
    },
    {
        "id": "coal",
        "name": "Уголь",
        "type": "item",
        "fast": true
    },
    {
        "id": "coal_block",
        "name": "Угольный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "coal_ore",
        "name": "Угольная руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "coarse_dirt",
        "name": "Каменистая земля",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobbled_deepslate",
        "name": "Колотый глубинный сланец",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobbled_deepslate_slab",
        "name": "Плита из колотого глубинного сланца",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobbled_deepslate_stairs",
        "name": "Ступеньки из колотого глубинного сланца",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobbled_deepslate_wall",
        "name": "Ограда из колотого глубинного сланца",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobblestone",
        "name": "Булыжник",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobblestone_slab",
        "name": "Булыжная плита",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobblestone_stairs",
        "name": "Булыжные ступеньки",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobblestone_wall",
        "name": "Булыжная ограда",
        "type": "block",
        "fast": true
    },
    {
        "id": "cobweb",
        "name": "Паутина",
        "type": "block",
        "fast": false
    },
    {
        "id": "cod",
        "name": "Сырая треска",
        "type": "item",
        "fast": false
    },
    {
        "id": "cod_bucket",
        "name": "Треска в ведре",
        "type": "item",
        "fast": false
    },
    {
        "id": "comparator",
        "name": "Редстоуновый компаратор",
        "type": "block",
        "fast": false
    },
    {
        "id": "compass",
        "name": "Компас",
        "type": "item",
        "fast": false
    },
    {
        "id": "composter",
        "name": "Компостница",
        "type": "block",
        "fast": false
    },
    {
        "id": "conduit",
        "name": "Морской источник",
        "type": "block",
        "fast": false
    },
    {
        "id": "cooked_beef",
        "name": "Стейк",
        "type": "item",
        "fast": false
    },
    {
        "id": "cooked_chicken",
        "name": "Жареная курица",
        "type": "item",
        "fast": false
    },
    {
        "id": "cooked_cod",
        "name": "Жареная треска",
        "type": "item",
        "fast": false
    },
    {
        "id": "cooked_mutton",
        "name": "Жареная баранина",
        "type": "item",
        "fast": false
    },
    {
        "id": "cooked_porkchop",
        "name": "Жареная свинина",
        "type": "item",
        "fast": false
    },
    {
        "id": "cooked_rabbit",
        "name": "Жареная крольчатина",
        "type": "item",
        "fast": false
    },
    {
        "id": "cooked_salmon",
        "name": "Жареный лосось",
        "type": "item",
        "fast": false
    },
    {
        "id": "cookie",
        "name": "Печенье",
        "type": "item",
        "fast": false
    },
    {
        "id": "copper_block",
        "name": "Медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "copper_ingot",
        "name": "Медный слиток",
        "type": "item",
        "fast": false
    },
    {
        "id": "copper_ore",
        "name": "Медная руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "cornflower",
        "name": "Синий василёк",
        "type": "block",
        "fast": false
    },
    {
        "id": "cracked_deepslate_bricks",
        "name": "Потрескавшиеся глубинносланцевые кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "cracked_deepslate_tiles",
        "name": "Потрескавшийся глубинносланцевый плитняк",
        "type": "block",
        "fast": false
    },
    {
        "id": "cracked_nether_bricks",
        "name": "Потрескавшиеся незерские кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "cracked_polished_blackstone_bricks",
        "name": "Потрескавшиеся полированно-чернитные кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "cracked_stone_bricks",
        "name": "Потрескавшиеся каменные кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "crafting_table",
        "name": "Верстак",
        "type": "block",
        "fast": true
    },
    {
        "id": "creeper_banner_pattern",
        "name": "Узор флага",
        "type": "item",
        "fast": false
    },
    {
        "id": "creeper_head",
        "name": "Голова крипера",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_button",
        "name": "Багровая кнопка",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_door",
        "name": "Багровая дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_fence",
        "name": "Багровый забор",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_fence_gate",
        "name": "Багровая калитка",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_fungus",
        "name": "Багровый гриб",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_hyphae",
        "name": "Багровые гифы",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_nylium",
        "name": "Багровый нилий",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_planks",
        "name": "Багровые доски",
        "type": "block",
        "fast": true
    },
    {
        "id": "crimson_pressure_plate",
        "name": "Багровая нажимная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_roots",
        "name": "Багровые корни",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_sign",
        "name": "Багровая табличка",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_slab",
        "name": "Багровая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_stairs",
        "name": "Багровые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_stem",
        "name": "Багровый стебель",
        "type": "block",
        "fast": false
    },
    {
        "id": "crimson_trapdoor",
        "name": "Багровый люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "crossbow",
        "name": "Арбалет",
        "type": "item",
        "fast": false
    },
    {
        "id": "crying_obsidian",
        "name": "Плачущий обсидиан",
        "type": "block",
        "fast": false
    },
    {
        "id": "cut_copper",
        "name": "Резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "cut_copper_slab",
        "name": "Резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "cut_copper_stairs",
        "name": "Резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "cut_red_sandstone",
        "name": "Пиленый красный песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "cut_red_sandstone_slab",
        "name": "Плита из пиленого красного песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "cut_sandstone",
        "name": "Пиленый песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "cut_sandstone_slab",
        "name": "Плита из пиленого песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "cyan_banner",
        "name": "Бирюзовый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_bed",
        "name": "Бирюзовая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_candle",
        "name": "Бирюзовая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_carpet",
        "name": "Бирюзовый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_concrete",
        "name": "Бирюзовый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_concrete_powder",
        "name": "Бирюзовый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_dye",
        "name": "Бирюзовый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "cyan_glazed_terracotta",
        "name": "Бирюзовая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_shulker_box",
        "name": "Бирюзовый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_stained_glass",
        "name": "Бирюзовое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_stained_glass_pane",
        "name": "Бирюзовая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_terracotta",
        "name": "Бирюзовая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "cyan_wool",
        "name": "Бирюзовая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "damaged_anvil",
        "name": "Разбитая наковальня",
        "type": "block",
        "fast": false
    },
    {
        "id": "dandelion",
        "name": "Одуванчик",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_boat",
        "name": "Лодка из тёмного дуба",
        "type": "item",
        "fast": false
    },
    {
        "id": "dark_oak_button",
        "name": "Кнопка из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_door",
        "name": "Дверь из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_fence",
        "name": "Забор из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_fence_gate",
        "name": "Калитка из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_leaves",
        "name": "Листья тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_log",
        "name": "Бревно тёмного дуба",
        "type": "block",
        "fast": true
    },
    {
        "id": "dark_oak_planks",
        "name": "Доски из тёмного дуба",
        "type": "block",
        "fast": true
    },
    {
        "id": "dark_oak_pressure_plate",
        "name": "Нажимная плита из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_sapling",
        "name": "Саженец тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_sign",
        "name": "Табличка из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_slab",
        "name": "Плита из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_stairs",
        "name": "Ступеньки из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_trapdoor",
        "name": "Люк из тёмного дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_oak_wood",
        "name": "Тёмный дуб",
        "type": "block",
        "fast": true
    },
    {
        "id": "dark_prismarine",
        "name": "Тёмный призмарин",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_prismarine_slab",
        "name": "Плита из тёмного призмарина",
        "type": "block",
        "fast": false
    },
    {
        "id": "dark_prismarine_stairs",
        "name": "Ступеньки из тёмного призмарина",
        "type": "block",
        "fast": false
    },
    {
        "id": "daylight_detector",
        "name": "Датчик дневного света",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_brain_coral",
        "name": "Мёртвый коралл-мозговик",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_brain_coral_block",
        "name": "Блок мёртвого коралла-мозговика",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_brain_coral_fan",
        "name": "Мёртвый веерный коралл-мозговик",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_bubble_coral",
        "name": "Мёртвый пузырчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_bubble_coral_block",
        "name": "Блок мёртвого пузырчатого коралла",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_bubble_coral_fan",
        "name": "Мёртвый веерный пузырчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_fire_coral_fan",
        "name": "Мёртвый веерный огненный коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_horn_coral",
        "name": "Мёртвый роговый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_horn_coral_block",
        "name": "Блок мёртвого рогового коралла",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_horn_coral_fan",
        "name": "Мёртвый веерный роговый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_tube_coral",
        "name": "Мёртвый трубчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_tube_coral_block",
        "name": "Блок мёртвого трубчатого коралла",
        "type": "block",
        "fast": false
    },
    {
        "id": "dead_tube_coral_fan",
        "name": "Мёртвый веерный трубчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate",
        "name": "Глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_brick_slab",
        "name": "Плита из глубинносланцевого кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_brick_stairs",
        "name": "Ступеньки из глубинносланцевого кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_brick_wall",
        "name": "Ограда из глубинносланцевого кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_bricks",
        "name": "Глубинносланцевые кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_coal_ore",
        "name": "Угленосный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_copper_ore",
        "name": "Меденосный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_diamond_ore",
        "name": "Алмазоносный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_emerald_ore",
        "name": "Изумрудоносный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_gold_ore",
        "name": "Золотоносный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_iron_ore",
        "name": "Железоносный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_lapis_ore",
        "name": "Лазуритоносный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "deepslate_redstone_ore",
        "name": "Редстоуноносный глубинный сланец",
        "type": "block",
        "fast": true
    },
    {
        "id": "detector_rail",
        "name": "Рельсы с датчиком",
        "type": "block",
        "fast": false
    },
    {
        "id": "diamond",
        "name": "Алмаз",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_axe",
        "name": "Алмазный топор",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_block",
        "name": "Алмазный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "diamond_boots",
        "name": "Алмазные ботинки",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_chestplate",
        "name": "Алмазный нагрудник",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_helmet",
        "name": "Алмазный шлем",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_hoe",
        "name": "Алмазная мотыга",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_horse_armor",
        "name": "Алмазная конская броня",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_leggings",
        "name": "Алмазные поножи",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_ore",
        "name": "Алмазная руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "diamond_pickaxe",
        "name": "Алмазная кирка",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_shovel",
        "name": "Алмазная лопата",
        "type": "item",
        "fast": false
    },
    {
        "id": "diamond_sword",
        "name": "Алмазный меч",
        "type": "item",
        "fast": false
    },
    {
        "id": "diorite",
        "name": "Диорит",
        "type": "block",
        "fast": false
    },
    {
        "id": "diorite_slab",
        "name": "Диоритовая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "diorite_stairs",
        "name": "Диоритовые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "diorite_wall",
        "name": "Диоритовая ограда",
        "type": "block",
        "fast": false
    },
    {
        "id": "dirt",
        "name": "Земля",
        "type": "block",
        "fast": true
    },
    {
        "id": "dispenser",
        "name": "Раздатчик",
        "type": "block",
        "fast": false
    },
    {
        "id": "dragon_breath",
        "name": "Драконье дыхание",
        "type": "item",
        "fast": false
    },
    {
        "id": "dragon_egg",
        "name": "Яйцо дракона",
        "type": "block",
        "fast": false
    },
    {
        "id": "dragon_head",
        "name": "Голова дракона",
        "type": "block",
        "fast": false
    },
    {
        "id": "dried_kelp",
        "name": "Сушёная ламинария",
        "type": "item",
        "fast": false
    },
    {
        "id": "dried_kelp_block",
        "name": "Блок сушёной ламинарии",
        "type": "block",
        "fast": false
    },
    {
        "id": "dripstone_block",
        "name": "Натёчный камень",
        "type": "block",
        "fast": true
    },
    {
        "id": "dropper",
        "name": "Выбрасыватель",
        "type": "block",
        "fast": false
    },
    {
        "id": "egg",
        "name": "Яйцо",
        "type": "item",
        "fast": false
    },
    {
        "id": "elytra",
        "name": "Элитры",
        "type": "item",
        "fast": false
    },
    {
        "id": "emerald",
        "name": "Изумруд",
        "type": "item",
        "fast": false
    },
    {
        "id": "emerald_block",
        "name": "Изумрудный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "emerald_ore",
        "name": "Изумрудная руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "enchanted_book",
        "name": "Чародейская книга",
        "type": "item",
        "fast": false
    },
    {
        "id": "enchanted_golden_apple",
        "name": "Зачарованное золотое яблоко",
        "type": "item",
        "fast": false
    },
    {
        "id": "enchanting_table",
        "name": "Чародейский стол",
        "type": "block",
        "fast": false
    },
    {
        "id": "end_crystal",
        "name": "Кристалл Энда",
        "type": "item",
        "fast": false
    },
    {
        "id": "end_rod",
        "name": "Стержень Энда",
        "type": "block",
        "fast": false
    },
    {
        "id": "end_stone",
        "name": "Эндерняк",
        "type": "block",
        "fast": true
    },
    {
        "id": "end_stone_brick_slab",
        "name": "Плита из эндернякового кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "end_stone_brick_stairs",
        "name": "Ступеньки из эндернякового кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "end_stone_brick_wall",
        "name": "Ограда из эндернякового кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "end_stone_bricks",
        "name": "Эндерняковые кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "ender_chest",
        "name": "Эндер-сундук",
        "type": "block",
        "fast": false
    },
    {
        "id": "ender_eye",
        "name": "Око Эндера",
        "type": "item",
        "fast": false
    },
    {
        "id": "ender_pearl",
        "name": "Эндер-жемчуг",
        "type": "item",
        "fast": false
    },
    {
        "id": "experience_bottle",
        "name": "Пузырёк опыта",
        "type": "item",
        "fast": false
    },
    {
        "id": "exposed_copper",
        "name": "Потемневший медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "exposed_cut_copper",
        "name": "Потемневший резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "exposed_cut_copper_slab",
        "name": "Потемневшая резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "exposed_cut_copper_stairs",
        "name": "Потемневшие резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "feather",
        "name": "Перо",
        "type": "item",
        "fast": false
    },
    {
        "id": "fermented_spider_eye",
        "name": "Маринованный паучий глаз",
        "type": "item",
        "fast": false
    },
    {
        "id": "fern",
        "name": "Папоротник",
        "type": "block",
        "fast": false
    },
    {
        "id": "filled_map",
        "name": "Карта",
        "type": "item",
        "fast": false
    },
    {
        "id": "fire_coral_fan",
        "name": "Веерный огненный коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "fishing_rod",
        "name": "Удочка",
        "type": "item",
        "fast": false
    },
    {
        "id": "fletching_table",
        "name": "Стол лучника",
        "type": "block",
        "fast": false
    },
    {
        "id": "flint",
        "name": "Кремень",
        "type": "item",
        "fast": false
    },
    {
        "id": "flint_and_steel",
        "name": "Огниво",
        "type": "item",
        "fast": false
    },
    {
        "id": "flower_banner_pattern",
        "name": "Узор флага",
        "type": "item",
        "fast": false
    },
    {
        "id": "flower_pot",
        "name": "Цветочный горшок",
        "type": "block",
        "fast": false
    },
    {
        "id": "flowering_azalea",
        "name": "Цветущая азалия",
        "type": "block",
        "fast": false
    },
    {
        "id": "flowering_azalea_leaves",
        "name": "Листья цветущей азалии",
        "type": "block",
        "fast": false
    },
    {
        "id": "furnace",
        "name": "Печь",
        "type": "block",
        "fast": true
    },
    {
        "id": "furnace_minecart",
        "name": "Самоходная вагонетка",
        "type": "item",
        "fast": false
    },
    {
        "id": "ghast_tear",
        "name": "Слеза гаста",
        "type": "item",
        "fast": false
    },
    {
        "id": "gilded_blackstone",
        "name": "Золочёный чернит",
        "type": "block",
        "fast": true
    },
    {
        "id": "glass",
        "name": "Стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "glass_bottle",
        "name": "Бутылочка",
        "type": "item",
        "fast": false
    },
    {
        "id": "glass_pane",
        "name": "Стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "glistering_melon_slice",
        "name": "Сверкающий ломтик арбуза",
        "type": "item",
        "fast": false
    },
    {
        "id": "glow_berries",
        "name": "Светящиеся ягоды",
        "type": "item",
        "fast": false
    },
    {
        "id": "glow_ink_sac",
        "name": "Светящийся чернильный мешок",
        "type": "item",
        "fast": false
    },
    {
        "id": "glow_item_frame",
        "name": "Светящаяся рамка",
        "type": "item",
        "fast": false
    },
    {
        "id": "glow_lichen",
        "name": "Светящийся лишайник",
        "type": "block",
        "fast": false
    },
    {
        "id": "glowstone",
        "name": "Светокамень",
        "type": "block",
        "fast": true
    },
    {
        "id": "glowstone_dust",
        "name": "Светокаменная пыль",
        "type": "item",
        "fast": true
    },
    {
        "id": "gold_block",
        "name": "Золотой блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "gold_ingot",
        "name": "Золотой слиток",
        "type": "item",
        "fast": false
    },
    {
        "id": "gold_nugget",
        "name": "Кусочек золота",
        "type": "item",
        "fast": false
    },
    {
        "id": "gold_ore",
        "name": "Золотая руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "golden_apple",
        "name": "Золотое яблоко",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_axe",
        "name": "Золотой топор",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_boots",
        "name": "Золотые ботинки",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_carrot",
        "name": "Золотая морковь",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_chestplate",
        "name": "Золотой нагрудник",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_helmet",
        "name": "Золотой шлем",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_hoe",
        "name": "Золотая мотыга",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_horse_armor",
        "name": "Золотая конская броня",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_leggings",
        "name": "Золотые поножи",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_pickaxe",
        "name": "Золотая кирка",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_shovel",
        "name": "Золотая лопата",
        "type": "item",
        "fast": false
    },
    {
        "id": "golden_sword",
        "name": "Золотой меч",
        "type": "item",
        "fast": false
    },
    {
        "id": "granite",
        "name": "Гранит",
        "type": "block",
        "fast": false
    },
    {
        "id": "granite_slab",
        "name": "Гранитная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "granite_stairs",
        "name": "Гранитные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "granite_wall",
        "name": "Гранитная ограда",
        "type": "block",
        "fast": false
    },
    {
        "id": "grass",
        "name": "Трава",
        "type": "block",
        "fast": false
    },
    {
        "id": "grass_block",
        "name": "Дёрн",
        "type": "block",
        "fast": false
    },
    {
        "id": "gravel",
        "name": "Гравий",
        "type": "block",
        "fast": true
    },
    {
        "id": "gray_banner",
        "name": "Серый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_bed",
        "name": "Серая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_candle",
        "name": "Серая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_carpet",
        "name": "Серый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_concrete",
        "name": "Серый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_concrete_powder",
        "name": "Серый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_dye",
        "name": "Серый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "gray_glazed_terracotta",
        "name": "Серая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_shulker_box",
        "name": "Серый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_stained_glass",
        "name": "Серое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_stained_glass_pane",
        "name": "Серая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_terracotta",
        "name": "Серая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "gray_wool",
        "name": "Серая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_banner",
        "name": "Зелёный флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_bed",
        "name": "Зелёная кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_candle",
        "name": "Зелёная свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_carpet",
        "name": "Зелёный ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_concrete",
        "name": "Зелёный бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_concrete_powder",
        "name": "Зелёный сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_dye",
        "name": "Зелёный краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "green_glazed_terracotta",
        "name": "Зелёная глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_shulker_box",
        "name": "Зелёный шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_stained_glass",
        "name": "Зелёное стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_stained_glass_pane",
        "name": "Зелёная стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_terracotta",
        "name": "Зелёная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "green_wool",
        "name": "Зелёная шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "grindstone",
        "name": "Точило",
        "type": "block",
        "fast": true
    },
    {
        "id": "gunpowder",
        "name": "Порох",
        "type": "item",
        "fast": false
    },
    {
        "id": "hanging_roots",
        "name": "Свисающие корни",
        "type": "block",
        "fast": false
    },
    {
        "id": "hay_block",
        "name": "Сноп сена",
        "type": "block",
        "fast": false
    },
    {
        "id": "heart_of_the_sea",
        "name": "Сердце моря",
        "type": "item",
        "fast": false
    },
    {
        "id": "heavy_weighted_pressure_plate",
        "name": "Большегрузная весовая пластина",
        "type": "block",
        "fast": false
    },
    {
        "id": "honey_block",
        "name": "Блок мёда",
        "type": "block",
        "fast": false
    },
    {
        "id": "honey_bottle",
        "name": "Бутылочка мёда",
        "type": "item",
        "fast": false
    },
    {
        "id": "honeycomb",
        "name": "Пчелиные соты",
        "type": "item",
        "fast": false
    },
    {
        "id": "honeycomb_block",
        "name": "Блок пчелиных сот",
        "type": "block",
        "fast": false
    },
    {
        "id": "hopper",
        "name": "Воронка",
        "type": "block",
        "fast": false
    },
    {
        "id": "hopper_minecart",
        "name": "Загрузочная вагонетка",
        "type": "item",
        "fast": false
    },
    {
        "id": "horn_coral",
        "name": "Роговой коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "horn_coral_block",
        "name": "Блок рогового коралла",
        "type": "block",
        "fast": false
    },
    {
        "id": "horn_coral_fan",
        "name": "Веерный роговый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "ice",
        "name": "Лёд",
        "type": "block",
        "fast": false
    },
    {
        "id": "ink_sac",
        "name": "Чернильный мешок",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_axe",
        "name": "Железный топор",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_bars",
        "name": "Железные прутья",
        "type": "block",
        "fast": false
    },
    {
        "id": "iron_block",
        "name": "Железный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "iron_boots",
        "name": "Железные ботинки",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_chestplate",
        "name": "Железный нагрудник",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_door",
        "name": "Железная дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "iron_helmet",
        "name": "Железный шлем",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_hoe",
        "name": "Железная мотыга",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_horse_armor",
        "name": "Железная конская броня",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_ingot",
        "name": "Железный слиток",
        "type": "item",
        "fast": true
    },
    {
        "id": "iron_leggings",
        "name": "Железные поножи",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_nugget",
        "name": "Кусочек железа",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_ore",
        "name": "Железная руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "iron_pickaxe",
        "name": "Железная кирка",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_shovel",
        "name": "Железная лопата",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_sword",
        "name": "Железный меч",
        "type": "item",
        "fast": false
    },
    {
        "id": "iron_trapdoor",
        "name": "Железный люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "item_frame",
        "name": "Рамка",
        "type": "item",
        "fast": false
    },
    {
        "id": "jack_o_lantern",
        "name": "Светильник Джека",
        "type": "block",
        "fast": false
    },
    {
        "id": "jukebox",
        "name": "Проигрыватель",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_boat",
        "name": "Лодка из тропического дерева",
        "type": "item",
        "fast": false
    },
    {
        "id": "jungle_button",
        "name": "Кнопка из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_door",
        "name": "Дверь из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_fence",
        "name": "Забор из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_fence_gate",
        "name": "Калитка из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_leaves",
        "name": "Листья тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_log",
        "name": "Бревно тропического дерева",
        "type": "block",
        "fast": true
    },
    {
        "id": "jungle_planks",
        "name": "Доски из тропического дерева",
        "type": "block",
        "fast": true
    },
    {
        "id": "jungle_pressure_plate",
        "name": "Нажимная плита из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_sapling",
        "name": "Саженец тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_sign",
        "name": "Табличка из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_slab",
        "name": "Плита из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_stairs",
        "name": "Ступеньки из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_trapdoor",
        "name": "Люк из тропического дерева",
        "type": "block",
        "fast": false
    },
    {
        "id": "jungle_wood",
        "name": "Тропическое дерево",
        "type": "block",
        "fast": true
    },
    {
        "id": "kelp",
        "name": "Ламинария",
        "type": "block",
        "fast": false
    },
    {
        "id": "ladder",
        "name": "Лестница",
        "type": "block",
        "fast": false
    },
    {
        "id": "lantern",
        "name": "Фонарь",
        "type": "block",
        "fast": false
    },
    {
        "id": "lapis_block",
        "name": "Лазуритовый блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "lapis_lazuli",
        "name": "Лазурит",
        "type": "item",
        "fast": false
    },
    {
        "id": "lapis_ore",
        "name": "Лазуритовая руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "large_amethyst_bud",
        "name": "Большой аметистовый бутон",
        "type": "block",
        "fast": false
    },
    {
        "id": "large_fern",
        "name": "Раскидистый папоротник",
        "type": "block",
        "fast": false
    },
    {
        "id": "lava_bucket",
        "name": "Ведро лавы",
        "type": "item",
        "fast": false
    },
    {
        "id": "lead",
        "name": "Поводок",
        "type": "item",
        "fast": false
    },
    {
        "id": "leather",
        "name": "Кожа",
        "type": "item",
        "fast": false
    },
    {
        "id": "leather_boots",
        "name": "Кожаные ботинки",
        "type": "item",
        "fast": false
    },
    {
        "id": "leather_chestplate",
        "name": "Кожаная куртка",
        "type": "item",
        "fast": false
    },
    {
        "id": "leather_helmet",
        "name": "Кожаный шлем",
        "type": "item",
        "fast": false
    },
    {
        "id": "leather_horse_armor",
        "name": "Кожаная конская броня",
        "type": "item",
        "fast": false
    },
    {
        "id": "leather_leggings",
        "name": "Кожаные штаны",
        "type": "item",
        "fast": false
    },
    {
        "id": "lectern",
        "name": "Кафедра",
        "type": "block",
        "fast": false
    },
    {
        "id": "lever",
        "name": "Рычаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_banner",
        "name": "Голубой флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_bed",
        "name": "Голубая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_candle",
        "name": "Голубая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_carpet",
        "name": "Голубой ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_concrete",
        "name": "Голубой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_concrete_powder",
        "name": "Голубой сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_dye",
        "name": "Голубой краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "light_blue_glazed_terracotta",
        "name": "Голубая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_shulker_box",
        "name": "Голубой шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_stained_glass",
        "name": "Голубое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_stained_glass_pane",
        "name": "Голубая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_terracotta",
        "name": "Голубая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_blue_wool",
        "name": "Голубая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_banner",
        "name": "Светло-серый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_bed",
        "name": "Светло-серая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_candle",
        "name": "Светло-серая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_carpet",
        "name": "Светло-серый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_concrete",
        "name": "Светло-серый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_concrete_powder",
        "name": "Светло-серый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_dye",
        "name": "Светло-серый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "light_gray_glazed_terracotta",
        "name": "Светло-серая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_shulker_box",
        "name": "Светло-серый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_stained_glass",
        "name": "Светло-серое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_stained_glass_pane",
        "name": "Светло-серая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_terracotta",
        "name": "Светло-серая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_gray_wool",
        "name": "Светло-серая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "light_weighted_pressure_plate",
        "name": "Весовая пластина",
        "type": "block",
        "fast": false
    },
    {
        "id": "lightning_rod",
        "name": "Громоотвод",
        "type": "block",
        "fast": false
    },
    {
        "id": "lilac",
        "name": "Сирень",
        "type": "block",
        "fast": false
    },
    {
        "id": "lily_of_the_valley",
        "name": "Ландыш",
        "type": "block",
        "fast": false
    },
    {
        "id": "lily_pad",
        "name": "Кувшинка",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_banner",
        "name": "Лаймовый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_bed",
        "name": "Лаймовая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_candle",
        "name": "Лаймовая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_carpet",
        "name": "Лаймовый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_concrete",
        "name": "Лаймовый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_concrete_powder",
        "name": "Лаймовый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_dye",
        "name": "Лаймовый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "lime_glazed_terracotta",
        "name": "Лаймовая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_shulker_box",
        "name": "Лаймовый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_stained_glass",
        "name": "Лаймовое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_stained_glass_pane",
        "name": "Лаймовая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_terracotta",
        "name": "Лаймовая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "lime_wool",
        "name": "Лаймовая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье",
        "type": "item",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Мутное туманное зелье",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Несоздаваемое туманное зелье",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье огнестойкости",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье вреда",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье исцеления",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье заражения",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье невидимости",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье прыгучести",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье левитации",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье везения",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Заурядное туманное зелье",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье ночного зрения",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье вязкости",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье отравления",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье регенерации",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье плавного падения",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье замедления",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье силы",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье стремительности",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Густое туманное зелье",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье черепашьей мощи",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Бутылочка с водяной взвесью",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье водного дыхания",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье слабости",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье плетения",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lingering_potion",
        "name": "Туманное зелье заряженное ветром",
        "type": "potion_effect",
        "baseId": "lingering_potion",
        "fast": false
    },
    {
        "id": "lodestone",
        "name": "Магнетит",
        "type": "block",
        "fast": true
    },
    {
        "id": "loom",
        "name": "Ткацкий станок",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_banner",
        "name": "Пурпурный флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_bed",
        "name": "Пурпурная кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_candle",
        "name": "Пурпурная свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_carpet",
        "name": "Пурпурный ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_concrete",
        "name": "Пурпурный бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_concrete_powder",
        "name": "Пурпурный сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_dye",
        "name": "Пурпурный краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "magenta_glazed_terracotta",
        "name": "Пурпурная глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_shulker_box",
        "name": "Пурпурный шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_stained_glass",
        "name": "Пурпурное стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_stained_glass_pane",
        "name": "Пурпурная стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_terracotta",
        "name": "Пурпурная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "magenta_wool",
        "name": "Пурпурная шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "magma_block",
        "name": "Магма",
        "type": "block",
        "fast": false
    },
    {
        "id": "magma_cream",
        "name": "Сгусток магмы",
        "type": "item",
        "fast": false
    },
    {
        "id": "map",
        "name": "Чистая карта",
        "type": "item",
        "fast": false
    },
    {
        "id": "medium_amethyst_bud",
        "name": "Средний аметистовый бутон",
        "type": "block",
        "fast": false
    },
    {
        "id": "melon",
        "name": "Арбуз",
        "type": "block",
        "fast": false
    },
    {
        "id": "melon_seeds",
        "name": "Семена арбуза",
        "type": "item",
        "fast": false
    },
    {
        "id": "melon_slice",
        "name": "Ломтик арбуза",
        "type": "item",
        "fast": false
    },
    {
        "id": "milk_bucket",
        "name": "Ведро молока",
        "type": "item",
        "fast": false
    },
    {
        "id": "minecart",
        "name": "Вагонетка",
        "type": "item",
        "fast": false
    },
    {
        "id": "mojang_banner_pattern",
        "name": "Узор флага",
        "type": "item",
        "fast": false
    },
    {
        "id": "moss_block",
        "name": "Блок мха",
        "type": "block",
        "fast": false
    },
    {
        "id": "moss_carpet",
        "name": "Моховой ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "mossy_cobblestone",
        "name": "Замшелый булыжник",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_cobblestone_slab",
        "name": "Замшелая булыжная плита",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_cobblestone_stairs",
        "name": "Замшелые булыжные ступеньки",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_cobblestone_wall",
        "name": "Замшелая булыжная ограда",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_stone_brick_slab",
        "name": "Плита из замшелого каменного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_stone_brick_stairs",
        "name": "Ступеньки из замшелого каменного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_stone_brick_wall",
        "name": "Ограда из замшелого каменного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "mossy_stone_bricks",
        "name": "Замшелые каменные кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "mushroom_stew",
        "name": "Тушёные грибы",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_11",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_13",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_blocks",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_cat",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_chirp",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_far",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_mall",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_mellohi",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_otherside",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_pigstep",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_stal",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_strad",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_wait",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "music_disc_ward",
        "name": "Пластинка",
        "type": "item",
        "fast": false
    },
    {
        "id": "mutton",
        "name": "Сырая баранина",
        "type": "item",
        "fast": false
    },
    {
        "id": "mycelium",
        "name": "Мицелий",
        "type": "block",
        "fast": false
    },
    {
        "id": "name_tag",
        "name": "Бирка",
        "type": "item",
        "fast": false
    },
    {
        "id": "nautilus_shell",
        "name": "Раковина наутилуса",
        "type": "item",
        "fast": false
    },
    {
        "id": "nether_brick",
        "name": "Незерский кирпич",
        "type": "item",
        "fast": false
    },
    {
        "id": "nether_brick_fence",
        "name": "Забор из незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_brick_slab",
        "name": "Плита из незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_brick_stairs",
        "name": "Ступеньки из незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_brick_wall",
        "name": "Ограда из незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_bricks",
        "name": "Незерские кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_gold_ore",
        "name": "Незерская золотая руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_quartz_ore",
        "name": "Незер-кварцевая руда",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_sprouts",
        "name": "Незерские ростки",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_star",
        "name": "Звезда Незера",
        "type": "item",
        "fast": false
    },
    {
        "id": "nether_wart",
        "name": "Незерский нарост",
        "type": "block",
        "fast": false
    },
    {
        "id": "nether_wart_block",
        "name": "Блок незерского нароста",
        "type": "block",
        "fast": false
    },
    {
        "id": "netherite_axe",
        "name": "Незеритовый топор",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_block",
        "name": "Незеритовый блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "netherite_boots",
        "name": "Незеритовые ботинки",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_chestplate",
        "name": "Незеритовый нагрудник",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_helmet",
        "name": "Незеритовый шлем",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_hoe",
        "name": "Незеритовая мотыга",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_ingot",
        "name": "Незеритовый слиток",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_leggings",
        "name": "Незеритовые поножи",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_pickaxe",
        "name": "Незеритовая кирка",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_scrap",
        "name": "Незеритовый лом",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_shovel",
        "name": "Незеритовая лопата",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherite_sword",
        "name": "Незеритовый меч",
        "type": "item",
        "fast": false
    },
    {
        "id": "netherrack",
        "name": "Незерак",
        "type": "block",
        "fast": false
    },
    {
        "id": "note_block",
        "name": "Нотный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_boat",
        "name": "Дубовая лодка",
        "type": "item",
        "fast": false
    },
    {
        "id": "oak_button",
        "name": "Дубовая кнопка",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_door",
        "name": "Дубовая дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_fence",
        "name": "Дубовый забор",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_fence_gate",
        "name": "Дубовая калитка",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_leaves",
        "name": "Дубовые листья",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_log",
        "name": "Дубовое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "oak_planks",
        "name": "Дубовые доски",
        "type": "block",
        "fast": true
    },
    {
        "id": "oak_pressure_plate",
        "name": "Дубовая нажимная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_sapling",
        "name": "Саженец дуба",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_sign",
        "name": "Дубовая табличка",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_slab",
        "name": "Дубовая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_stairs",
        "name": "Дубовые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_trapdoor",
        "name": "Дубовый люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "oak_wood",
        "name": "Дуб",
        "type": "block",
        "fast": true
    },
    {
        "id": "observer",
        "name": "Наблюдатель",
        "type": "block",
        "fast": false
    },
    {
        "id": "obsidian",
        "name": "Обсидиан",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_banner",
        "name": "Оранжевый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_bed",
        "name": "Оранжевая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_candle",
        "name": "Оранжевая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_carpet",
        "name": "Оранжевый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_concrete",
        "name": "Оранжевый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_concrete_powder",
        "name": "Оранжевый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_dye",
        "name": "Оранжевый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "orange_glazed_terracotta",
        "name": "Оранжевая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_shulker_box",
        "name": "Оранжевый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_stained_glass",
        "name": "Оранжевое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_stained_glass_pane",
        "name": "Оранжевая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_terracotta",
        "name": "Оранжевая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_tulip",
        "name": "Оранжевый тюльпан",
        "type": "block",
        "fast": false
    },
    {
        "id": "orange_wool",
        "name": "Оранжевая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "oxeye_daisy",
        "name": "Ромашка",
        "type": "block",
        "fast": false
    },
    {
        "id": "oxidized_copper",
        "name": "Окисленный медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "oxidized_cut_copper",
        "name": "Окисленный резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "oxidized_cut_copper_slab",
        "name": "Окисленная резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "oxidized_cut_copper_stairs",
        "name": "Окисленные резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "packed_ice",
        "name": "Плотный лёд",
        "type": "block",
        "fast": false
    },
    {
        "id": "painting",
        "name": "Картина",
        "type": "item",
        "fast": false
    },
    {
        "id": "paper",
        "name": "Бумага",
        "type": "item",
        "fast": false
    },
    {
        "id": "peony",
        "name": "Пион",
        "type": "block",
        "fast": false
    },
    {
        "id": "phantom_membrane",
        "name": "Мембрана фантома",
        "type": "item",
        "fast": false
    },
    {
        "id": "pink_banner",
        "name": "Розовый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_bed",
        "name": "Розовая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_candle",
        "name": "Розовая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_carpet",
        "name": "Розовый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_concrete",
        "name": "Розовый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_concrete_powder",
        "name": "Розовый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_dye",
        "name": "Розовый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "pink_glazed_terracotta",
        "name": "Розовая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_shulker_box",
        "name": "Розовый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_stained_glass",
        "name": "Розовое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_stained_glass_pane",
        "name": "Розовая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_terracotta",
        "name": "Розовая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_tulip",
        "name": "Розовый тюльпан",
        "type": "block",
        "fast": false
    },
    {
        "id": "pink_wool",
        "name": "Розовая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "piston",
        "name": "Поршень",
        "type": "block",
        "fast": false
    },
    {
        "id": "podzol",
        "name": "Подзол",
        "type": "block",
        "fast": false
    },
    {
        "id": "pointed_dripstone",
        "name": "Капельник",
        "type": "block",
        "fast": true
    },
    {
        "id": "poisonous_potato",
        "name": "Ядовитый картофель",
        "type": "item",
        "fast": false
    },
    {
        "id": "polished_andesite",
        "name": "Полированный андезит",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_andesite_slab",
        "name": "Плита из полированного андезита",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_andesite_stairs",
        "name": "Ступеньки из полированного андезита",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_basalt",
        "name": "Полированный базальт",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_blackstone",
        "name": "Полированный чернит",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_brick_slab",
        "name": "Плита из полированно-чернитного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_brick_stairs",
        "name": "Ступеньки из полированно-чернитного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_brick_wall",
        "name": "Ограда из полированно-чернитного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_bricks",
        "name": "Полированно-чернитные кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_button",
        "name": "Кнопка из полированного чернита",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_pressure_plate",
        "name": "Нажимная плита из полированного чернита",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_slab",
        "name": "Плита из полированного чернита",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_stairs",
        "name": "Ступеньки из полированного чернита",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_blackstone_wall",
        "name": "Ограда из полированного чернита",
        "type": "block",
        "fast": true
    },
    {
        "id": "polished_deepslate",
        "name": "Полированный глубинный сланец",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_deepslate_slab",
        "name": "Плита из полированного глубинного сланца",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_deepslate_stairs",
        "name": "Ступеньки из полированного глубинного сланца",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_deepslate_wall",
        "name": "Ограда из полированного глубинного сланца",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_diorite",
        "name": "Полированный диорит",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_diorite_slab",
        "name": "Плита из полированного диорита",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_diorite_stairs",
        "name": "Ступеньки из полированного диорита",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_granite",
        "name": "Полированный гранит",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_granite_slab",
        "name": "Плита из полированного гранита",
        "type": "block",
        "fast": false
    },
    {
        "id": "polished_granite_stairs",
        "name": "Ступеньки из полированного гранита",
        "type": "block",
        "fast": false
    },
    {
        "id": "popped_chorus_fruit",
        "name": "Прожаренный плод хоруса",
        "type": "item",
        "fast": false
    },
    {
        "id": "poppy",
        "name": "Мак",
        "type": "block",
        "fast": false
    },
    {
        "id": "porkchop",
        "name": "Сырая свинина",
        "type": "item",
        "fast": false
    },
    {
        "id": "potato",
        "name": "Картофель",
        "type": "item",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье",
        "type": "item",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Мутное зелье",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Несоздаваемое зелье",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье огнестойкости",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье вреда",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье исцеления",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье заражения",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье невидимости",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье прыгучести",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье левитации",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье везения",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Заурядное зелье",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье ночного зрения",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье вязкости",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье отравления",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье регенерации",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье плавного падения",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье замедления",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье силы",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье стремительности",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Густое зелье",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье черепашьей мощи",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Бутылочка воды",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье водного дыхания",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье слабости",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье плетения",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "potion",
        "name": "Зелье заряженное ветром",
        "type": "potion_effect",
        "baseId": "potion",
        "fast": false
    },
    {
        "id": "powered_rail",
        "name": "Энергорельсы",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine",
        "name": "Призмарин",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine_brick_slab",
        "name": "Плита из призмаринового кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine_brick_stairs",
        "name": "Ступеньки из призмаринового кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine_bricks",
        "name": "Призмариновые кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine_crystals",
        "name": "Кристалл призмарина",
        "type": "item",
        "fast": false
    },
    {
        "id": "prismarine_slab",
        "name": "Призмариновая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine_stairs",
        "name": "Призмариновые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "prismarine_wall",
        "name": "Призмариновая ограда",
        "type": "block",
        "fast": false
    },
    {
        "id": "pufferfish",
        "name": "Иглобрюх",
        "type": "item",
        "fast": false
    },
    {
        "id": "pufferfish_bucket",
        "name": "Иглобрюх в ведре",
        "type": "item",
        "fast": false
    },
    {
        "id": "pumpkin",
        "name": "Тыква",
        "type": "block",
        "fast": false
    },
    {
        "id": "pumpkin_pie",
        "name": "Тыквенный пирог",
        "type": "item",
        "fast": false
    },
    {
        "id": "pumpkin_seeds",
        "name": "Семена тыквы",
        "type": "item",
        "fast": false
    },
    {
        "id": "purple_banner",
        "name": "Фиолетовый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_bed",
        "name": "Фиолетовая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_candle",
        "name": "Фиолетовая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_carpet",
        "name": "Фиолетовый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_concrete",
        "name": "Фиолетовый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_concrete_powder",
        "name": "Фиолетовый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_dye",
        "name": "Фиолетовый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "purple_glazed_terracotta",
        "name": "Фиолетовая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_shulker_box",
        "name": "Фиолетовый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_stained_glass",
        "name": "Фиолетовое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_stained_glass_pane",
        "name": "Фиолетовая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_terracotta",
        "name": "Фиолетовая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "purple_wool",
        "name": "Фиолетовая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "purpur_block",
        "name": "Пурпур",
        "type": "block",
        "fast": false
    },
    {
        "id": "purpur_pillar",
        "name": "Пурпуровый пилон",
        "type": "block",
        "fast": false
    },
    {
        "id": "purpur_slab",
        "name": "Пурпуровая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "purpur_stairs",
        "name": "Пурпуровые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "quartz",
        "name": "Незер-кварц",
        "type": "item",
        "fast": false
    },
    {
        "id": "quartz_block",
        "name": "Кварцевый блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "quartz_bricks",
        "name": "Кварцевые кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "quartz_pillar",
        "name": "Кварцевая колонна",
        "type": "block",
        "fast": false
    },
    {
        "id": "quartz_slab",
        "name": "Кварцевая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "quartz_stairs",
        "name": "Кварцевые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "rabbit",
        "name": "Сырая крольчатина",
        "type": "item",
        "fast": false
    },
    {
        "id": "rabbit_foot",
        "name": "Кроличья лапка",
        "type": "item",
        "fast": false
    },
    {
        "id": "rabbit_hide",
        "name": "Кроличья шкурка",
        "type": "item",
        "fast": false
    },
    {
        "id": "rabbit_stew",
        "name": "Тушёный кролик",
        "type": "item",
        "fast": false
    },
    {
        "id": "rail",
        "name": "Рельсы",
        "type": "block",
        "fast": false
    },
    {
        "id": "raw_copper",
        "name": "Рудная медь",
        "type": "item",
        "fast": false
    },
    {
        "id": "raw_copper_block",
        "name": "Блок рудной меди",
        "type": "block",
        "fast": false
    },
    {
        "id": "raw_gold",
        "name": "Рудное золото",
        "type": "item",
        "fast": false
    },
    {
        "id": "raw_gold_block",
        "name": "Блок рудного золота",
        "type": "block",
        "fast": false
    },
    {
        "id": "raw_iron",
        "name": "Рудное железо",
        "type": "item",
        "fast": false
    },
    {
        "id": "raw_iron_block",
        "name": "Блок рудного железа",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_banner",
        "name": "Красный флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_bed",
        "name": "Красная кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_candle",
        "name": "Красная свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_carpet",
        "name": "Красный ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_concrete",
        "name": "Красный бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_concrete_powder",
        "name": "Красный сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_dye",
        "name": "Красный краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "red_glazed_terracotta",
        "name": "Красная глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_mushroom",
        "name": "Красный гриб",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_mushroom_block",
        "name": "Блок красного гриба",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_nether_brick_slab",
        "name": "Плита из красного незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_nether_brick_stairs",
        "name": "Ступеньки из красного незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_nether_brick_wall",
        "name": "Ограда из красного незерского кирпича",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_nether_bricks",
        "name": "Красные незерские кирпичи",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_sand",
        "name": "Красный песок",
        "type": "block",
        "fast": true
    },
    {
        "id": "red_sandstone",
        "name": "Красный песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "red_sandstone_slab",
        "name": "Плита из красного песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "red_sandstone_stairs",
        "name": "Ступеньки из красного песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "red_sandstone_wall",
        "name": "Ограда из красного песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "red_shulker_box",
        "name": "Красный шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_stained_glass",
        "name": "Красное стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_stained_glass_pane",
        "name": "Красная стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_terracotta",
        "name": "Красная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_tulip",
        "name": "Красный тюльпан",
        "type": "block",
        "fast": false
    },
    {
        "id": "red_wool",
        "name": "Красная шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "redstone",
        "name": "Редстоуновая пыль",
        "type": "item",
        "fast": true
    },
    {
        "id": "redstone_block",
        "name": "Редстоуновый блок",
        "type": "block",
        "fast": true
    },
    {
        "id": "redstone_lamp",
        "name": "Редстоуновый фонарь",
        "type": "block",
        "fast": true
    },
    {
        "id": "redstone_ore",
        "name": "Редстоуновая руда",
        "type": "block",
        "fast": true
    },
    {
        "id": "redstone_torch",
        "name": "Редстоуновый факел",
        "type": "block",
        "fast": true
    },
    {
        "id": "repeater",
        "name": "Редстоуновый повторитель",
        "type": "block",
        "fast": false
    },
    {
        "id": "respawn_anchor",
        "name": "Якорь возрождения",
        "type": "block",
        "fast": false
    },
    {
        "id": "rooted_dirt",
        "name": "Корнистая земля",
        "type": "block",
        "fast": true
    },
    {
        "id": "rose_bush",
        "name": "Розовый куст",
        "type": "block",
        "fast": false
    },
    {
        "id": "rotten_flesh",
        "name": "Гнилая плоть",
        "type": "item",
        "fast": false
    },
    {
        "id": "saddle",
        "name": "Седло",
        "type": "item",
        "fast": false
    },
    {
        "id": "salmon",
        "name": "Сырой лосось",
        "type": "item",
        "fast": false
    },
    {
        "id": "salmon_bucket",
        "name": "Лосось в ведре",
        "type": "item",
        "fast": false
    },
    {
        "id": "sand",
        "name": "Песок",
        "type": "block",
        "fast": true
    },
    {
        "id": "sandstone",
        "name": "Песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "sandstone_slab",
        "name": "Песчаниковая плита",
        "type": "block",
        "fast": true
    },
    {
        "id": "sandstone_stairs",
        "name": "Песчаниковые ступеньки",
        "type": "block",
        "fast": true
    },
    {
        "id": "sandstone_wall",
        "name": "Песчаниковая ограда",
        "type": "block",
        "fast": true
    },
    {
        "id": "scaffolding",
        "name": "Подмостки",
        "type": "block",
        "fast": false
    },
    {
        "id": "sculk_sensor",
        "name": "Скалк-сенсор",
        "type": "block",
        "fast": false
    },
    {
        "id": "scute",
        "name": "Щиток",
        "type": "item",
        "fast": false
    },
    {
        "id": "sea_lantern",
        "name": "Морской фонарь",
        "type": "block",
        "fast": false
    },
    {
        "id": "sea_pickle",
        "name": "Морской огурец",
        "type": "block",
        "fast": false
    },
    {
        "id": "seagrass",
        "name": "Морская трава",
        "type": "block",
        "fast": false
    },
    {
        "id": "shears",
        "name": "Ножницы",
        "type": "item",
        "fast": false
    },
    {
        "id": "shield",
        "name": "Щит",
        "type": "item",
        "fast": false
    },
    {
        "id": "shroomlight",
        "name": "Грибосвет",
        "type": "block",
        "fast": false
    },
    {
        "id": "shulker_box",
        "name": "Шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "shulker_shell",
        "name": "Панцирь шалкера",
        "type": "item",
        "fast": false
    },
    {
        "id": "skull_banner_pattern",
        "name": "Узор флага",
        "type": "item",
        "fast": false
    },
    {
        "id": "slime_ball",
        "name": "Сгусток слизи",
        "type": "item",
        "fast": false
    },
    {
        "id": "slime_block",
        "name": "Блок слизи",
        "type": "block",
        "fast": false
    },
    {
        "id": "small_amethyst_bud",
        "name": "Малый аметистовый бутон",
        "type": "block",
        "fast": false
    },
    {
        "id": "small_dripleaf",
        "name": "Маленькая бросянка",
        "type": "block",
        "fast": false
    },
    {
        "id": "smithing_table",
        "name": "Стол кузнеца",
        "type": "block",
        "fast": false
    },
    {
        "id": "smoker",
        "name": "Коптильня",
        "type": "block",
        "fast": false
    },
    {
        "id": "smooth_basalt",
        "name": "Гладкий базальт",
        "type": "block",
        "fast": false
    },
    {
        "id": "smooth_quartz",
        "name": "Гладкий кварц",
        "type": "block",
        "fast": false
    },
    {
        "id": "smooth_quartz_slab",
        "name": "Плита из гладкого кварца",
        "type": "block",
        "fast": false
    },
    {
        "id": "smooth_quartz_stairs",
        "name": "Ступеньки из гладкого кварца",
        "type": "block",
        "fast": false
    },
    {
        "id": "smooth_red_sandstone",
        "name": "Гладкий красный песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_red_sandstone_slab",
        "name": "Плита из гладкого красного песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_red_sandstone_stairs",
        "name": "Ступеньки из гладкого красного песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_sandstone",
        "name": "Гладкий песчаник",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_sandstone_slab",
        "name": "Плита из гладкого песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_sandstone_stairs",
        "name": "Ступеньки из гладкого песчаника",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_stone",
        "name": "Гладкий камень",
        "type": "block",
        "fast": true
    },
    {
        "id": "smooth_stone_slab",
        "name": "Плита из гладкого камня",
        "type": "block",
        "fast": true
    },
    {
        "id": "snow",
        "name": "Снег",
        "type": "block",
        "fast": false
    },
    {
        "id": "snow_block",
        "name": "Блок снега",
        "type": "block",
        "fast": false
    },
    {
        "id": "snowball",
        "name": "Снежок",
        "type": "item",
        "fast": false
    },
    {
        "id": "soul_lantern",
        "name": "Фонарь душ",
        "type": "block",
        "fast": false
    },
    {
        "id": "soul_sand",
        "name": "Песок душ",
        "type": "block",
        "fast": true
    },
    {
        "id": "soul_soil",
        "name": "Почва душ",
        "type": "block",
        "fast": false
    },
    {
        "id": "soul_torch",
        "name": "Факел душ",
        "type": "block",
        "fast": false
    },
    {
        "id": "spectral_arrow",
        "name": "Спектральная стрела",
        "type": "item",
        "fast": false
    },
    {
        "id": "spider_eye",
        "name": "Паучий глаз",
        "type": "item",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье",
        "type": "item",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Мутное взрывное зелье",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Несоздаваемое взрывное зелье",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье огнестойкости",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье вреда",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье исцеления",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье заражения",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье невидимости",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье прыгучести",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье левитации",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье везения",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Заурядное взрывное зелье",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье ночного зрения",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье вязкости",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье отравления",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье регенерации",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье плавного падения",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье замедления",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье силы",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье стремительности",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Густое взрывное зелье",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье черепашьей мощи",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывная бутылочка воды",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье водного дыхания",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье слабости",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье плетения",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "splash_potion",
        "name": "Взрывное зелье заряженное ветром",
        "type": "potion_effect",
        "baseId": "splash_potion",
        "fast": false
    },
    {
        "id": "sponge",
        "name": "Губка",
        "type": "block",
        "fast": false
    },
    {
        "id": "spore_blossom",
        "name": "Спороцвет",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_boat",
        "name": "Еловая лодка",
        "type": "item",
        "fast": false
    },
    {
        "id": "spruce_button",
        "name": "Еловая кнопка",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_door",
        "name": "Еловая дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_fence",
        "name": "Еловый забор",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_fence_gate",
        "name": "Еловая калитка",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_leaves",
        "name": "Хвоя",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_log",
        "name": "Еловое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "spruce_planks",
        "name": "Еловые доски",
        "type": "block",
        "fast": true
    },
    {
        "id": "spruce_pressure_plate",
        "name": "Еловая нажимная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_sapling",
        "name": "Саженец ели",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_sign",
        "name": "Еловая табличка",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_slab",
        "name": "Еловая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_stairs",
        "name": "Еловые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_trapdoor",
        "name": "Еловый люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "spruce_wood",
        "name": "Ель",
        "type": "block",
        "fast": true
    },
    {
        "id": "spyglass",
        "name": "Подзорная труба",
        "type": "item",
        "fast": false
    },
    {
        "id": "stick",
        "name": "Палка",
        "type": "item",
        "fast": true
    },
    {
        "id": "sticky_piston",
        "name": "Липкий поршень",
        "type": "block",
        "fast": false
    },
    {
        "id": "stone",
        "name": "Камень",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_axe",
        "name": "Каменный топор",
        "type": "item",
        "fast": true
    },
    {
        "id": "stone_brick_slab",
        "name": "Плита из каменного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_brick_stairs",
        "name": "Ступеньки из каменного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_brick_wall",
        "name": "Ограда из каменного кирпича",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_bricks",
        "name": "Каменные кирпичи",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_button",
        "name": "Каменная кнопка",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_hoe",
        "name": "Каменная мотыга",
        "type": "item",
        "fast": true
    },
    {
        "id": "stone_pickaxe",
        "name": "Каменная кирка",
        "type": "item",
        "fast": true
    },
    {
        "id": "stone_pressure_plate",
        "name": "Каменная нажимная плита",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_shovel",
        "name": "Каменная лопата",
        "type": "item",
        "fast": true
    },
    {
        "id": "stone_slab",
        "name": "Каменная плита",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_stairs",
        "name": "Каменные ступеньки",
        "type": "block",
        "fast": true
    },
    {
        "id": "stone_sword",
        "name": "Каменный меч",
        "type": "item",
        "fast": true
    },
    {
        "id": "stonecutter",
        "name": "Камнерез",
        "type": "block",
        "fast": true
    },
    {
        "id": "string",
        "name": "Нить",
        "type": "item",
        "fast": false
    },
    {
        "id": "stripped_acacia_log",
        "name": "Обтёсанное акациевое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_acacia_wood",
        "name": "Обтёсанная акациевая древесина",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_birch_log",
        "name": "Обтёсанное берёзовое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_birch_wood",
        "name": "Обтёсанная берёзовая древесина",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_crimson_hyphae",
        "name": "Очищенные багровые гифы",
        "type": "block",
        "fast": false
    },
    {
        "id": "stripped_crimson_stem",
        "name": "Очищенный багровый стебель",
        "type": "block",
        "fast": false
    },
    {
        "id": "stripped_dark_oak_log",
        "name": "Обтёсанное бревно тёмного дуба",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_dark_oak_wood",
        "name": "Обтёсанная древесина тёмного дуба",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_jungle_log",
        "name": "Обтёсанное бревно тропического дерева",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_jungle_wood",
        "name": "Обтёсанная тропическая древесина",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_oak_log",
        "name": "Обтёсанное дубовое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_oak_wood",
        "name": "Обтёсанная дубовая древесина",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_spruce_log",
        "name": "Обтёсанное еловое бревно",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_spruce_wood",
        "name": "Обтёсанная еловая древесина",
        "type": "block",
        "fast": true
    },
    {
        "id": "stripped_warped_hyphae",
        "name": "Очищенные искажённые гифы",
        "type": "block",
        "fast": false
    },
    {
        "id": "stripped_warped_stem",
        "name": "Очищенный искажённый стебель",
        "type": "block",
        "fast": false
    },
    {
        "id": "sugar",
        "name": "Сахар",
        "type": "item",
        "fast": false
    },
    {
        "id": "sugar_cane",
        "name": "Сахарный тростник",
        "type": "block",
        "fast": false
    },
    {
        "id": "sunflower",
        "name": "Подсолнух",
        "type": "block",
        "fast": false
    },
    {
        "id": "suspicious_stew",
        "name": "Загадочное рагу",
        "type": "item",
        "fast": false
    },
    {
        "id": "sweet_berries",
        "name": "Сладкие ягоды",
        "type": "item",
        "fast": false
    },
    {
        "id": "tall_grass",
        "name": "Высокая трава",
        "type": "block",
        "fast": false
    },
    {
        "id": "target",
        "name": "Мишень",
        "type": "block",
        "fast": false
    },
    {
        "id": "terracotta",
        "name": "Терракота",
        "type": "block",
        "fast": false
    },
    {
        "id": "tinted_glass",
        "name": "Тонированное стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Обработанная стрела",
        "type": "item",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Обработанная стрела",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Обработанная несоздаваемым зельем стрела",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела огнестойкости",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела вреда",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела исцеления",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела заражения",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела невидимости",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела прыгучести",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела левитации",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела везения",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Обработанная стрела",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела ночного зрения",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела вязкости",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела отравления",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела регенерации",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела плавного падения",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела замедления",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела силы",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела стремительности",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Обработанная стрела",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела черепашьей мощи",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Взрывная стрела",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела водного дыхания",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела слабости",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела плетения",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tipped_arrow",
        "name": "Стрела заряженная ветром",
        "type": "potion_effect",
        "baseId": "tipped_arrow",
        "fast": false
    },
    {
        "id": "tnt",
        "name": "Динамит",
        "type": "block",
        "fast": false
    },
    {
        "id": "tnt_minecart",
        "name": "Вагонетка с динамитом",
        "type": "item",
        "fast": false
    },
    {
        "id": "torch",
        "name": "Факел",
        "type": "block",
        "fast": true
    },
    {
        "id": "totem_of_undying",
        "name": "Тотем бессмертия",
        "type": "item",
        "fast": false
    },
    {
        "id": "trapped_chest",
        "name": "Сундук-ловушка",
        "type": "block",
        "fast": false
    },
    {
        "id": "trident",
        "name": "Трезубец",
        "type": "item",
        "fast": false
    },
    {
        "id": "tropical_fish",
        "name": "Тропическая рыба",
        "type": "item",
        "fast": false
    },
    {
        "id": "tropical_fish_bucket",
        "name": "Тропическая рыба в ведре",
        "type": "item",
        "fast": false
    },
    {
        "id": "tube_coral",
        "name": "Трубчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "tube_coral_block",
        "name": "Блок трубчатого коралла",
        "type": "block",
        "fast": false
    },
    {
        "id": "tube_coral_fan",
        "name": "Веерный трубчатый коралл",
        "type": "block",
        "fast": false
    },
    {
        "id": "tuff",
        "name": "Туф",
        "type": "block",
        "fast": false
    },
    {
        "id": "turtle_egg",
        "name": "Черепашье яйцо",
        "type": "block",
        "fast": false
    },
    {
        "id": "turtle_helmet",
        "name": "Черепаший панцирь",
        "type": "item",
        "fast": false
    },
    {
        "id": "twisting_vines",
        "name": "Вьющаяся лоза",
        "type": "block",
        "fast": false
    },
    {
        "id": "vine",
        "name": "Лианы",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_button",
        "name": "Искажённая кнопка",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_door",
        "name": "Искажённая дверь",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_fence",
        "name": "Искажённый забор",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_fence_gate",
        "name": "Искажённая калитка",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_fungus",
        "name": "Искажённый гриб",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_fungus_on_a_stick",
        "name": "Удочка с искажённым грибом",
        "type": "item",
        "fast": false
    },
    {
        "id": "warped_hyphae",
        "name": "Искажённые гифы",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_nylium",
        "name": "Искажённый нилий",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_planks",
        "name": "Искажённые доски",
        "type": "block",
        "fast": true
    },
    {
        "id": "warped_pressure_plate",
        "name": "Искажённая нажимная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_roots",
        "name": "Искажённые корни",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_sign",
        "name": "Искажённая табличка",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_slab",
        "name": "Искажённая плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_stairs",
        "name": "Искажённые ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_stem",
        "name": "Искажённый стебель",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_trapdoor",
        "name": "Искажённый люк",
        "type": "block",
        "fast": false
    },
    {
        "id": "warped_wart_block",
        "name": "Блок искажённого нароста",
        "type": "block",
        "fast": false
    },
    {
        "id": "water_bucket",
        "name": "Ведро воды",
        "type": "item",
        "fast": false
    },
    {
        "id": "waxed_copper_block",
        "name": "Вощёный медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_cut_copper",
        "name": "Вощёный резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_cut_copper_slab",
        "name": "Вощёная резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_cut_copper_stairs",
        "name": "Вощёные резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_exposed_copper",
        "name": "Вощёный потемневший медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_exposed_cut_copper",
        "name": "Вощёный потемневший резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_exposed_cut_copper_slab",
        "name": "Вощёная потемневшая резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_exposed_cut_copper_stairs",
        "name": "Вощёные потемневшие резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_oxidized_copper",
        "name": "Вощёный окисленный медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_oxidized_cut_copper",
        "name": "Вощёный окисленный резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_oxidized_cut_copper_slab",
        "name": "Вощёная окисленная резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_oxidized_cut_copper_stairs",
        "name": "Вощёные окисленные резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_weathered_copper",
        "name": "Вощёный состаренный медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_weathered_cut_copper",
        "name": "Вощёный состаренный резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_weathered_cut_copper_slab",
        "name": "Вощёная состаренная резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "waxed_weathered_cut_copper_stairs",
        "name": "Вощёные состаренные резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "weathered_copper",
        "name": "Состаренный медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "weathered_cut_copper",
        "name": "Состаренный резной медный блок",
        "type": "block",
        "fast": false
    },
    {
        "id": "weathered_cut_copper_slab",
        "name": "Состаренная резная медная плита",
        "type": "block",
        "fast": false
    },
    {
        "id": "weathered_cut_copper_stairs",
        "name": "Состаренные резные медные ступеньки",
        "type": "block",
        "fast": false
    },
    {
        "id": "weeping_vines",
        "name": "Плакучая лоза",
        "type": "block",
        "fast": false
    },
    {
        "id": "wet_sponge",
        "name": "Мокрая губка",
        "type": "block",
        "fast": false
    },
    {
        "id": "wheat_seeds",
        "name": "Семена пшеницы",
        "type": "item",
        "fast": false
    },
    {
        "id": "white_banner",
        "name": "Белый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_bed",
        "name": "Белая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_candle",
        "name": "Белая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_carpet",
        "name": "Белый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_concrete",
        "name": "Белый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_concrete_powder",
        "name": "Белый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_dye",
        "name": "Белый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "white_glazed_terracotta",
        "name": "Белая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_shulker_box",
        "name": "Белый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_stained_glass",
        "name": "Белое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_stained_glass_pane",
        "name": "Белая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_terracotta",
        "name": "Белая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_tulip",
        "name": "Белый тюльпан",
        "type": "block",
        "fast": false
    },
    {
        "id": "white_wool",
        "name": "Белая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "wither_rose",
        "name": "Роза визера",
        "type": "block",
        "fast": false
    },
    {
        "id": "wooden_axe",
        "name": "Деревянный топор",
        "type": "item",
        "fast": true
    },
    {
        "id": "wooden_hoe",
        "name": "Деревянная мотыга",
        "type": "item",
        "fast": true
    },
    {
        "id": "wooden_pickaxe",
        "name": "Деревянная кирка",
        "type": "item",
        "fast": true
    },
    {
        "id": "wooden_shovel",
        "name": "Деревянная лопата",
        "type": "item",
        "fast": true
    },
    {
        "id": "wooden_sword",
        "name": "Деревянный меч",
        "type": "item",
        "fast": true
    },
    {
        "id": "writable_book",
        "name": "Книга и перо",
        "type": "item",
        "fast": false
    },
    {
        "id": "written_book",
        "name": "Завершённая книга",
        "type": "item",
        "fast": false
    },
    {
        "id": "yellow_banner",
        "name": "Жёлтый флаг",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_bed",
        "name": "Жёлтая кровать",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_candle",
        "name": "Жёлтая свеча",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_carpet",
        "name": "Жёлтый ковёр",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_concrete",
        "name": "Жёлтый бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_concrete_powder",
        "name": "Жёлтый сухой бетон",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_dye",
        "name": "Жёлтый краситель",
        "type": "item",
        "fast": false
    },
    {
        "id": "yellow_glazed_terracotta",
        "name": "Жёлтая глазурованная керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_shulker_box",
        "name": "Жёлтый шалкеровый ящик",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_stained_glass",
        "name": "Жёлтое стекло",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_stained_glass_pane",
        "name": "Жёлтая стеклянная панель",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_terracotta",
        "name": "Жёлтая керамика",
        "type": "block",
        "fast": false
    },
    {
        "id": "yellow_wool",
        "name": "Жёлтая шерсть",
        "type": "block",
        "fast": false
    },
    {
        "id": "zombie_head",
        "name": "Голова зомби",
        "type": "block",
        "fast": false
    }
];

let quickPool = pool.filter(i => i.fast);

// Update counts if in browser
if (typeof document !== 'undefined') {
    const el = document.getElementById('pool-count');
    if (el) el.innerText = `Загружено предметов: ${pool.length} (Быстрых: ${quickPool.length})`;
}
