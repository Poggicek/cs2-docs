# ConVars

## Flags

| Flag | Value |
| ---- | ----- |
| FCVAR_LINKED_CONCOMMAND | 1 << 0 |
| FCVAR_DEVELOPMENTONLY | 1 << 1 |
| FCVAR_GAMEDLL | 1 << 2 |
| FCVAR_CLIENTDLL | 1 << 3 |
| FCVAR_MISSING0 | 1 << 4 |
| FCVAR_PROTECTED | 1 << 5 |
| FCVAR_SPONLY | 1 << 6 |
| FCVAR_ARCHIVE | 1 << 7 |
| FCVAR_NOTIFY | 1 << 8 |
| FCVAR_USERINFO | 1 << 9 |
| FCVAR_HIDE | 1 << 10 |
| FCVAR_UNLOGGED | 1 << 11 |
| FCVAR_MISSING1 | 1 << 12 |
| FCVAR_REPLICATED | 1 << 13 |
| FCVAR_CHEAT | 1 << 14 |
| FCVAR_PER_USER | 1 << 15 |
| FCVAR_DEMO | 1 << 16 |
| FCVAR_DONTRECORD | 1 << 17 |
| FCVAR_MISSING2 | 1 << 18 |
| FCVAR_RELEASE | 1 << 19 |
| FCVAR_MENUBAR_ITEM | 1 << 20 |
| FCVAR_MISSING3 | 1 << 21 |
| FCVAR_NOT_CONNECTED | 1 << 22 |
| FCVAR_VCONSOLE_FUZZY_MATCHING | 1 << 23 |
| FCVAR_SERVER_CAN_EXECUTE | 1 << 24 |
| FCVAR_MISSING4 | 1 << 25 |
| FCVAR_SERVER_CANNOT_QUERY | 1 << 26 |
| FCVAR_VCONSOLE_SET_FOCUS | 1 << 27 |
| FCVAR_CLIENTCMD_CAN_EXECUTE | 1 << 28 |
| FCVAR_EXECUTE_PER_TICK | 1 << 29 |

:::info
Flag definitons can be found in **tier0** by searching for xrefs to any of the flag names (e.g. `DEVELOPMENTONLY`)
:::

:::caution
Code that translates flags to a human readable format reads the structs from the middle, thus the flags are read by going backwards

![ConVarFlag struct](img/structs.png)
:::

## List of ConVars

An array of pointers is located in the CCvar interface on offset 0x40

![Array of pointers](img/pointerarray.png)

The size of the array is a 16bit number also located in the CCvar interface on offset 0x58

![Array size](img/convarlength.png)

If we iterate through the array and dereference the pointers, we can get all the registered convars in the game.

## ConVar structure

```cpp
class ConVar
{
public:
	char *name; //0x0000
	void *nextConVar; //0x0008
	uint64_t unk1; //0x0010
	uint64_t unk2; //0x0018
	char *description; //0x0020
	uint32_t type; //0x0028
	uint32_t registered; //0x002C
	uint32_t flags; //0x0030
	uint32_t unk3; //0x0034
	uint32_t callbackId; //0x0038
	uint32_t unk4; //0x003C
	uint64_t value; //0x0040
	uint64_t defaultValue; //0x0048
}; //Size: 0x0050
```

![ConVar structure](img/convarstruct.png)

`callbackId` is an index of a callback in an array of callbacks.

`type` indicates the type of the value.
Current known types are:

- 0: `boolean`
- 7: `float`
- TODO

:::caution
For whatever reason, some convars don't have a defaultValue field, unsure in which conditions this happens. For example the `mat_shading_complexity` convar does this
:::