class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        leng = len(nums)
        if leng == 0 or leng == 1:
            return leng
        
        j = 0;
        
        for i in range(0, leng - 1):
            if(nums[i] != nums[i+1]):
                
                nums[j] = nums[i]
                j+=1
               
        nums[j] = nums[leng - 1]
        j+=1 
        return j