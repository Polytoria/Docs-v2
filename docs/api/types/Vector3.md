---
title: Vector3
description:
icon: polytoria/Vector3
---

# :polytoria-Vector3: Vector3

Vector3 is a 3D vector with an x, y and z component.

{{ notnewable() }}


## Properties

### X:number { property }

The X component of the vector.

---
### Y:number { property }

The Y component of the vector.

---
### Z:number { property }

The Z component of the vector.

---
### Forward:Vector3 { property }

Shorthand for Vector3.New(0, 0, -1).
{{ readonly() }}


---
### Back:Vector3 { property }

Shorthand for Vector3.New(0, 0, 1).
{{ readonly() }}


---
### Down:Vector3 { property }

Shorthand for Vector3.New(0, -1, 0).
{{ readonly() }}


---
### Left:Vector3 { property }

Shorthand for Vector3.New(-1, 0, 0).
{{ readonly() }}


---
### One:Vector3 { property }

Shorthand for Vector3.New(1, 1, 1).
{{ readonly() }}


---
### Zero:Vector3 { property }

Shorthand for Vector3.New(0, 0, 0).
{{ readonly() }}


---
### Right:Vector3 { property }

Shorthand for Vector3.New(1, 0, 0).
{{ readonly() }}


---
### Up:Vector3 { property }

Shorthand for Vector3.New(0, 1, 0).
{{ readonly() }}


---
### Magnitude:number { property }

The length of the vector.
{{ readonly() }}


---
### Normalized:Vector3 { property }

The normalized version of the vector.
{{ readonly() }}


---
### SqrMagnitude:number { property }

The squared length of the vector.
{{ readonly() }}


---

## Methods

### New():Vector3 { method }

Returns a new Vector3 with the given Vector2 components and a z component of 0.

---
### New(d;number):Vector3 { method }

Returns a new Vector3 with the given Vector2 components and a z component of 0.

---
### New(x;number,y;number):Vector3 { method }

Returns a new Vector3 with the given Vector2 components and a z component of 0.

---
### New(x;number,y;number,z;number):Vector3 { method }

Returns a new Vector3 with the given Vector2 components and a z component of 0.

---
### New(v;Vector2):Vector3 { method }

Returns a new Vector3 with the given Vector2 components and a z component of 0.

---
### Angle(from;Vector3,to;Vector3):number { method }

Returns the angle in degrees between from and to.

---
### Cross(lhs;Vector3,rhs;Vector3):Vector3 { method }

Returns the cross product of lhs and rhs.

---
### Distance(a;Vector3,b;Vector3):number { method }

Returns the distance between a and b.

---
### Dot(lhs;Vector3,rhs;Vector3):number { method }

Returns the dot product of lhs and rhs.

---
### Lerp(a;Vector3,b;Vector3,t;number):Vector3 { method }

Returns a new Vector3 that is the linear interpolation between a and b by t.

---
### Max(lhs;Vector3,rhs;Vector3):Vector3 { method }

Returns a vector that is made from the largest components of two vectors.

---
### Min(lhs;Vector3,rhs;Vector3):Vector3 { method }

Returns a vector that is made from the smallest components of two vectors.

---
### MoveTowards(current;Vector3,target;Vector3,maxDistanceDelta;number):Vector3 { method }

Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.

---
### Normalize(value;Vector3):Vector3 { method }

Returns a new Vector3 that is the normalized version of the given vector.

---
### Project(vector;Vector3,onNormal;Vector3):Vector3 { method }

Returns the projection of a vector onto another vector.

---
### Reflect(inDirection;Vector3,inNormal;Vector3):Vector3 { method }

Returns the reflection of a vector off the plane defined by a normal.

---
### SignedAngle(from;Vector3,to;Vector3,axis;Vector3):number { method }

Returns the signed angle in degrees between from and to.

---
### Slerp(a;Vector3,b;Vector3,t;number):Vector3 { method }

Spherically interpolates between two vectors.

