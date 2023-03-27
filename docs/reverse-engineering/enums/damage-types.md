# Damage Types

## Table

| Type | Value |
| ---- | ----- |
| DMG_GENERIC | 0 |
| DMG_CRUSH | 1 |
| DMG_BULLET | 2 |
| DMG_SLASH | 4 |
| DMG_BURN | 8 |
| DMG_VEHICLE | 16 |
| DMG_FALL | 32 |
| DMG_BLAST | 64 |
| DMG_CLUB | 128 |
| DMG_SHOCK | 256 |
| DMG_SONIC | 512 |
| DMG_ENERGYBEAM | 1024 |
| DMG_PREVENT_PHYSICS_FORCE | 2048 |
| DMG_NEVERGIB | 4096 |
| DMG_ALWAYSGIB | 8192 |
| DMG_DROWN | 16384 |
| DMG_PARALYZE | 32768 |
| DMG_NERVEGAS | 65536 |
| DMG_POISON | 131072 |
| DMG_RADIATION | 262144 |
| DMG_DROWNRECOVER | 524288 |
| DMG_ACID | 1048576 |
| DMG_SLOWBURN | 2097152 |
| DMG_REMOVENORAGDOLL | 4194304 |
| DMG_PHYSGUN | 8388608 |
| DMG_PLASMA | 16777216 |

## Definitions

```cpp
#define DMG_GENERIC 0
#define DMG_CRUSH (1 << 0)
#define DMG_BULLET (1 << 1)
#define DMG_SLASH (1 << 2)
#define DMG_BURN (1 << 3)
#define DMG_VEHICLE (1 << 4)
#define DMG_FALL (1 << 5)
#define DMG_BLAST (1 << 6)
#define DMG_CLUB (1 << 7)
#define DMG_SHOCK (1 << 8)
#define DMG_SONIC (1 << 9)
#define DMG_ENERGYBEAM (1 << 10)
#define DMG_PREVENT_PHYSICS_FORCE (1 << 11)
#define DMG_NEVERGIB (1 << 12)
#define DMG_ALWAYSGIB (1 << 13)
#define DMG_DROWN (1 << 14)
#define DMG_PARALYZE (1 << 15)
#define DMG_NERVEGAS (1 << 16)
#define DMG_POISON (1 << 17)
#define DMG_RADIATION (1 << 18)
#define DMG_DROWNRECOVER (1 << 19)
#define DMG_ACID (1 << 20)
#define DMG_SLOWBURN (1 << 21)
#define DMG_REMOVENORAGDOLL (1 << 22)
#define DMG_PHYSGUN (1 << 23)
#define DMG_PLASMA (1 << 24)
```