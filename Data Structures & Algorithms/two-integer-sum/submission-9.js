class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let freq = new Map();

        for(let i = 0; i<nums.length; i++){
            let rem = target-nums[i];
            if(freq.has(rem)) return [i, freq.get(rem)];
            else freq.set(nums[i],i)
        }
        return[];
    }
}
