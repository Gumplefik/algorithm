import { swap } from '../../utils/array'

// steps
// 1.假定第一个数字为已排序好的数字
// 2.将第x个数字与已排序好的数字比较，如果比左侧小，则交换，不断重复
// 时间复杂度： 1 + 2 + 3 + 4 + ... + n-1 =  n(n-1 + 1)/2 => O(n^2)
// 最好的情况，顺序：O(n)
// 最差的情况，逆序： O(n^2)
// 平均：O(n^2)
// 空间复杂度 O(1)
// 稳定
export function DirectInsertSort(arr: Array<number>): Array<number> {
    let l = arr.length;
    for(let i=1 ;i<l; i++) {
        let cur = i;
        for (let j=i-1; j>=0; j--) {
            if (arr[j] > arr[cur]) {
                swap(arr, j, cur);
                cur = j
            } else {
                break
            }
        }

    }
    return arr
}

