class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        for(let i of nums){
            freqMap.set(i, (freqMap.get(i)||0)+1);
        }
        const entries = [...freqMap.entries()]
        return entries.sort((a,b)=>b[1]-a[1]).slice(0,k).map(entry=>entry[0])
    }
}
