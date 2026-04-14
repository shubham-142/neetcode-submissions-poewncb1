class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let i of nums){
            map.set(i, (map.get(i)||0)+1)
        }
        return([...map.entries()]
        .sort((a,b)=>b[1]-a[1])
        .map(([key])=>key)
        .splice(0,(k)))
    }
}
