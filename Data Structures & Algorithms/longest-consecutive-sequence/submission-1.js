class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxSeq = 0;
        for(let i of nums ){
            let elm = i;
            let seqCount = 0;
            while(nums.includes(elm)){
                seqCount++;
                elm++
            }
            if(seqCount>maxSeq){maxSeq = seqCount}
        }
        return maxSeq
    }
}
