// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//
//  
//
// 示例:
//
//     给定 nums = [2, 7, 11, 15], target = 9
//
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
//
// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/tencent/xxqfy5/
//     来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

export function twoSum(nums: number[], target: number): number[] {
    let result = []
    for(let i=0, l=nums.length; i<l; i++) {
        let x = nums[i]
        let y = target - x
        let index = nums.indexOf(y, i+1)
        if (index !== -1) {
            result.push(i, index)
            break
        }
    }
    return result
};
