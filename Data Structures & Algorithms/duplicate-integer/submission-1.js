class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let elementExist = {}
        for (let i = 0; i<= nums.length; i++){
            if(elementExist.hasOwnProperty(nums[i])){
                return true;
            }else{
                elementExist[nums[i]] = 'exist'
            }
        }
        return false;
        // return nums.reduce(function (acc, curr) {
        //     if (elementExist.hasOwnProperty(curr)) {
        //         acc = true
        //     } else {
        //         elementExist[curr] = 'exist'
        //     }
        //     return acc
        // }, false)
    }
}
