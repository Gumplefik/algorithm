// https://leetcode-cn.com/problems/search-in-a-binary-search-tree/

import {
  TreeNode
} from '../utils/tree'

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return null
  }
  if (root.val === val) {
    return root
  }
  if (root.val > val) {
    return searchBST(root.left, val)
  }
  if (root.val < val) {
    return searchBST(root.right, val)
  }
  return null
};

function _searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while(root) {
    if (root.val === val) {
      return root
    }
    if (root.val > val) {
      root = root.left
      continue
    }
    if (root.val < val) {
      root = root.right
      continue
    }
  }
  return null
}
