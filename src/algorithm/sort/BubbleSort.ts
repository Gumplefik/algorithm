import { swap } from '../../utils/array'

// steps
// 1.冒泡排序，顾名思义，就像水里的泡泡一样，大的一致往右交换就行
// 时间复杂度： 1 + 2 + 3 + 4 + ... + n-1 =  n(n-1 + 1)/2 => O(n^2)
// 最好的情况，顺序：O(n)
// 最差的情况，逆序： O(n^2)
// 平均：O(n^2)
// 空间复杂度 O(1)
// 稳定
export function BubbleSort(arr: Array<number>): Array<number> {
    let l = arr.length;
    for(let i=0; i<l; i++) {
        for (let j=l-1; j>0; j--) {
            if (arr[j] < arr[j-1]) {
                swap(arr, j, j-1)
            }
        }
    }
    return arr
}

