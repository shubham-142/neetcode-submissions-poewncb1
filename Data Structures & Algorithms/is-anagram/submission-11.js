class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        let maps = new Map();
        let mapt = new Map();
        for(let i=0; i<s.length; i++){
            maps.set(s[i],(maps.get(s[i])||0)+1);
            mapt.set(t[i],(mapt.get(t[i])||0)+1);
        }
        for(const[key, value] of maps){
            if(mapt.get(key)!=value) return false;
        }
        return true;
    }
}
