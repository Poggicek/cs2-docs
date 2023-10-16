---
sidebar_position: 4
---

# Incompatibilities

This page contains a list of incompatibilities between source 1 and source 2 that plugin developers should be aware of.

## Players are split between a player controller and a pawn
Unlike source 1 where CBasePlayer was both the player on the server and the character in the world, source 2 splits these apart.
A player controller holds all the information about the player itself, e.g. `m_steamID`, `m_iszPlayerName`, every controller has a `m_hPawn` attached to retrieve the player pawn. Pawn has your normal `CBaseCombatCharacter` properties set, e.g. `m_iHealth`, a pawn also includes a `m_hController` property to retrieve the player controller.

:::info
`CBasePlayerController` inherits from CBaseEntity and still behaves as any other entity, it will always use an entity index between 1 and `MAXPLAYERS+1` as in source 1, however ordinary entity properties will not be set or used at all. Pawns do not use reserved entity indices.
:::

## A player controller still exists after a player disconnects
A controller holds a `PlayerConnectedState m_iConnected` value that represents the current state of the player. If a player disconnects, the controller will still exist but the state will be set to `PlayerConnectedState::PlayerDisconnected`. This could be a problem if you are passing controllers through timers where you'd normally only check if the entity handle is still valid, now the state has to be checked as well.

:::note Not confirmed
Disconnected controllers should only be replaced by new players if the server is full
:::

```cpp
enum class PlayerConnectedState : uint32_t
{
	PlayerNeverConnected = 0xffffffffffffffff,
	PlayerConnected = 0x0,
	PlayerConnecting = 0x1,
	PlayerReconnecting = 0x2,
	PlayerDisconnecting = 0x3,
	PlayerDisconnected = 0x4,
	PlayerReserved = 0x5,
};
```

## Userids are no longer "unique"
Unlike source 1 where userids were unique up to 65k, source 2 userids act more like player slots and will be reused. Definitely don't use them as a long term identifier (e.g. in timers).