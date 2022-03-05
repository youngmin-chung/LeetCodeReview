/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = mostFrequent(nums, nums.length);
    return res;
};

var mostFrequent = function(arr, n){
           
        // Sort the array
        arr.sort();
           
        // find the max frequency using linear
        // traversal
        let max_count = 1, res = arr[0];
        let curr_count = 1;
           
        for (let i = 1; i < n; i++)
        {
            if (arr[i] == arr[i - 1])
                curr_count++;
            else
            {
                if (curr_count > max_count)
                {
                    max_count = curr_count;
                    res = arr[i - 1];
                }
                curr_count = 1;
            }
        }
       
        // If last element is most frequent
        if (curr_count > max_count)
        {
            max_count = curr_count;
            res = arr[n - 1];
        }
        return res;
}