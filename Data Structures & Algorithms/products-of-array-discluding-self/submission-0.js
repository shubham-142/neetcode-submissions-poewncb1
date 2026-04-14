class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let opArr = new Array(nums.length).fill(1);
        let product = 1;
        for (let i = 0; i<nums.length; i++){
            for(let j = 0; j<opArr.length; j++){
                if(j!==i){
                    opArr[j] = opArr[j]*nums[i]
                }
            }
        }
        return opArr
    }
}
