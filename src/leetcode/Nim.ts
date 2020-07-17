// https://leetcode-cn.com/problems/nim-game/
// r[n] = n%4 === 0


export function canWinNim(n: number): boolean {
    // return n % 4 !== 0
    return (n & (4 - 1)) !== 0
};
