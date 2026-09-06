class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const allCharsMap = new Map();
        for(let i=0; i<strs.length; i++){
            const currWord = strs[i];
            const keyArr = new Array(26).fill(0);

            for(let char of currWord){
                const currCharIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
                keyArr[currCharIndex]+=1;
            }
                const keyString = keyArr.join('-');
                if(!allCharsMap.has(keyString)){
                    allCharsMap.set(keyString, []);
                }
            allCharsMap.get(keyString).push(currWord);
        }
        let res = [];
        for(const anagramGroup of allCharsMap.values()){
            res.push(anagramGroup)
        }
        return res;
    }
}
