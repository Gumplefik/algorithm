// https://leetcode-cn.com/leetbook/read/array-and-string/c24he/

export function arrayPairSum(nums: number[]): number {
    nums.sort((x, y) => x-y)
    let i = 0, l = nums.length, res = 0;
    while(i < l) {
        res += nums[i]
        i+=2
    }
    return res
};
