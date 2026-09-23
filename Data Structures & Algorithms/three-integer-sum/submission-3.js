class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;
        const res = [];
        
        nums.sort((a,b)=>a-b);

        for(let i=0;i<len;i++){
            if (i>0 && nums[i]===nums[i-1]) continue;
            const target = -nums[i];

            let left = i+1;
            let right = len-1;

            while(left<right){                
                if(nums[left]+nums[right] === target) {
                    res.push([nums[i],nums[left],nums[right]]);
                    left++;
                    right--;
                    
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
                };
                if(nums[left]+nums[right] > target) right--;
                if(nums[left]+nums[right] < target) left++;
            }            
        }

        return res;
    }
}
