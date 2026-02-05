---
title: Camera
description:
icon: polytoria/Camera
---

# :polytoria-Camera: Camera

{{ inherits("Dynamic") }}

Camera is a class that represents the local player's camera.


## Properties

### Mode:CameraModeEnum { property }

Determines or returns the camera's current mode.

---
### FOV:number { property }

Determines or returns the camera's field of view.

---
### ClipThroughWalls:boolean { property }

Determines whether or not the camera should clip through walls.

---
### MinDistance:number { property }

The camera's minimum distance from the target in Follow mode.

---
### MaxDistance:number { property }

Determines camera's maximum distance from the target in Follow mode.

---
### Distance:number { property }

Determines the distance between the camera and the target when the camera is in Follow mode.

---
### ScrollSensitivity:number { property }

Determines the scroll move speed of the camera.

---
### Orthographic:boolean { property }

Determines whether or not the camera should render in orthographic (2D) mode or not (3D).

---
### FollowLerp:boolean { property }

Determines whether or not to use lerping in Follow mode.

---
### LerpSpeed:number { property }

Determines the lerp speed of the camera when lerping is enabled.

---
### OrthographicSize:number { property }

Determines the half-size of the camera when in orthographic mode.

---
### PositionOffset:Vector3 { property }

Determines the camera's offset from its position.

---
### RotationOffset:Vector3 { property }

Determines the camera's offset from its rotation.

---
### IsFirstPerson:boolean { property }

Returns whether or not the camera is in first person.
{{ readonly() }}


---
### CanLock:boolean { property }

Determine if camera can be ctrl locked.

---
### SensitivityMultiplier:number { property }

Multipler for camera sensitivity

---
### Sensitivity:number { property }

Current sensitivity of the camera
{{ readonly() }}


---
### HorizontalSpeed:number { property }

Determines the horizontal movement speed of the camera in Follow mode.

---
### VerticalSpeed:number { property }

Determines the vertical move speed of the camera.

---
### ScrollLerpSpeed:number { property }

Determines the lerp amount when scrolling

---
### CtrlLocked:boolean { property }

Determine if camera is in Ctrl lock mode

---
### AlwaysLocked:boolean { property }

Determine if camera should always be in locked mode

---
### Target:Dynamic { property }

The target of Follow mode

---

## Methods

### ViewportPointToRay(pos;Vector2,ignoreList;{ Instance }?,maxDistance;number?):RayResult { method }

Cast a ray from the camera at the specified ViewportPoint (Vector3 with components with values in range of 0 - 1 describing how far a point is to to right and to the top of the screen) into the game's Environment

---
### ScreenPointToRay(pos;Vector2,ignoreList;{ Instance }?,maxDistance;number?):RayResult { method }

Cast a ray from the camera at screen point into the game's Environment

---
### ViewportToScreenPoint(pos;Vector2):Vector2 { method }

Transforms `pos` from viewport space into screen space.

---
### ViewportToWorldPoint(pos;Vector2):Vector3 { method }

Transforms `pos` from viewport space into Environment space.

---
### WorldToViewportPoint(pos;Vector3):Vector2 { method }

Transforms `pos` from Environment space into viewport space.

---
### WorldToScreenPoint(pos;Vector3):Vector2 { method }

Transforms `pos` from Environment space into screen space.

---
### ScreenToViewportPoint(pos;Vector2):Vector2 { method }

Transforms `pos` from screen space into viewport space.

---
### ScreenToWorldPoint(pos;Vector2):Vector3 { method }

Transforms `pos` from screen space into Environment space.

---

## Events

### FirstPersonEntered() { event }

Fires when camera has entered first person

---
### FirstPersonExited() { event }

Fires when camera has exited first person

