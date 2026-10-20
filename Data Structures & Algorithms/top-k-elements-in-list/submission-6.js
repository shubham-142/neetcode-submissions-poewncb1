class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        const result = [];
        for(let i of nums){
            freqMap.set(i, (freqMap.get(i)||0)+1);
        }
        const buckets=Array.from({length:nums.length+1},()=>[]);
        for(const[key,value] of freqMap){
            buckets[value].push(key);
        }
        for(let bucket of buckets){
            result.push(...bucket)
        }
        return result.slice(result.length-k,result.length);
    }
}
