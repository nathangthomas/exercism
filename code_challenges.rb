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

# Fizz Buzz

# Write a program that outputs the string representation of numbers from 1 to n.
#
# But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

def fizz_buzz(n)
    numbers = [*1..n]
    new_array = []
    numbers.map do |num|
        if num % 3 == 0 && num % 5 == 0
            new_array << "FizzBuzz"
        elsif  num % 3 == 0
            new_array << "Fizz"
        elsif num % 5 == 0
            new_array << "Buzz"
        else
          new_array << num.to_s
        end
    end
    return new_array
end

# ------------------------------------------------------------------------------

# Fibanacci Number
#
# The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
# F(0) = 0,   F(1) = 1
# F(N) = F(N - 1) + F(N - 2), for N > 1.
# Given N, calculate F(N).

def fib(n)
    if n == 0 || n == 1
        return n
    else
        fib(n-1) + fib(n-2)
    end
end
