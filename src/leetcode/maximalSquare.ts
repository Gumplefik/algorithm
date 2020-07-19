// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
//
// 示例:
//
//     输入:
//
//         1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0
//
// 输出: 4
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximal-square
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/solution/tong-ji-quan-wei-1-de-zheng-fang-xing-zi-ju-zhen-2/
// 参照以上可以得出   f(i,j) = min(f(i-1,j), f(i, j-1), f(i-1, j-1)) + 1

import {isNullOrEmpty} from "../utils/common";

export function maximalSquare(matrix: string[][]): number {
    let result: Array<Array<number>> = []
    let x = matrix.length
    let y = matrix[0] && matrix[0].length || 0
    let max = 0
    for(let i=0; i<x; i++) {
        isNullOrEmpty(result[i]) && (result[i] = [])
        for (let j=0; j<y; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    result[i][j] = 1
                } else {
                    result[i][j] = Math.min(result[i][j-1], result[i-1][j], result[i-1][j-1]) + 1
                }
                max = Math.max(max, result[i][j])
            } else {
                result[i][j] = 0
            }
        }
    }
    return max * max
};