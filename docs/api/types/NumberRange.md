---
title: NumberRange
description:
icon: polytoria/NumberRange
---

# :polytoria-NumberRange: NumberRange

NumberRange is a data type that represents a range between two numbers, defined by a minimum and maximum value.

{{ notnewable() }}


## Properties

### Min:number { property }

Determines the minimum value of the range.

---
### Max:number { property }

Determines the maximum value of the range.

---

## Methods

### New(from;number,to;number):NumberRange { method }

Creates a new NumberRange object with the specified minimum and maximum values.

---
### Lerp(t;number):number { method }

Linearly interpolates between the minimum and maximum values of the range based on the parameter t, which is typically between 0 and 1.

