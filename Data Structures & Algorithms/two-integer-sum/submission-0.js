class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i<nums.length; i++){
            let diff = target-nums[i]
            nums[i]="hi";
            if(nums.includes(diff)){
                let idx = nums.indexOf(diff)
                return [i,idx]
            }
        }
    }
}
