class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anaGramGrpMap = new Map();
        for(const str of strs){
            const count = new Array(26).fill(0)
            for(const i of str){
                count[i.charCodeAt(0)-"a".charCodeAt(0)] += 1;
            }
            let key = count.join(',')
            if(anaGramGrpMap.has(key)){
                anaGramGrpMap.get(key).push(str)
            }else{
                anaGramGrpMap.set(key, [str])
            }
        }
        return [...anaGramGrpMap.values()]
    }
}
