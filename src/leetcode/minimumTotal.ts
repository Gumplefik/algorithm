// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
//
//  
//
// 例如，给定三角形：
//
// [
//     [2],
//     [3,4],
//     [6,5,7],
//     [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/triangle
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


export function minimumTotal(triangle: number[][]): number {
    let l = triangle.length
    for (let i=0; i<l; i++) {
        for(let j=0,k=triangle[i].length; j<k; j++) {
            if(j === 0) {
                triangle[i][j] = i > 0 ? triangle[i][j] + triangle[i-1][j] : triangle[i][j]
            } else {
                triangle[i][j] = triangle[i][j] + (j !== k-1 ? Math.min(triangle[i-1][j], triangle[i-1][j-1]) : triangle[i-1][j-1])
            }
        }
    }
    return l !== 0 && Math.min(...triangle[l-1]) || 0
};