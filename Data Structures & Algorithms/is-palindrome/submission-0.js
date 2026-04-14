class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = "";
        let revStr = ""
        for (let i of s) {
            if (this.isAlphanumeric(i)) {
                str += i;
                revStr = i + revStr
            }
        }
        console.log(str)
        console.log(revStr)
        return (str.toLocaleLowerCase() === revStr.toLowerCase())
    }

    isAlphanumeric(c) {
        return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
    }
}
