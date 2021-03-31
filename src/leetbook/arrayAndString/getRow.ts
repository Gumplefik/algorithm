// https://leetcode-cn.com/leetbook/read/array-and-string/ctyt1/


export function getRow(rowIndex: number): number[] {
    let res: number[][] = new Array(rowIndex), i = 0;
    while(i <= rowIndex) {
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
    return res[rowIndex]
};
