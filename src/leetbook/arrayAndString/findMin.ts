// https://leetcode-cn.com/leetbook/read/array-and-string/c3ki5/

export function findMin(nums: number[]): number {
    let min = nums[0], i = 0, len = nums.length
    while(i < len) {
        if (nums[i] < min) {
            min = nums[i]
            return min
        }
        i++
    }
    return min
};
