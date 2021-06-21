def sum_pairs(nums, sum_value):
    seen = set()
    for num in nums:
        diff = sum_value - num
        if diff in seen:
            return [diff, num]
        seen.add(num)

print(sum_pairs([11, 3, 7, 5], 10))