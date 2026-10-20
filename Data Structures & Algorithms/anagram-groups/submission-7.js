class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let result = [];
        for(let str of strs){
            const count = new Array(26).fill(0);
            for (let ch of str){
                count[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }
            const key = count.join(',')
            if(map.has(key)){
                map.get(key).push(str)
            }else{
                map.set(key,[str])
            }

        }
        for(const [key, value] of map){
            result.push(value)
        }
        return result;
        
    }
}
