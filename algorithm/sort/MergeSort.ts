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
    if (end - start) {
        let middle = Math.floor((start + end)/2)
        sort(arr, start, middle);
        sort(arr, middle + 1, end);
        merge(arr, start, middle, end)
    }
}

function merge(arr: Array<number>, start: number, middle:number, end: number) {
    let x = start;
    let y = middle+1;
    let cache = [];
    while(x <= middle && y <= end) {
        let index = x;
        if (arr[x] >= arr[y]) {
            index = y;
            y++;
        } else {
            x++
        }
        cache.push(arr[index])
    }
    if(x <= middle) {
        cache.push(...arr.slice(x, middle))
    }
    if(y <= end) {
        cache.push(...arr.slice(y, end+1))
    }
    for(let i=start; i<=end; i++) {
        arr[i] = cache[i-start]
    }
}

