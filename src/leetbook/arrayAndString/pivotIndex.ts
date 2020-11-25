// https://leetcode-cn.com/leetbook/read/array-and-string/yf47s/
 // 2 * sumL + cur = total
export default function pivotIndex(nums: number[]): number {
    let len = nums.length
    let i = 0, sumL = 0;
    let total = sum(nums)
    while(i < len) {
        if (sumL * 2 + nums[i] === total) {
            return i
        }
        sumL += nums[i]
        i++
    }
    return -1
};

function sum(arr: number[]) : number{
    return arr.reduce(function(prev, curr, idx, arr){
        return prev + curr;
    }, 0);
}