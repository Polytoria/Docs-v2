---
title: UIField
description:
icon: polytoria/UIField
---

# :polytoria-UIField: UIField

{{ inherits("Instance") }}

UIField is the abstract base class of all UI classes.


## Properties

### PositionOffset:Vector2 { property }

The offset of the UI element in pixels.

---
### PositionRelative:Vector2 { property }

The position of the UI element relative to its parent.

---
### Rotation:number { property }

The rotation of the UI element in degrees.

---
### SizeOffset:Vector2 { property }

The size offset of the UI element in pixels.

---
### SizeRelative:Vector2 { property }

The size of the UI element relative to its parent.

---
### ClipDescendants:boolean { property }

Determines whether the UI element clips its descendants.

---
### PivotPoint:Vector2 { property }

The pivot point of the UI element.

---
### Scale:Vector2 { property }

The scale of the UI element.

---
### Visible:boolean { property }

Determines whether the UI element is visible.

---
### MaskMode:MaskModeEnum { property }

Determines the mask mode of the UI element.

---
### IgnoreMouse:boolean { property }

Determines if the UI field should be ignored by mouse input

---
### ZIndex:number { property }

Determines the ZIndex value of this UI field.

---
### AbsolutePosition:Vector2 { property }

The absolute position of the UI element in pixels.
{{ readonly() }}


---
### AbsoluteSize:Vector2 { property }

The absolute size of the UI element in pixels.
{{ readonly() }}


---
### IsVisibleInTree:boolean { property }

Indicates whether the UI element is visible in the UI hierarchy.
{{ readonly() }}


---

## Events

### MouseEnter() { event }

Fires when user's cursor hovers on this UI

---
### MouseExit() { event }

Fires when user's cursor leaves this UI

---
### MouseDown() { event }

Fires when user hold down mouse on this UI

---
### MouseUp() { event }

Fires when user release mouse on this UI

---
### TransformChanged() { event }

Fires when this UI transform has been changed

---
### VisibilityChanged() { event }

Fires when this UI visibility has been changed

