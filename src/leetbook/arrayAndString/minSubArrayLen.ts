// https://leetcode-cn.com/leetbook/read/array-and-string/c0w4r/


export function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0, i = 0, j = 0, len = nums.length, min = Infinity;
    while(i < len) {
        sum += nums[i]
        if (sum >= target) {
            min = min <= i - j + 1? min : i - j + 1
            while(sum >= target) {
                min = min <= i - j + 1? min : i - j + 1
                sum -= nums[j]
                j++
            }
            i++
        } else {
            i++
        }
    }
    return isFinite(min) ? min : 0

};
