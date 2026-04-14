class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let subMap = new Map()
        for(let i = 0; i< nums.length; i++){
            if(subMap.has(nums[i])){
                return[subMap.get(nums[i]), i]
            }else{
                console.log(subMap)
                subMap.set(target-nums[i], i)
            }
        }
        return [];
    }
}
