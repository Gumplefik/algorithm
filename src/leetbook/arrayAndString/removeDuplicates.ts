// https://leetcode-cn.com/leetbook/read/array-and-string/cq376/


export function removeDuplicates(nums: number[]): number {
    let i = 1, len = nums.length, j = 0, count = 0
    while (i < len) {
        if (nums[i] === nums[j]) {
            // @ts-ignore
            // nums[i] = undefined
            count ++
        } else {
            j++
            if (i !== j) {
                nums[j] = nums[i]
                // @ts-ignore
                nums[i] = undefined
            }
        }
        i++
    }
    return len - count
};
