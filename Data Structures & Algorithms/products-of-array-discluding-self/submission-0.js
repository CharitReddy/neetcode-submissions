class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numEle = nums.length
        let prefixProduct = 1;
        let suffixProduct = 1;

        const prefixArr = new Array(numEle);
        const suffixArr = new Array(numEle);

        for(let i=0;i<numEle;i++){
            prefixArr[i]=prefixProduct
            prefixProduct*=nums[i];
        }

        for(let i=numEle-1;i>=0;i--){
            suffixArr[i]=suffixProduct;
            suffixProduct*=nums[i];
        }

        console.log({prefixArr,suffixArr})
        const res = new Array(numEle);

        for(let i=0;i<numEle;i++){
            res[i] = suffixArr[i] * prefixArr[i];
        }

        return res;
    }
}
