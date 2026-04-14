class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        let dup = false;
        nums.forEach((n)=>{
            if(set.has(n)){
                dup= true
                return
            }else{
                set.add(n)
            }
        }
        )
        return dup;
    }
}
