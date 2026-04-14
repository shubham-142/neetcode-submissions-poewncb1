class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for (const i of nums){
            freqMap.set(i, (freqMap.get(i) || 0)+1)
        }
        
        return([...freqMap.entries()]
        .sort((a,b)=>b[1]-a[1])
        .map(([key])=>key)
        .splice(0,(k)))

    }

}
