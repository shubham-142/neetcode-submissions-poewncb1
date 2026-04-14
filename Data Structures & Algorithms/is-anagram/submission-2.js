class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let tArr = t.split("");
        for (let i of s) {
            const index = tArr.indexOf(i)
            if(index !== -1){
                tArr.splice(index, 1)

            }else return false
        }
        if(tArr.length !=0) return false
        return true;
    }
}
