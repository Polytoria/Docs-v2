---
title: Tweening
description: Tutorial, Tweens.
weight: -2
---

# Tweening

Tweens let you animate properties over time instead of changing them instantly. You create a `TweenObject` and tell it what to animate.

> **Note:** Tweens automatically start playing on the next frame, so calling `tween:Play()` is not required.

---

## 1. Moving a Part

The simplest tween moves a part to a new position.

```lua
local part: Part = script.Parent
local tween = Tween:NewTween()

-- Move the part up by 10 units over 2 seconds
tween:TweenPosition(part, part.Position + Vector3.New(0, 10, 0), 2)
tween.Finished:Wait()
print("Done!")
```

`TweenPosition` takes three arguments: the part to move, the destination position, and how long it should take in seconds.

---

## 2. Rotating a Part

You can also tween rotation.

```lua
local part: Part = script.Parent
local tween = Tween:NewTween()

-- Rotate the part 90 degrees on the Y axis over 1 second
tween:TweenRotation(part, Vector3.New(0, 90, 0), 1)
tween.Finished:Wait()
print("Done!")
```

---

## 3. Changing Size

Tween size to grow or shrink a part.

```lua
local part: Part = script.Parent
local tween = Tween:NewTween()

-- Make the part twice as big over 1.5 seconds
tween:TweenSize(part, Vector3.New(4, 4, 4), 1.5)
tween.Finished:Wait()
print("Done!")
```

---

## 4. Changing Color

Some tweens use a callback so you can apply the value yourself. `TweenColor` gives you the new color every frame.

```lua
local part: Part = script.Parent
local tween = Tween:NewTween()

-- Change the part's color from red to green over 2 seconds
tween:TweenColor(Color.New(1, 0, 0), Color.New(0, 1, 0), 2, function(color)
    part.Color = color
end)

tween.Finished:Wait()
print("Done!")
```

---

## 5. Easing

By default tweens move at a constant speed. You can make them ease in, ease out, or both using `SetTrans` and `SetDirection`.

```lua
local part: Part = script.Parent
local tween = Tween:NewTween()

-- Smooth start and stop with Sine easing
tween:SetTrans(Enums.TweenTransition.Sine)
tween:SetDirection(Enums.TweenDirection.InOut)

tween:TweenPosition(part, part.Position + Vector3.New(0, 10, 0), 2)
tween.Finished:Wait()
print("Done!")
```

---

## 6. Looping

Set `Looped = true` to make a tween repeat forever. Call `Stop()` when you want it to end.

```lua
local part: Part = script.Parent
local tween = Tween:NewTween()

-- Loop the tween forever
tween.Looped = true

tween:TweenPosition(part, part.Position + Vector3.New(0, 5, 0), 1)

-- Let it loop for 5 seconds
wait(5)
tween:Stop()

print("Done!")
```

---

## 7. Chaining Tweens

You can run multiple tweens one after another by waiting for the `Finished` event, then reusing the same tween object.

```lua
local part: Part = script.Parent
local startPos = part.Position
local tween = Tween:NewTween()

-- Move up
tween:TweenVector3(startPos, startPos + Vector3.New(0, 5, 0), 1, function(val)
    part.Position = val
end)
tween.Finished:Wait()

-- Move back down
tween:Stop()
tween:TweenVector3(part.Position, startPos, 1, function(val)
    part.Position = val
end)
tween.Finished:Wait()
print("Done!")
```

---

## 8. Custom Values with Callbacks

Use `TweenNumber` to animate any number value, like light brightness or a health bar.

```lua
local light = script.Parent
local tween = Tween:NewTween()

-- Fade light brightness from 0 to 10
tween:TweenNumber(0, 10, 2, function(value)
    light.Brightness = value
end)

tween.Finished:Wait()
print("Done!")
```

---
