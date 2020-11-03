// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
//
// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
//
// 你可以假设 nums1 和 nums2 不会同时为空。
//
//  
//
// 示例 1:
//
// nums1 = [1, 3]
// nums2 = [2]
//
// 则中位数是 2.0
// 示例 2:
//
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// 则中位数是 (2 + 3)/2 = 2.5
//
// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/tencent/xx6c46/
//     来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let nums = [
        ...nums1,
        ...nums2
    ].sort(((a, b) => {
        return a-b
    }))
    let l = nums.length
    let isOdd = l % 2 !== 0
    return isOdd ? nums[(l - 1)/2] : (nums[l/2 - 1] + nums[l/2]) / 2
};
