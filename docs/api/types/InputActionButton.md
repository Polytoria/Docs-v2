---
title: InputActionButton
description:
icon: polytoria/Unknown
---

# InputActionButton

{{ inherits("InputAction") }}

InputActionButton is a class that represents input action of button type.

{{ notnewable() }}


## Properties

### Buttons:InputButtonCollection { property }

Collection of button inputs.
{{ readonly() }}


---
### IsPressed:boolean { property }

Returns true if any of the button in the collection is currently being pressed.

---
### Weight:number { property }

Returns the current analog input of the button.

---

## Events

### Pressed() { event }

Fires when this button has been pressed

---
### Released() { event }

Fires when this button has been released

