local light = script.Parent
local tween = Tween:NewTween()

-- Fade light brightness from 0 to 10
tween:TweenNumber(0, 10, 2, function(value)
    light.Brightness = value
end)

tween.Finished:Wait()
print("Done!")