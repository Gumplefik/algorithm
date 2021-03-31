// https://leetcode-cn.com/leetbook/read/array-and-string/cnkjg/


export function twoSum(numbers: number[], target: number): number[] {
    let n = numbers.length - 1, start = 0, res = []
    while(start < n) {
        let x = numbers[start]
        let y = target - x
        if (y < x) {
            break
        }
        let end = binarySearch(numbers, y, start+1, n)
        if (end !== -1) {
            res.push(start+1, end + 1)
        }
        start++
    }
    return res
};


export function binarySearch(arr: number [], target: number, start = 0, end = arr.length - 1) : number {
    let left = start, right = end
    if (target > arr[end] || target < arr[start]) {
        return -1
    }
    while (left <= right) {
        let middle = Math.floor((left +  right) / 2)
        if (arr[middle] > target) {
            right = middle - 1
        }
        else if (arr[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
}
