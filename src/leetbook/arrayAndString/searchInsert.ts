// https://leetcode-cn.com/leetbook/read/array-and-string/cxqdh/
// 二分法查找
export default function searchInsert(nums: number[], target: number): number {
    let start = 0, end = nums.length
    let middle = 0
    while (start < end) {
        middle = getMiddleElement(start, end)
        let cur = nums[middle]
        let left = nums[middle-1]
        let right = nums[middle+1]
        if (cur === target) {
            return middle
        } else if (cur > target) {
            if (isNil(left) || left < target) {
                return isNil(left) ? 0 : middle
            }
            end = middle
        } else {
            if (isNil(right) || right > target) {
                return isNil(right) ? nums.length : middle + 1
            }
            start = middle
        }
    }
    return middle

};

function getMiddleElement(start: number, end: number) : number {
    return Math.floor((end + start) / 2)
}

function isNil(val: any) {
    return val === undefined || val === null
}