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

There are a few methods to running tweens after another.


### Using Separate TweenObjects
This approach is very straightforward; after the first tween finishes, create a second one!
Using the `Finished` event, we can wait until the first tween finishes and then create a new one after.

This method is best if you want to run code in between each step of the tween.

```lua
local part: Part = script.Parent
local startPos = part.Position
local endPos = part.Position + Vector3.New(0, 5, 0)

-- Move up
local tween = Tween:NewTween()
tween:TweenPosition(part, endPos, 1)

-- Wait for the first movement to finish
tween.Finished:Wait()

print("Halfway done!")

-- Then move back down
tween = Tween:NewTween()
tween:TweenPosition(part, startPos, 1)

tween.Finished:Wait()
print("Done!")
```

### Using the `Chain` Method
This approach uses `Chain` to run a second tween after the first tween finishes, on the same TweenObject.

This method is best if you want to treat everything as one TweenObject.
`Finished` will only run once, when all tweens are done.

```lua
wait(5)
local part: Part = script.Parent
local startPos = part.Position
local endPos = part.Position + Vector3.New(0, 5, 0)

-- Move up
local tween = Tween:NewTween()
tween:TweenVector3(startPos, endPos, 1, function(v)
	part.Position = v
end)

-- Everything after this call will automatically run after the first TweenVector3 finishes
-- We don't have to manually wait for Finished
tween:Chain()

-- Then move back down
tween:TweenVector3(endPos, startPos, 1, function(v)
	part.Position = v
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
