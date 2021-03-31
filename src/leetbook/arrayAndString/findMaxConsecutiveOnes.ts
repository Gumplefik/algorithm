// https://leetcode-cn.com/leetbook/read/array-and-string/cd71t/



export function findMaxConsecutiveOnes(nums: number[]): number {
    let i=0, j=0, max = 0, len = nums.length;
    while (i < len) {
        if (nums[i] === 1) {
            i++
        } else {
            max = max > i - j ? max : i-j
            // max = Math.max(max, i-j)
            i++
            j = i
        }
    }
    return max > i - j ? max : i-j
    // return Math.max(max, i-j)
};
