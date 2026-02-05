---
title: Color
description:
icon: polytoria/Color
---

# :polytoria-Color: Color

Color is a data type that represents a color.
  
  The alpha property is between 0 and 1. 0 is fully transparent and 1 is fully visible.

{{ notnewable() }}


## Properties

### R:number { property }

Red color component

---
### G:number { property }

Green color component

---
### B:number { property }

Blue color component

---
### A:number { property }

Alpha (opacity) color component

---

## Methods

### New():Color { method }

Creates a new Color with the set R, G, B and A values

---
### New(d;number):Color { method }

Creates a new Color with the set R, G, B and A values

---
### New(r;number,g;number,b;number):Color { method }

Creates a new Color with the set R, G, B and A values

---
### New(r;number,g;number,b;number,a;number):Color { method }

Creates a new Color with the set R, G, B and A values

---
### Random():Color { method }

Returns a random color with an alpha value of 1.

---
### FromHex(hex;string):Color { method }

Creates a new Color from the specified hex value.

---
### Lerp(a;Color,b;Color,t;number):Color { method }

Linearly interpolates colors a and b by t.

