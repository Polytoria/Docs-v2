---
title: Quaternion
description:
icon: polytoria/Quaternion
---

# :polytoria-Quaternion: Quaternion

Represents a quaternion used for rotations.

{{ notnewable() }}


## Properties

### X:number { property }

The X component of the quaternion.

---
### Y:number { property }

The Y component of the quaternion.

---
### Z:number { property }

The Z component of the quaternion.

---
### W:number { property }

The W component of the quaternion.

---
### Identity:Quaternion { property }

The identity rotation.
{{ readonly() }}


---

## Methods

### New():Quaternion { method }

Creates a new Quaternion object with the specified components.

---
### New(x;number,y;number,z;number,w;number):Quaternion { method }

Creates a new Quaternion object with the specified components.

---
### Angle(a;Quaternion,b;Quaternion):Quaternion { method }

Calculates the angle between two quaternions.

---
### AngleAxis(angle;number,axis;Vector3):Quaternion { method }

Creates a rotation which rotates angle degrees around axis.

---
### Dot(a;Quaternion,b;Quaternion):Quaternion { method }

Calculates the dot product of two quaternions.

---
### Euler(x;number,y;number,z;number):Quaternion { method }

Creates a quaternion from Euler angles specified by a Vector3.

---
### Euler(euler;Vector3):Quaternion { method }

Creates a quaternion from Euler angles specified by a Vector3.

---
### ToEuler(euler;Quaternion):Vector3 { method }

Converts a quaternion to Euler angles represented as a Vector3.

---
### FromToRotation(fromDirection;Vector3,toDirection;Vector3):Quaternion { method }

Creates a rotation which rotates angle degrees around axis.

---
### Inverse(rotation;Quaternion):Quaternion { method }

Calculates the inverse of a quaternion.

---
### Lerp(a;Quaternion,b;Quaternion,t;number):Quaternion { method }

Linearly interpolates between two quaternions.

---
### LerpUnclamped(a;Quaternion,b;Quaternion,t;number):Quaternion { method }

Linearly interpolates between two quaternions without clamping the interpolant.

---
### LookRotation(forward;Vector3):Quaternion { method }

Creates a rotation with the specified forward and upwards directions.

---
### LookRotation(forward;Vector3,upwards;Vector3):Quaternion { method }

Creates a rotation with the specified forward and upwards directions.

---
### Normalize(quaternion;Quaternion):Quaternion { method }

Normalizes the given quaternion.

---
### RotateTowards(from;Quaternion,to;Quaternion,maxDegreesDelta;number):Quaternion { method }

Rotates a rotation from towards to by maxDegreesDelta.

---
### Slerp(a;Quaternion,b;Quaternion,t;number):Quaternion { method }

Spherically interpolates between two quaternions.

---
### SlerpUnclamped(a;Quaternion,b;Quaternion,t;number):Quaternion { method }

Spherically interpolates between two quaternions without clamping the interpolant.

