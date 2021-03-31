// https://leetcode-cn.com/leetbook/read/array-and-string/cpoo6/
// http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/


export function KMP(p:string, s: string) {
    let partialTable = buildPartialTable(s)
    let lenX = p.length, lenY = s.length, i = 0, j = 0;
    if (lenY === 0) {
        return 0
    }
    while(i < lenX) {
        if (p[i] === s[j]) {
            i++
            j++
        }
        if (j === lenY) {
            return i - j
        } else if (i < lenX && p[i] !== s[j]) {
            if (j !== 0) {
                j = partialTable[j-1]
            } else {
                i++
            }
        }
    }
    return -1
}

function buildPartialTable(p: string) : number[] {
    let n = p.length, res: number[] = [0]
    let i = 1, len = 0;
    while(i < n) {
        if (p[len] === p[i]) {
            len++
            res[i] = len
            i++
        } else {
            // 这一步是优化，比如aaacaaaa，i=7的时候子串长度应该是res[i-1]
            if (len !== 0) {
                len = res[len-1]
            } else {
                res[i] = 0
                i ++
            }
        }
    }
    return res
}


