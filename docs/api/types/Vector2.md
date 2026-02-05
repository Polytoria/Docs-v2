---
title: Vector2
description:
icon: polytoria/Vector2
---

# :polytoria-Vector2: Vector2

Vector2 is a 2D vector with an x and y component.

{{ notnewable() }}


## Properties

### X:number { property }

The X component of the vector.

---
### Y:number { property }

The Y component of the vector.

---
### Down:Vector2 { property }

Shorthand for Vector2.New(0, -1).
{{ readonly() }}


---
### Left:Vector2 { property }

Shorthand for Vector2.New(-1, 0).
{{ readonly() }}


---
### One:Vector2 { property }

Shorthand for Vector2.New(1, 1).
{{ readonly() }}


---
### Zero:Vector2 { property }

Shorthand for Vector2.New(0, 0).
{{ readonly() }}


---
### Right:Vector2 { property }

Shorthand for Vector2.New(1, 0).
{{ readonly() }}


---
### Up:Vector2 { property }

Shorthand for Vector2.New(0, 1).
{{ readonly() }}


---
### Magnitude:number { property }

The length of the vector.
{{ readonly() }}


---
### Normalized:Vector2 { property }

The normalized version of the vector.
{{ readonly() }}


---
### SqrMagnitude:number { property }

The squared length of the vector.
{{ readonly() }}


---

## Methods

### New():Vector2 { method }

Returns a new Vector2 with the given x and y components.

---
### New(d;number):Vector2 { method }

Returns a new Vector2 with the given x and y components.

---
### New(x;number,y;number):Vector2 { method }

Returns a new Vector2 with the given x and y components.

---
### Angle(from;Vector2,to;Vector2):number { method }

Returns the angle in degrees between from and to.

---
### Cross(lhs;Vector2,rhs;Vector2):Vector2 { method }

Returns the cross product of lhs and rhs.

---
### Distance(a;Vector2,b;Vector2):number { method }

Returns the distance between a and b.

---
### Dot(lhs;Vector2,rhs;Vector2):number { method }

Returns the dot product of lhs and rhs.

---
### Lerp(a;Vector2,b;Vector2,t;number):Vector2 { method }

Returns a new vector that is the linear interpolation between a and b by t.

---
### Max(lhs;Vector2,rhs;Vector2):Vector2 { method }

Returns a vector that is made from the largest components of two vectors.

---
### Min(lhs;Vector2,rhs;Vector2):Vector2 { method }

Returns a vector that is made from the smallest components of two vectors.

---
### MoveTowards(current;Vector2,target;Vector2,maxDistanceDelta;number):Vector2 { method }

Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.

---
### Normalize(value;Vector2):Vector2 { method }

Returns a new Vector2 that is the normalized version of the given vector.

---
### Project(vector;Vector2,onNormal;Vector2):Vector2 { method }

Returns the projection of a vector onto another vector.

---
### Reflect(inDirection;Vector2,inNormal;Vector2):Vector2 { method }

Returns the reflection of a vector off the plane defined by a normal.

---
### Slerp(a;Vector2,b;Vector2,t;number):Vector2 { method }

Spherically interpolates between two vectors.

