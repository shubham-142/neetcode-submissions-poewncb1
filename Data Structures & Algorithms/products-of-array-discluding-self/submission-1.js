class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // let opArr = new Array(nums.length).fill(1);
        // let product = 1;
        // for (let i = 0; i<nums.length; i++){
        //     for(let j = 0; j<opArr.length; j++){
        //         if(j!==i){
        //             opArr[j] = opArr[j]*nums[i]
        //         }
        //     }
        // }
        // return opArr

        let product = 1;
        let zeroCount = 0
        for(let i of nums){
            if(i===0){
                zeroCount +=1
                if (zeroCount>1) return new Array(nums.length).fill(0)
            }else{
                product = product* i
            }
        }
        if(zeroCount==1){
            let opArr = new Array(nums.length).fill(0)
            let indexOfZeroInNums = nums.indexOf(0);
            opArr[indexOfZeroInNums] = product
            return opArr
        }
        return nums.map((num)=>{return product/num})
    }
}
