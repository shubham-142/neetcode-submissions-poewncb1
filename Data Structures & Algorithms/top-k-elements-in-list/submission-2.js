class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = {}
        for (let i = 0; i < nums.length; i++) {
            if (!res[nums[i]]) {
                res[nums[i]] = 0
            }
            res[nums[i]] += 1
        }
        const entries = Object.entries(res);
        entries.sort((a, b) => b[1] - a[1]);
        return entries.slice(0, k).map(entry => entry[0]);
    }
}
