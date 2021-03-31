// https://leetcode-cn.com/leetbook/read/array-and-string/c6u02/


export function moveZeroes(nums: number[]): void {
    let i = 0, len = nums.length, j = -1, count = 0
    while (i < len) {
        if (nums[i] === 0) {
            j < 0 && (j = i)
        } else if (j >= 0) {
            nums[j] = nums[i]
            j++
        }
        i++
    }
    while (j < len && j >= 0) {
        nums[j] = 0
        j++
    }
};
