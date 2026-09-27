local light = script.Parent
local tween = Tween:NewTween()

-- Fade light brightness from 0 to 10
tween:TweenNumber(0, 10, 2, function(value)
    light.Brightness = value
end)
tween:Interval(10) -- waits 10 seconds before starting
tween.Finished:Wait()
print("Done!")