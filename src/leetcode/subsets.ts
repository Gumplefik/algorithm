// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//
// 说明：解集不能包含重复的子集。
//
// 示例:
//
//     输入: nums = [1,2,3]
// 输出:
//     [
//         [3],
//         [1],
//         [2],
//         [1,2,3],
//         [1,3],
//         [2,3],
//         [1,2],
//         []
//     ]
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subsets
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 每一个元素可以和已有的任意结果组成新的结果

export function subsets(nums: number[]): number[][] {
    let result:Array<Array<number>> = []
    result.push([])
    for (let i=0, l=nums.length; i<l; i++) {
        let size = result.length
        for(let j=0; j<size; j++) {
            let temp = Object.assign([], result[j])
            temp.push(nums[i])
            result.push(temp)
        }
    }
    return result
}
