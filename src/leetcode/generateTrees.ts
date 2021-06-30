// https://leetcode-cn.com/problems/unique-binary-search-trees-ii/

import {
  TreeNode
} from '../utils/tree'

function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return []
  return build(1, n)
};


function build(start: number, end: number): Array<TreeNode | null> {
  let res: Array<TreeNode | null> = []
  if (start > end) {
    res.push(null)
    return res
  }

  for (let i = start; i <= end; i++) {
    let left = build(start, i-1)
    let right = build(i+1, end)
    for (const leftElement of left) {
      for (const rightElement of right) {
        res.push(new TreeNode(i, leftElement, rightElement))
      }
    }
  }
  return res
}
