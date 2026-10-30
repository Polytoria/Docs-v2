local uiview: UIView = script.Parent
local tween = Tween:NewTween()

-- Change the values of the vector2 from 1,1 to 696969,696969 over 1.5 seconds
tween:TweenVector2(Vector2.New(1, 1), Vector2.New(696969, 696969), 1.5, function(value)
    uiview.SizeOffset = value
end)
tween.Finished:Wait()
print("Done!")