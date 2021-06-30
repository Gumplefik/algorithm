// https://leetcode-cn.com/problems/validate-binary-search-tree/

import {
  TreeNode
} from '../utils/tree'


// root 大于 left
// root 小于 right

function isValidBST(root: TreeNode | null): boolean {
  return _isValidBST(root, null, null)
};

function _isValidBST(root: TreeNode | null, min: TreeNode | null, max: TreeNode | null): boolean {
  if (root === null) return true
  if (min !== null && root.val <= min.val) return false
  if (max !== null && root.val >= max.val) return false
  return _isValidBST(root.left, min, root) && _isValidBST(root.right, root, max)
}


