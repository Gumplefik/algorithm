// https://leetcode-cn.com/leetbook/read/array-and-string/cwuyj/


export function removeElement(nums: number[], val: number): number {
    let i = 0, j = 0, len = nums.length
    while(i < len) {
        if (nums[i] === val) {
            // @ts-ignore
            nums[i] = undefined
        } else {
            if (j !== i) {
                nums[j] = nums[i]
                // @ts-ignore
                nums[i] = undefined
            }
            j++
        }
        i++
    }
    return j
};
