// https://leetcode-cn.com/problems/generate-parentheses/
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例：
//
// 输入：n = 3
// 输出：[
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]


import {factorialize} from "../utils/common";

export function generateParenthesis(n: number): string[] {
    let res:Array<string> = []
    dfs(res, "", n, n, n)
    return res
}

function  dfs(res:Array<string>, str: string, l:number, r:number, n:number) {
    if (l == 0 && r == 0) {
        res.push(str)
        return
    }
    if (l > r) {
        return
    }
    if (l > 0) {
        dfs(res, str + "(", l-1, r, n)
    }
    if (r > 0) {
        dfs(res, str + ")", l, r-1, n)
    }
}
