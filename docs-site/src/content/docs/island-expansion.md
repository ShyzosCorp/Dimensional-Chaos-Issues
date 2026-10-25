---
title: "Island expansion"
description: "Expand your island through Slate quests and unlock gateway destinations in Dimensional Chaos 1.1.0 Beta."
tableOfContents: false
---

New OneBlock islands start with a square border at radius 16. The turquoise wall appears as you approach the edge. The server enforces it: you can't build or walk past it.

## How a tier unlocks

Each tier has an Island Expansion chapter in the Slate quest book. Its final quest, **Island Expansion 1** to **8**, opens once a few key quests of that chapter are done. Then tick its **Expand the island** task. There is no item cost: the key quests are the requirement. The other quests in the chapter are optional.

Tiers unlock in order, and the border grows by eight blocks of radius per tier, up to radius 80 at tier 8. The tier belongs to the island, so the whole team shares it, and it never goes back down. Use `/dc island` to see your tier and the next one.

| Tier | Chapter | Border radius | Key quests |
| ---: | --- | ---: | --- |
| 1 | First Steps | 24 | First logs, stone pickaxe, furnace, bridge, enter the gateway, return home |
| 2 | Survivor's Island | 32 | Iron, iron pickaxe, shield, visit the Twilight Forest |
| 3 | Mystical Roots | 40 | The Nether, quartz, inferium, obsidian |
| 4 | Gears & Steam | 48 | Zinc, andesite alloy, cogs, water wheel, press |
| 5 | Arcane Studies | 56 | The Aether, spell book, inscription, lapis |
| 6 | Industrial Void | 64 | Osmium, infuser, steel, circuits, enrichment |
| 7 | Beyond the Fracture | 72 | The Undergarden, the End, endermen, wither skeletons |
| 8 | Dimensional Mastery | 80 | The Wither, nether star, beacon, elite circuit |

Each expansion quest also gives the team rewards, such as XP and Dimensional Fragments.

Expanding gives you building space. It doesn't fill the new area with blocks or change your OneBlock. OneBlock phases depend on blocks mined, not on the island tier.

## What the tier changes

The tier decides which destinations your gateway can use. In the official 1.1.0 setup, these are the minimum tiers:

| Destination | Island tier |
| --- | ---: |
| Twilight Forest | 0 |
| The Aether | 1 |
| The Nether | 2 |
| The Undergarden | 4 |
| The End | 6 |
| The Otherside | 7 |

Unlocking a destination makes it eligible for the gateway; it doesn't let you choose it on demand. The corresponding dimension mod must be installed and the destination enabled. Servers with custom settings may differ.

A higher tier also makes things harder. Daily Threat waves near you can use stronger mobs, a fracture needs more fragments to repair, and its Rift Guardians come in larger, tougher waves.

## Without Slate Quests

The border and tier logic belong to the custom mod. The quest-based unlocks need Slate Quests and the matching quest content. Without them, quest progress can't expand an island; only an operator can, with `/dc island tier set <tier>`.
