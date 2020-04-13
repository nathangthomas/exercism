# Two Sum
# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:
# Given nums = [2, 7, 11, 15], target = 9,
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

def two_sum(nums, target)
    target_indexes = []
    nums.each_with_index do |primary, index|
        nums.each_with_index do |num, i|
            if primary + num == target && index != i
                target_indexes << index
                target_indexes << i
            end
        end
    end
    return target_indexes.uniq
end

# ------------------------------------------------------------------------------
