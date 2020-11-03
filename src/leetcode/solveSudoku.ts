// 编写一个程序，通过已填充的空格来解决数独问题。
//
// 一个数独的解法需遵循如下规则：
//
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
// 空白格用 '.' 表示。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sudoku-solver
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

import get = Reflect.get;

const NUMS = ['1', '2', '3', '4,', '5', '6', '7', '8', '9']

export function solveSudoku(board: string[][]): void {
    let len = board.length
    let n = len * len
    let cache = new Map()
    while(cache.size !== n) {
        for(let i=0; i<len; i++) {
            for(let j=0; j<len; j++) {
                let key = formatKey(i,j)
                let val = board[i][j]
                if (val !== '.') {
                    !cache.get(key) && cache.set(key, val)
                } else {
                    analyzeVal(i, j, board) && cache.set(key, board[i][j])
                }

            }
        }
    }
    console.log(cache)
};

function analyzeVal(i:number, j:number, arr: string[][]) :boolean {
    let possibleVal = getPossibleNums(i, j, arr)
    if (possibleVal.length === 1) {
        arr[i][j] = possibleVal[0]
        return true
    }
    return false
}



function getPossibleNums(i:number, j:number, arr: string[][]) : string[] {
    let impossibleVal = new Set()
    for(let x=0; x<9; x++) {
        let valX = arr[x][j]
        let valY = arr[i][x]
        valX !== '.' && impossibleVal.add(valX)
        valY !== '.'  && impossibleVal.add(valY)
    }
    let positionX = i - i%3
    let positionY = j - j%3
    for(let a=0; a<3; a++){
        for(let b=0; b<3; b++) {
            let val = arr[positionX+a][positionY+b]
            val !== '.'  && impossibleVal.add(val)
        }
    }
    return NUMS.filter((value) => {
        return !impossibleVal.has(value)
    })
}

function formatKey(i:number, j:number) :string {
    return `${i}-${j}`
}
