// https://leetcode-cn.com/explore/interview/card/tencent/226/dynamic-programming/922/
// example:
// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
export function maxSubArray(nums: number[]): number {
    let l = nums.length;
    let result: Array<number> =  []
    for (let i=0; i<l; i++) {
        if(i-1 < 0) {
            result[i] = nums[i]
            continue
        }
        let cur = nums[i]
        let prev =  result[i-1]
        if (prev >= 0) {
            result[i] = result[i-1] + cur
        } else {
            result[i] = cur
        }
    }
    return Math.max(...result)
}
