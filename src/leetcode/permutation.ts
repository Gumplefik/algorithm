// 输入一个字符串，打印出该字符串中字符的所有排列。
//
//  
//
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
//
//  
//
// 示例:
//
//     输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

export function permutation(s: string): string[] {
    let str:Array<string> = s.split('')
    let result: Set<string> = new Set()
    bfs(result, "", str)
    return Array.from(result)
};

function bfs(result:Set<string>, prev:string, arr:Array<string>) {
    arr.forEach((item, i) => {
        let str = prev + item
        if (arr.length <= 1) {
            return result.add(str)
        }
        let nextArr = Object.assign([], arr)
        nextArr.splice(i, 1)
        bfs(result, str, nextArr)
    })
}