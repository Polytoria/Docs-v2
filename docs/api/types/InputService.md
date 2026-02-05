---
title: InputService
description:
icon: polytoria/InputService
---

# :polytoria-InputService: InputService

{{ inherits("Instance") }}

InputService is a class used for retrieving user input data, such as the mouse and keyboard.


{{ staticclass("Input") }}

{{ clientexclusive() }}

{{ notnewable() }}


## Properties

### IsWindowFocused:boolean { property }

Indicates whether the game window is currently focused.
{{ readonly() }}


---
### IsTouchscreen:boolean { property }

Indicates whether the input device is a touchscreen.
{{ readonly() }}


---
### IsGameFocused:boolean { property }

Indicates whether the game is currently focused.
{{ readonly() }}


---
### IsInputFocused:boolean { property }

Indicates whether an input is currently focused.
{{ readonly() }}


---
### IsGamepadConnected:boolean { property }

Indicates whether a gamepad is currently connected.
{{ readonly() }}


---
### IsMenuOpened:boolean { property }

Indicates whether the game menu is currently opened.
{{ readonly() }}


---
### CursorLocked:boolean { property }

Determines whether the cursor is currently locked.

---
### CursorVisible:boolean { property }

Determines whether the cursor is currently visible.

---
### MousePosition:Vector2 { property }

Indicates the current position of the mouse cursor.
{{ readonly() }}


---
### ScreenWidth:number { property }

Indicates the width of the screen.
{{ readonly() }}


---
### ScreenHeight:number { property }

Indicates the height of the screen.
{{ readonly() }}


---

## Methods

### GetMouseWorldPosition(ignoreList;{ Instance }?):Vector3 { method }

Returns the 3D world-space position corresponding to the current mouse cursor location.

---
### GetVector2(actionName;string):InputActionVector2 { method }

Returns the current Vector2 value of the action.

---
### GetButton(actionName;string):InputActionButton { method }

Returns true if the specified button is being held down.

---
### GetAxis(actionName;string):InputActionAxis { method }

Returns the value of the specified axis.

---
### BindButton(name;string):InputActionButton { method }

Bind new Button Input Action

---
### BindAxis(name;string):InputActionAxis { method }

Bind new Axis Input Action

---
### BindVector2(name;string):InputActionVector2 { method }

Bind new Vector2 Input Action

---

## Events

### GameFocused() { event }

Fires when the game has been focused

---
### GameUnfocused() { event }

Fires when the game has been unfocused

---
### GamepadConnected() { event }

Fires when gamepad is connected

---
### GamepadDisconnected() { event }

Fires when gamepad has been disconnected

---
### KeyDown(keycode;KeyCodeEnum,gameFocused;boolean) { event }

Fires when key has been pressed

---
### KeyUp(keycode;KeyCodeEnum,gameFocused;boolean) { event }

Fires when key has been released

---
### AxisValueChanged(keycode;KeyCodeEnum,value;float) { event }

Fires when analog input has been changed

