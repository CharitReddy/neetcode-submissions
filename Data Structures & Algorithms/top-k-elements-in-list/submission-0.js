class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    numCountMap = new Map();

    topKFrequent(nums, k) {
        const {numCountMap} = this;
        nums.forEach((num)=>{
            if(!numCountMap.has(num)){
                numCountMap.set(num, 0);
            }
            numCountMap.set(num, numCountMap.get(num)+1);
        })

        let bucket = new Array(nums.length + 1).fill(null).map(() => []);
        for(let entry of numCountMap.entries()){
            const [key, value] = entry;
            bucket[value].push(key);
        }
        
        const res = []
        for (let i = bucket.length - 1; i > 0; i--) {
    res.push(...bucket[i]);
    if(res.length === k) break
}

        return res;
    }
}
