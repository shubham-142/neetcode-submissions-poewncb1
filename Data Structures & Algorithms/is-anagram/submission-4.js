class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let charObj = {};
        for(let i of s){
            charObj[i] = (charObj[i] || 0) +1;
        }
        for(let i of t){
            if (!charObj[i]) return false;
            charObj[i]--
        }
        return true;
    }
}
