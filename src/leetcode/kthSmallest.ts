// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

import {
  TreeNode
} from '../utils/tree'

let count = 0
let res = -1

function kthSmallest(root: TreeNode | null, k: number): number {
  count = 0
  res = -1
  traverse(root, k)
  return res
};


function traverse(root: TreeNode | null, k: number) {
  if (root === null) {
    return
  }
  traverse(root.left, k)
  count ++
  if (count === k) {
    res = root.val
    return
  }
  traverse(root.right, k)
}
