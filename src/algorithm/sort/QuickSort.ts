import { swap } from '../../utils/array'

// 快排，看名字就知道在普遍情况下最快，原理就是典型的分冶法
// steps
// 1.选择基准x, 大的放右边，小的放左边，
// 2.对左侧重复该操作，对右侧重复该操作，不断如此
// 时间复杂度： O(nLog(n))  一看到二分相关就是log(n)
// 最好的情况，O(nLog(n))
// 最差的情况，O(n^2)

export function QuickSort(arr: Array<number>, start=0, end=arr.length-1): Array<number> {
    if (start < end) {
        let pivot = partion(arr, start, end);
        QuickSort(arr, start, pivot-1);
        QuickSort(arr, pivot + 1, end)
    }
    return arr
}

function partion(arr: Array<number>, start: number, end: number) : number {
    let flag = arr[start];
    let k = start;
    for (let i=start+1; i<=end; i++) {
        if (arr[i] <= flag) {
            if (i-1 > k) {
                swap(arr, k, k+1);
            }
            swap(arr, k, i);
            k++
        }
    }
    return k
}

