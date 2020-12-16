// https://leetcode-cn.com/leetbook/read/array-and-string/clpgd/

export function rotate(matrix: number[][]): void {
    const middle = Math.ceil(matrix.length / 2)
    let count = Math.floor(matrix.length * matrix.length / 4)
    for (let i=0; i<middle; i++) {
        let row = matrix[i] || []
        for (let j=0; j < middle; j++) {
            if (count <= 0) {
                return
            }
            count--
            rotateRect(matrix, i, j)
        }

    }
};

function rotateRect(matrix: number[][], x: number, y: number) {
    let i = y, j = matrix.length - 1 - x
    let count =0
    let value = matrix[x][y]
    while(count < 4) {
        let temp = matrix[i][j]
        matrix[i][j] = value
        value = temp
        let k = i
        i = j
        j = matrix.length - 1 - k
        count++
    }
}