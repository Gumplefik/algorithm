// https://leetcode-cn.com/leetbook/read/tencent/xx6c46/


export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let i = 0, l1 = nums1.length, j = 0, l2 = nums2.length, mid = (l1 + l2) / 2, count = 0, cache = []
  while (count < mid + 1) {
    let x = nums1[i], y = nums2[j]
    if (x === undefined || x > y) {
      j++
      cache.push(y)
    } else {
      i++
      cache.push(x)
    }
    count++
  }
  let l = cache.length
  if ((l1 + l2) % 2 === 0) {
    return (cache[l-1] + cache[l-2]) /2
  }
  return cache[l-2]
};
