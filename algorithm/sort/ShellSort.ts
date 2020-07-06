// steps
// 1.通过h = 3h + 1, h<len的公式获取分段数
// 2.每个分段进行直接插入排序
// 3.h = (h-1)/2， 重复以上操作直至h<=0
// 时间复杂度： O(n^2) 本质上是优化后的插入排序
// 最好的情况，顺序：O(n)
// 最差的情况，逆序： O(n^2)
// 平均：O(n^1.3) 测试得出
// 空间复杂度 O(1)
// 不稳定
export function ShellSort(arr: Array<number>): Array<number> {
    let l = arr.length;
    let h = 1;
    while(h < l / 3) {
        h = 3*h + 1
    }
    while (h > 0) {
        for(let i=h; i<l; i++) {
            let temp = arr[i];
            let j = i;
            while(j >= h && arr[j-h] > temp) {
                arr[j] = arr[j-h];
                j-= h;
            }
            arr[j] = temp;
        }
        h = (h - 1)/3
    }
    return arr
}

