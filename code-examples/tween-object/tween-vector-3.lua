local part: Part = script.Parent
local tween = Tween:NewTween()

-- Change the values of the vector3 from 1,1,1 to 4,4,4 over 1.5 seconds
tween:TweenVector2(Vector2.New(1, 1, 1), Vector3.New(4, 4, 4), 1.5, function(value)
    part.Position = value
end)
tween.Finished:Wait()
print("Done!")