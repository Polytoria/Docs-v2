local hasAchievement = false

-- Remember to use pcall as this method can fail
local success, errormessage = pcall(function()
    hasAchievement = Achievements:HasAchievementAsync(123213, 123456)
end)