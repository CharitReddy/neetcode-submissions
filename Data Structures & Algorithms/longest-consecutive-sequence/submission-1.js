class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0;
        const numSet = new Set(nums);

        let res = 1;
        for(let i=0;i<nums.length;i++){
            const num = nums[i];
            if(numSet.has(num-1)) continue;

            let ctr = num+1;
            let currRes = 1;
            while(numSet.has(ctr)){
                ctr++;
                currRes++;
                res=Math.max(res, currRes)
            }

        }

        return res;
    }
}
