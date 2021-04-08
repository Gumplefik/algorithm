// https://leetcode-cn.com/leetbook/read/tencent/xxqfy5/
// 后续遍历

export function twoSum(nums: number[], target: number): number[] {
    let res: number[] = [], i = 0, j = 0, len = nums.length, cache = new Map()
    while(i < len) {
        let x = nums[i]
        let y = target - x
        if (cache.has(y)) {
            res.push(cache.get(y), i)
            break
        }
        cache.set(nums[i], i)
        i++
    }
    return res
};
