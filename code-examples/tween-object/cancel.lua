local light = script.Parent
local tween1 = Tween:NewTween()
local tween2 = Tween:NewTween()

-- Fade light brightness from 0 to 10
tween:TweenNumber(0, 10, 2, function(value)
    light.Brightness = value
end)
tween:Cancel(true) -- true fired tween.Finished
tween.Finished:Wait()
print("Done!")