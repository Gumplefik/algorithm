
/**
 Do not return anything, modify matrix in-place instead.
 */
// 记录要清空的行和列
export function setZeroes(matrix: number[][]): void {
    let rows = new Set<number>()
    let cols = new Set<number>()
    for (let i=0; i<matrix.length; i++) {
        let row = matrix[i] || []
        for (let j=0; j<row.length; j++) {
            if (matrix[i][j] === 0)  {
                rows.add(i)
                cols.add(j)
            }
        }
    }
    rows.forEach(r => {
        matrix[r] = new Array(matrix[r].length).fill(0)
    })
    cols.forEach( r => {
        for(let i=0; i< matrix.length; i++) {
            matrix[i][r] = 0
        }
    })
};