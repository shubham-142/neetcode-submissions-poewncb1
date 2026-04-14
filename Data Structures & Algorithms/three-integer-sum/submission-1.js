class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort()
        let resArr = [];
        let curr=0;
        for(let i=0; i<nums.length; i++){
            if(i!=0 && curr=== nums[i]) continue;
            curr = nums[i]
            let currj=0;
            for(let j = i+1; j<nums.length; j++){
                if(j!=i+1 && currj=== nums[j]) continue;
                currj = nums[j]
                let currk=0;
                for(let k = j+1; k< nums.length; k++){
                    if(k!=j+1 && currk=== nums[k]) continue;
                    currk = nums[k]
                    if(nums[i]+nums[j]+nums[k]===0){
                        resArr.push([nums[i],nums[j],nums[k]])
                    }
                }
            }
        }
        return resArr;
    }
}
