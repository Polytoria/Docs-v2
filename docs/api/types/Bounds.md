---
title: Bounds
description:
icon: polytoria/Bounds
---

# :polytoria-Bounds: Bounds

Represents a bounding box in 3D space.

{{ notnewable() }}


## Properties

### Center:Vector3 { property }

Indicates the center point of the bounds.
{{ readonly() }}


---
### Size:Vector3 { property }

Determines the size of the bounds.

---
### Extents:Vector3 { property }

Indicates the extents of the bounds.
{{ readonly() }}


---
### Start:Vector3 { property }

The origin point
{{ readonly() }}


---
### End:Vector3 { property }

The ending point
{{ readonly() }}


---
### Volume:number { property }

Indicates the volume of the bounds.
{{ readonly() }}


---

## Methods

### New():Bounds { method }

Creates a new Bounds object with the specified position and size.

---
### New(position;Vector3,size;Vector3):Bounds { method }

Creates a new Bounds object with the specified position and size.

---
### ClosestPoint(bounds;Bounds,point;Vector3):Vector3 { method }

Calculates the closest point on the bounds to the specified point.

---
### Contains(bounds;Bounds,point;Vector3):boolean { method }

Returns whether the bounds contain the specified point.

---
### Encapsulate(bounds;Bounds,point;Vector3):Bounds { method }

Expands the bounds by the specified amount.

---
### Expand(bounds;Bounds,amount;number):Bounds { method }

Expands the bounds by the specified amount.

---
### Intersects(bounds;Bounds,other;Bounds):boolean { method }

Determines whether the bounds intersect with another bounds.

---
### SetMinMax(bounds;Bounds,min;Vector3,max;Vector3):Bounds { method }

Sets the minimum and maximum points of the bounds.

---
### Distance(bounds;Bounds,point;Vector3):number { method }

Calculates the distance from the bounds to the specified point.

---
### SqrDistance(bounds;Bounds,point;Vector3):number { method }

Calculates the squared distance from the bounds to the specified point.

