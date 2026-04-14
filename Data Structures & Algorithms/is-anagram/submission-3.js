class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = new Map();
        let tMap = new Map();
        for( const i of s){
            sMap.set(i,(sMap.get(i) || 0) + 1)
        }

        for( const i of t){
            tMap.set(i,(tMap.get(i) || 0) + 1)
        }

        if(sMap.size !== tMap.size) return false;

        for( const[key,value] of sMap){
            if(!tMap.has(key) || tMap.get(key) !== value) return false;
        }
        return true;

    }
}
