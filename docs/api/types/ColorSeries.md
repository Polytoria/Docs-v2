---
title: ColorSeries
description:
icon: polytoria/ColorSeries
---

# :polytoria-ColorSeries: ColorSeries

Color series is a data type that represents a collection of color and points, also known as gradient.

{{ notnewable() }}


## Properties

### PointCount:number { property }

Returns the point count of this color series
{{ readonly() }}


---

## Methods

### New():ColorSeries { method }

Create color series by this color range

---
### New(min;Color,max;Color):ColorSeries { method }

Create color series by this color range

---
### Clear():nil { method }

Clear this ColorSeries

---
### SetColor(point;number,color;Color):nil { method }

Sets the color at the specified point in the color series.

---
### RemovePoint(point;number):nil { method }

Removes the point at the specified index from the color series.

---
### GetOffsets():{ number } { method }

Get all offsets

---
### GetColors():{ Color } { method }

Get all colors

---
### SetOffset(point;number,offset;number):nil { method }

Sets the offset at the specified point in the color series.

---
### GetColor(point;number):Color { method }

Gets the color at the specified point in the color series.

---
### GetOffset(point;number):number { method }

Gets the offset at the specified point in the color series.

---
### AddPoint(offset;number,color;Color):number { method }

Add color point to the series with offset

---
### Lerp(t;number):Color { method }

Interpolates between colors in the series based on the parameter t.

