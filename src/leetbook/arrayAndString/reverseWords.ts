// https://leetcode-cn.com/leetbook/read/array-and-string/c8su7/

export function reverseWords(s: string): string {
    let i = 0, len = s.length, j = 0, res = ''
    while (i < len) {
        if (s[i] !== ' ') {
            i++
        } else {
            res += s.slice(j, i).split('').reverse().join('')
            i !== len -1 && (res += ' ')
            i++
            j=i
        }
    }
    res += s.slice(j, i).split('').reverse().join('')
    return res
};


