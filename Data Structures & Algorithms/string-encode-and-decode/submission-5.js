class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedstr = ""
        for (let i of strs) {
            encodedstr += i.length + "/" + i
        }
        return encodedstr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        while (i < str.length) {
            let slashIndex = str.indexOf("/", i)
            let length = parseInt(str.substring(i, slashIndex))
            i = slashIndex + 1
            res.push(str.substring(i, i + length))
            i += length
        }
        return res
    }
}
