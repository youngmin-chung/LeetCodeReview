# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        low = 1
        high = n

        while low <= high:
            mid = math.floor((low + high) / 2)
            if isBadVersion(mid) == True:
                result = mid
                high = mid - 1
            else:
                low = mid + 1
        return result
    
    
    def search(nums, target):
        start = 0
        end = len(nums) - 1
        while start <= end:
            m = math.floor(start+end) / 2
            if(nums[m] < target):
                start = m + 1
            elif (nums[m] > target):
                end = m - 1
            else: 
                return m
        return -1
        