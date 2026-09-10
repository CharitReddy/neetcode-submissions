class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let encoded = '';
        for(let i=0; i<strs.length; i++){
            const currStr = strs[i];
            const currStrLength = currStr.length;
            encoded=`${encoded}${currStrLength}#${currStr}`; 
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const res = [];
        let iter = 0;
        while(iter < str.length){
            let j = iter;

            while(str[j]!=='#') j++;
            const strLength = Number(str.slice(iter, j));
            const start = j+1;
            const end = start+strLength;

            res.push(str.slice(start,end));

            iter=end;
        }
        return res;
    }
}
