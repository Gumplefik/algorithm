// https://leetcode-cn.com/problems/unique-binary-search-trees/

let temp: Array<number> = []
export function numTrees(n: number): number {
  temp = new Array(n+1).fill(0)
  return count(1, n)
};


function count(start: number, end: number): number {
  if (start > end) {
    return 1
  }
  if (temp[end-start]) {
    return temp[end-start]
  }
  let total = 0
  for (let i = start; i <= end; i++) {
    let left = count(start, i-1)
    let right = count(i+1, end)
    total += left * right
  }
  temp[end-start] = total
  return total
}

