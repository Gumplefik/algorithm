import { swap } from '../../utils/array'

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

