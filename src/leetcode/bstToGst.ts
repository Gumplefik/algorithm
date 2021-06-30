// https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/submissions/
import {
  TreeNode
} from '../utils/tree'



let total = 0

function bstToGst(root: TreeNode | null): TreeNode | null {
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
