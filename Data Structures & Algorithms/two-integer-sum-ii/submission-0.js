class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();
        for(let i =0;  i<= numbers.length; i++){
            let rem = target-numbers[i];
            if(map.has(rem)){
                let indexFound = map.get(rem);
                if (indexFound > i) {return [i+1, indexFound+1]}
                else return[indexFound+1, i+1]
            }
            map.set(numbers[i], i)
        }
    }
}
