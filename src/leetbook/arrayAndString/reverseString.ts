
// https://leetcode-cn.com/leetbook/read/array-and-string/cacxi/
export function reverseString(s: string[]): void {
    let end = s.length - 1, start = 0;
    while(start < end) {
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        start++
        end--
    }
};
