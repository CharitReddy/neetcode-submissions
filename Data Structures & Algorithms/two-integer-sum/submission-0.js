class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();
        for(let i=0; i<nums.length; i++){
            numMap.set(nums[i], i);
        }
        for(let i=0; i<nums.length; i++){
            const remaining = target - nums[i];
            if(numMap.has(remaining)){
                const remainIndex = numMap.get(remaining)
                if(remainIndex !== i)
                return [i, remainIndex]
            }
        }
    }
}
