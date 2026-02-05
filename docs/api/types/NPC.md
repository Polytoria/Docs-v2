---
title: NPC
description:
icon: polytoria/NPC
---

# :polytoria-NPC: NPC

{{ inherits("Physical") }}

NPC (non-player character) is an object similar to a  Player but that can be controlled by code. Like players, it can walk and jump, and its body part colors can be customized.


## Properties

### SeatOffset:Vector3 { property }

The offset to the seat at which the NPC is positioned when sitting.

---
### Health:number { property }

The current health of the NPC.

---
### MaxHealth:number { property }

The maximum health of the NPC.

---
### JumpPower:number { property }

Determines the jump power of the NPC.

---
### WalkSpeed:number { property }

Determines the walking speed of the NPC.

---
### UseNametag:boolean { property }

Determines whether the NPC uses a nametag.

---
### NametagOffset:Vector3 { property }

Determines the offset position of the NPC's nametag.

---
### NametagVisibleRadius:number { property }

Determines the visibility radius of the NPC's nametag.

---
### DisplayName:string { property }

Determines the display name of the NPC.

---
### JumpSound:Sound { property }

Determines the sound played when the NPC jumps.

---
### IsSitting:boolean { property }

Indicates whether the NPC is currently sitting.
{{ readonly() }}


---
### IsDead:boolean { property }

Indicates whether the NPC is currently dead.
{{ readonly() }}


---
### HoldingTool:Tool { property }

Indicates the tool currently held by the NPC.
{{ readonly() }}


---
### SittingIn:Seat { property }

Indicates the seat in which the NPC is currently sitting.
{{ readonly() }}


---
### Character:CharacterModel { property }

The character model associated with the NPC.
{{ readonly() }}


---
### MoveTarget:Dynamic { property }

Determines the instance the NPC should walk towards.

---
### OnGround:boolean { property }

Indicates whether the NPC is currently on the ground.
{{ readonly() }}


---
### OnCeiling:boolean { property }

Indicates whether the NPC is currently on the ceiling.
{{ readonly() }}


---
### NavDestinationDistance:number { property }

Indicates the distance to the navigation destination.
{{ readonly() }}


---
### NavDestinationReached:boolean { property }

Indicates whether the NPC has reached its navigation destination.
{{ readonly() }}


---
### NavDestinationValid:boolean { property }

Indicates whether the navigation destination is valid.
{{ readonly() }}


---

## Methods

### Kill():nil { method }

Kills the NPC.

---
### Jump():nil { method }

Makes the NPC jump.

---
### Sit(seat;Seat):nil { method }

Makes the NPC sit on a specified seat.

---
### Unsit(addForce;boolean?):nil { method }

Unsits the NPC from the current seat.

---
### EquipTool(tool;Tool):nil { method }

Equips the NPC with a specified tool.

---
### DropTool():nil { method }

Unequips the currently equipped tool from the NPC.

---
### LoadAppearance(userID;number):nil { method }

Loads the appearance of the NPC based on a user ID.

---
### ClearAppearance():nil { method }

Clears the NPC's current appearance.

---
### SetNavDestination(pos;Vector3):nil { method }

Determines the position the NPC should walk towards.

---
### Respawn():nil { method }

Respawns the NPC.

---
### TakeDamage(dmg;number):nil { method }

Applies damage to the NPC.

---
### Heal(amount;number):nil { method }

Heals the NPC by a specified amount.

---

## Events

### Died() { event }

Triggered when the NPC dies.

---
### Landed() { event }

Triggered when the NPC lands on the ground after a jump or fall.

---
### NavFinished() { event }

Triggered when the NPC finishes navigating to a destination.

