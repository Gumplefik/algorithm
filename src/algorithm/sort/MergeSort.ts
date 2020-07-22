import { swap } from '../../utils/array'

// 归并排序：
// 主要流程：
// 1.讲数据分为n/2个片段，排序每个片段
// 2.每两个片段合并然后排序
// 3.重复以上步骤
export function MergeSort(arr: Array<number>): Array<number> {
    sort(arr);
    return arr
}

function sort(arr: Array<number>, start=0, end=arr.length-1) {
    if (end - start > 0) {
        let middle = Math.floor((start + end)/2)
        sort(arr, start, middle);
        sort(arr, middle + 1, end);
        merge(arr, start, end)
    }
}

function merge(arr: Array<number>, start: number, end: number) {
    let cache = arr.slice(start, end+1)
    cache.sort((a, b) => {
        return a-b
    })
    arr.splice(start, cache.length, ...cache)
}

