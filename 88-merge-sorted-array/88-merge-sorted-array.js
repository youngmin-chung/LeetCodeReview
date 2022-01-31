/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    for(var i = m, j = 0; i < nums1.length, j < n; i++, j++){
        
        nums1.splice(i,1, nums2[j]);
    }
    console.log(nums1)
    
    
   let sorted = false;
    let temp;
    while(!sorted){
        sorted = true;
        for(var i = 0; i < nums1.length - 1; i++){
            if(nums1[i]>nums1[i+1]){
                temp = nums1[i];
                nums1[i] = nums1[i+1];
                nums1[i+1] = temp;
                sorted = false;
            }
        }
    }   
}