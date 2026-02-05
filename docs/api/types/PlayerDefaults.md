---
title: PlayerDefaults
description:
icon: polytoria/PlayerDefaults
---

# :polytoria-PlayerDefaults: PlayerDefaults

{{ inherits("HiddenBase") }}

PlayerDefaults is a service used for storing the default values of the  Player when created.


{{ staticclass("PlayerDefaults") }}

{{ notnewable() }}


## Properties

### MaxHealth:number { property }

The default maximum health of the player.

---
### WalkSpeed:number { property }

The default walking speed of the player.

---
### SprintSpeed:number { property }

The default sprinting speed of the player.

---
### JumpPower:number { property }

The default jump power of the player.

---
### RespawnTime:number { property }

The default time the player has to wait before respawning.

---
### ChatColor:Color { property }

The default chat color of the player.

---
### CanMove:boolean { property }

Determines whether the player can move by default.

---
### StaminaBurn:number { property }

The rate at which the player's stamina depletes while sprinting.

---
### UseStamina:boolean { property }

Determines whether the player uses stamina.

---
### StaminaEnabled:boolean { property }

Legacy value for stamina.

---
### Stamina:number { property }

Determines the default stamina of players.

---
### MaxStamina:number { property }

Determines the default maximum stamina of players.

---
### StaminaRegen:number { property }

Determines the rate at which the player's stamina regenerates.

---
### UseHeadTurning:boolean { property }

Determines whether the player uses head turning by default.

---
### UseBubbleChat:boolean { property }

Determines whether the player uses bubble chat by default.

---
### AutoLoadAppearance:boolean { property }

Determines whether the player's appearance is automatically loaded by default.

---

## Methods

### LoadDefaults():nil { method }

Resets the specified player back to their default values.

