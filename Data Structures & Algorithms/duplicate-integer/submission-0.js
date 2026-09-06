class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    const numMap = new Map();
    for(let i=0;i <nums.length; i++){
        const num = nums[i];
        if(!numMap.has(num)){
            numMap.set(num, true)
            continue
        }
        return true;
    }
    return false;
    }
}
