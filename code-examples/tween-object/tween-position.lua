local part: Part = script.Parent
local tween = Tween:NewTween()

-- Move the part up by 10 units over 2 seconds
tween:TweenPosition(part, part.Position + Vector3.New(0, 10, 0), 2)
tween.Finished:Wait()
print("Done!")