local part: Part = script.Parent
local tween = Tween:NewTween()

-- Rotate the part 90 degrees on the Y axis over 1 second
tween:TweenRotation(part, Vector3.New(0, 90, 0), 1)
tween.Finished:Wait()
print("Done!")