class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0;
        const set = new Set(nums);
        for(let i of nums){
            
            if(set.has(i-1)) continue;
            let count = 1;
            while(set.has(i+count)){
                count++;
            }
            max = Math.max(max,count)
        }
        return max;
    }
}
