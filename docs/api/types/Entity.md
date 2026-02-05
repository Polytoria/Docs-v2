---
title: Entity
description:
icon: polytoria/Entity
---

# :polytoria-Entity: Entity

{{ inherits("Physical") }}

Entity represents a physics object that's related to building blocks (inherited by Part and Mesh)

{{ abstract() }}

{{ notnewable() }}


## Properties

### Color:Color { property }

The color of the entity.

---
### CastShadows:boolean { property }

Determines whether the entity casts shadows.

---
### IsSpawn:boolean { property }

Determines whether the part can be used as a spawn location or not.

---
### UseGravity:boolean { property }

Determines whether the entity is affected by gravity.

---
### Mass:number { property }

Determines the mass of the entity.

---
### Friction:number { property }

Determines the friction of the entity.

---
### Drag:number { property }

Determines the drag (air resistance) of the entity.

---
### AngularDrag:number { property }

Determines the angular drag of the entity.

---
### Bounciness:number { property }

Determines the bounciness of the entity.

---

## Methods

### AddForce(force;Vector3,mode;ForceModeEnum?):nil { method }

Applies a force to the entity.

---
### AddTorque(force;Vector3,mode;ForceModeEnum?):nil { method }

Applies a rotational force to the entity.

---
### AddForceAtPosition(force;Vector3,position;Vector3,mode;ForceModeEnum?):nil { method }

Applies a force to the entity from a specific position.

---
### AddRelativeForce(force;Vector3,mode;ForceModeEnum?):nil { method }

Adds a force to the part relative to its own rotation.

---
### AddRelativeTorque(torque;Vector3,mode;ForceModeEnum?):nil { method }

Adds a rotational force to the part relative to its own rotation.

