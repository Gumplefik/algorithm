// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1：
//
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
//
// 输入: "cbbd"
// 输出: "bb"
//
// 作者：力扣 (LeetCode)
// 链接：https://leetcode-cn.com/leetbook/read/tencent/xxk4s2/
//     来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


export function longestPalindrome(s: string): string {
    if (s.length <= 1) {
        return s
    }
    let result= '';
    for (let i=0, l=s.length; i< l; i++) {
        for(let j=l; j>i; j--) {
            let str = s.slice(i,j)
            let len = str.length
            if (len > result.length && isPalindrome(str) ) {
                result = str
                break
            }
        }
    }
    return result
};

function isPalindrome(str: string) : boolean {
    let l = str.length
    let middle = Math.round(l/2)
    let result = true
    for(let i=0; i<=middle; i++) {
        let j = l - 1 - i
        if (str[i] !== str[j]) {
            result = false
            break
        }
    }
    return result
}
