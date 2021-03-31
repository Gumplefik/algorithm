// https://leetcode-cn.com/leetbook/read/array-and-string/cuj3m/


export function generate(numRows: number): number[][] {
    let res: number[][] = new Array(numRows), i = 0;
    while(i < numRows) {
        let row = new Array(i+1), j = 0;
        while(j <= i) {
            if ( i <2) {
                row[j] = 1
            } else {
                row[j] = (res[i-1][j] || 0) + (res[i-1][j-1] || 0)
            }
            j++
        }
        res[i] = row
        i++
    }
    console.log(res)
    return res
};
