---
title: Physical
description:
icon: polytoria/Physical
---

# :polytoria-Physical: Physical

{{ inherits("Dynamic") }}

Physical represents an object affected by physics in the world.

{{ abstract() }}

{{ notnewable() }}


## Properties

### Anchored:boolean { property }

Determines whether this object is affected by physics.

---
### CanCollide:boolean { property }

Determines whether this object can collide with other objects.

---
### Velocity:Vector3 { property }

Determines the linear velocity of this object.

---
### AngularVelocity:Vector3 { property }

Determines the angular velocity of this object.

---

## Methods

### SetNetworkAuthority(plr;Player):nil { method }

Sets the network authority of this object to the specified player.

---
### GetTouching():{ Physical } { method }

Get all objects that's currently in contact with this object.

---
### MovePosition(position;Vector3):nil { method }

Moves the part to the specified position while keeping physics in mind.

---
### MoveRotation(rotation;Vector3):nil { method }

Rotates the part while keeping physics in mind.

---

## Events

### Touched(hit;Physical) { event }

Fires when this object has collide with other object

---
### TouchEnded(hit;Physical) { event }

Fires when this object has stopped colliding with other object

---
### MouseEnter() { event }

Fires when cursor is hovered on this object. Only fired locally

---
### MouseExit() { event }

Fires when cursor leaves this object. Only fired locally

---
### Clicked(player;Player) { event }

Fires when this object has been clicked by a player

