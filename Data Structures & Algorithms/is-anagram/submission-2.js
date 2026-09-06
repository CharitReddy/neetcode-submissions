class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charMap = new Map();
        for(let char of s){
            if(!charMap.has(char)){
                charMap.set(char, 0)
            }
            charMap.set(char, charMap.get(char)+1);
        }

        for(let char of t){
            if(!charMap.has(char)) return false;
            charMap.set(char, charMap.get(char)-1);
        }

        console.log(charMap)
        for (const value of charMap.values()) {
        if(value !== 0) return false;        
        }
        return true;
    }

}
