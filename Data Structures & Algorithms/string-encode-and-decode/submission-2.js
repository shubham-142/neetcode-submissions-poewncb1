class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedstr = ""
        for (let i of strs) {
            encodedstr += i + ":;"
        }
        if(strs.length===0) return 0
        return encodedstr.slice(0, encodedstr.length-2)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === 0) return []
        return str.split(':;')
    }
}
