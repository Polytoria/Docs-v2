local part: Part = script.Parent
local tween = Tween:NewTween()

-- Change the part's color from red to green over 2 seconds
tween:TweenColor(Color.New(1, 0, 0), Color.New(0, 1, 0), 2, function(color)
    part.Color = color
end)

tween.Finished:Wait()
print("Done!")