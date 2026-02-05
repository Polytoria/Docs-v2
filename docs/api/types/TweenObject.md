---
title: TweenObject
description:
icon: polytoria/Unknown
---

# TweenObject

An object that represents tween

{{ notnewable() }}


## Properties

### Looped:boolean { property }

Determines if this tween is looped

---
### Parallel:boolean { property }

Determines if this tween will run all the tweens in parallel

---
### SpeedScale:number { property }

Determines the speed scale of this tween

---
### IsRunning:boolean { property }

Returns whether or not this tween is running
{{ readonly() }}


---
### ElapsedTime:number { property }

Returns the elapsed time of this tween
{{ readonly() }}


---

## Methods

### SetDirection(dir;TweenDirectionEnum):TweenObject { method }

Set the direction of this tween. This function returns a `TweenObject` which means you can stack it with other functions.

---
### SetTrans(trans;TweenTransitionEnum):TweenObject { method }

Set the transition of this tween. This function returns a `TweenObject` which means you can stack it with other functions.

---
### TweenPosition(target;Dynamic,destination;Vector3,time;number):nil { method }

Tweens the position of a Dynamic.

---
### TweenRotation(target;Dynamic,destination;Vector3,time;number):nil { method }

Tweens the rotation of a Dynamic.

---
### TweenSize(target;Dynamic,destination;Vector3,time;number):nil { method }

Tweens the size of a Dynamic.

---
### TweenColor(from;Color,to;Color,time;number,callback;function):nil { method }

Tweens a color between two specified values.

---
### TweenNumber(from;number,to;number,time;number,callback;function):nil { method }

Tweens a number between two specified values.

---
### TweenVector2(from;Vector2,to;Vector2,time;number,callback;function):nil { method }

Tweens a Vector2 between two specified values.

---
### TweenVector3(from;Vector3,to;Vector3,time;number,callback;function):nil { method }

Tweens a Vector3 between two specified values.

---
### TweenQuaternion(from;Quaternion,to;Quaternion,time;number,callback;function):nil { method }

Tweens a Quaternion between two specified values.

---
### Play():nil { method }

Play this tween

---
### Pause():nil { method }

Pause this tween

---
### Stop():nil { method }

Stop this tween

---
### Interval(sec;number):nil { method }

Creates a delay in the tween.

---
### Chain():TweenObject { method }

Chain a tween if parallel is set to true

---
### Cancel(callFinsihed;boolean?):nil { method }

Cancel this tween

---

## Events

### Finished() { event }

Fires when this tween has finished

---
### Canceled() { event }

Fires when this tween has been canceled

