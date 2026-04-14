class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let elementExist = {}
        return nums.reduce(function (acc, curr) {
            if (elementExist.hasOwnProperty(curr)) {
                acc = true
            } else {
                elementExist[curr] = 'exist'
            }
            return acc
        }, false)
    }
}
