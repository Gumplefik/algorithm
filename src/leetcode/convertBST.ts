// https://leetcode-cn.com/problems/convert-bst-to-greater-tree/

import {
  TreeNode
} from '../utils/tree'

let total = 0

function convertBST(root: TreeNode | null): TreeNode | null {
  total = 0
  traverse(root)
  return root
};


function traverse(root: TreeNode | null) {
  if (root === null) return
  traverse(root.right)
  total += root.val
  root.val = total
  traverse(root.left)
}
