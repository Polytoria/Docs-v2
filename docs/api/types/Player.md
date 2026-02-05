---
title: Player
description:
icon: polytoria/Player
---

# :polytoria-Player: Player

{{ inherits("NPC") }}

Player represents a user playing the game.

{{ notnewable() }}


## Properties

### UserID:number { property }

The unique ID of the player.
{{ readonly() }}


---
### CanMove:boolean { property }

Determines whether the player can move.

---
### SprintSpeed:number { property }

Determines the sprinting speed of the player.

---
### Stamina:number { property }

Determines the current stamina of the player.

---
### MaxStamina:number { property }

Determines the maximum stamina of the player.

---
### UseStamina:boolean { property }

Determines whether the player uses stamina.

---
### StaminaRegen:number { property }

Determines the rate at which the player's stamina regenerates.

---
### StaminaBurn:number { property }

Determines the rate at which the player's stamina depletes while sprinting.

---
### RespawnTime:number { property }

Determines the time the player has to wait before respawning.

---
### UseHeadTurning:boolean { property }

Determines whether the player uses head turning.

---
### UseBubbleChat:boolean { property }

Determines whether the player uses bubble chat.

---
### AutoLoadAppearance:boolean { property }

Determines whether the player's appearance is automatically loaded.

---
### NetworkPing:number { property }

The amount of network latency (ping) the player is experiencing.
{{ readonly() }}


---
### IsAdmin:boolean { property }

Determines whether the player is an administrator.
{{ readonly() }}


---
### IsCreator:boolean { property }

Determines whether the player is the creator of the game.
{{ readonly() }}


---
### ChatColor:Color { property }

Determines the chat color of the player.

---
### IsLocal:boolean { property }

Determines whether the player is the local player.
{{ clientexclusive() }}

{{ readonly() }}


---
### IsClimbing:boolean { property }

Determines whether the player is currently climbing.
{{ readonly() }}


---
### ClimbingTruss:Truss { property }

Determines the truss the player is currently climbing.
{{ readonly() }}


---
### UserPlatform:ClientPlatformEnum { property }

Determines the platform the player is using.
{{ readonly() }}


---
### Inventory:Inventory { property }

The inventory of the player.
{{ readonly() }}


---

## Methods

### Jump():nil { method }

Makes the player jump.

---
### Kick(reason;string):nil { method }

Kicks the player from the game with the specified reason.

{{ serverexclusive() }}

---
### UnequipTool():nil { method }

Unequips the currently equipped tool of the player.

---
### Respawn():nil { method }

Respawns the player.

{{ serverexclusive() }}

---
### ResetAppearance():nil { method }

Resets the player's appearance to the default.

---

## Events

### Chatted(message;string) { event }

Fires when this player chats

---
### Respawned() { event }

Fires when this player has respawned

