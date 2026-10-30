local part: Part = script.Parent
local tween = Tween:NewTween()

-- Make the part twice as big over 1.5 seconds
tween:TweenSize(part, Vector3.New(4, 4, 4), 1.5)
-- Set the direction
tween:SetDirection(TweenDirection.InOut)
tween.Finished:Wait()
print("Done!")