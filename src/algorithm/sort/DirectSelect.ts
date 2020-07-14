import { swap } from '../../utils/array'

// steps
// 1.从数列中找到最小值
// 2.将最小值与最左边的数字交换，不断重复1
// 时间复杂度： n-1 + n-2 + n-3 + ... + 1 =  n(n-1 + 1)/2 => O(n^2)    最好，最差，平均的情况均一致
// 空间复杂度 O(1)
// 不稳定
export function DirectSelectSort(arr: Array<number>): Array<number> {
    let l = arr.length;
    for(let i=0 ;i<l-1; i++) {
        let min = i;
        for (let j=i+1; j<l; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        swap(arr, i, min)
    }
    return arr
}

