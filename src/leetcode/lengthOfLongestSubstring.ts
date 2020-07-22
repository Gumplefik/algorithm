// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
//
// 示例 1:
//
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

export function lengthOfLongestSubstring(s: string): number {
    let cache = ""
    let result = 0
    for(let i=0; i<s.length; i++) {
        let val = s[i]
        let index = cache.indexOf(val)
        if (index >= 0) {
            cache.length > result && (result = cache.length)
            cache = cache.slice(index+1)
        }
        cache += val
    }
    cache.length > result && (result = cache.length)
    return result
};
