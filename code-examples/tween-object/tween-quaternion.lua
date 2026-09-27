local quaternionvalue = script.Parent
local tween = Tween:NewTween()

-- tween the value of quaternionvalue between 2 quaternions over 2 seconds.
tween:TweenQuaternion(Quaternion.New(4, 5, 6, 7), Quaternion.New(1, 3, 2, 1), 2, function(value)
    quaternionvalue.value = value
end)
tween.Finished:Wait()
print("Done!")