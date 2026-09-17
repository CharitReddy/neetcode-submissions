class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const notAlphaNumeric = /[^a-zA-Z0-9]/;
        let left = 0;
        let right = s.length-1;
        while(left<=right){
            const leftChar = s[left].toLowerCase();
            const rightChar = s[right].toLowerCase();

            if(notAlphaNumeric.test(leftChar)){
                left++;
                continue;
            }

            if(notAlphaNumeric.test(rightChar)){
                right--;
                continue;
            }

            console.log(leftChar,rightChar)

            if(leftChar !== rightChar) return false
            left++;
            right--;
        }

        return true;
    }
}
