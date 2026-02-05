---
title: Dynamic
description:
icon: polytoria/Dynamic
---

# :polytoria-Dynamic: Dynamic

{{ inherits("Instance") }}

Dynamic is the base class where all objects with a position, rotation and scale derive from.


## Properties

### Position:Vector3 { property }

The position of the object.

---
### Rotation:Vector3 { property }

The rotation of the object.

---
### Size:Vector3 { property }

The size of the object.

---
### LocalPosition:Vector3 { property }

The position of the object relative to its parent.

---
### LocalRotation:Vector3 { property }

The rotation of the object relative to its parent.

---
### LocalSize:Vector3 { property }

The size of the object relative to its parent.

---
### Quaternion:Quaternion { property }

The rotation of the object represented as a quaternion.

---
### LocalQuaternion:Quaternion { property }

The local rotation of the object represented as a quaternion.

---
### Locked:boolean { property }

Determines whether the object can be selected in the Creator.

---
### Forward:Vector3 { property }

The forward direction vector of the object.
{{ readonly() }}


---
### Right:Vector3 { property }

The right direction vector of the object.
{{ readonly() }}


---
### Up:Vector3 { property }

The up direction vector of the object.
{{ readonly() }}


---

## Methods

### LookAt(target;any):nil { method }

Orients the object to look at a target with a specified up vector.

---
### LookAt(target;any,up;Vector3):nil { method }

Orients the object to look at a target with a specified up vector.

---
### Translate(translation;Vector3):nil { method }

Moves the transform in the direction and distance of translation.

---
### RotateAround(point;Vector3,axis;Vector3,angle;number):nil { method }

Rotates the object around a point by the specified Euler angles.

---
### Rotate(eulerAngles;Vector3):nil { method }

Rotates the object by the specified Euler angles.

---
### GetBounds():Bounds { method }

Gets the bounding box of the object.

