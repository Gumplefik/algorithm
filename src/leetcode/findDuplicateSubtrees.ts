// https://leetcode-cn.com/problems/find-duplicate-subtrees/

import {
  TreeNode
} from '../utils/tree'

let treeNodes: Set<String> = new Set()

let result: Map<String, TreeNode> = new Map()


function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  treeNodes.clear()
  result.clear()
  traverse(root)
  return Array.from(result.values())
};


function traverse(root: TreeNode | null) : string {
  if (root === null) {
    return ''
  }
  let left = traverse(root.left)
  let right = traverse(root.right)
  let subtree = left + ',' + right + ',' + root.val
  if (treeNodes.has(subtree)) {
    result.set(subtree, root)
  }
  treeNodes.add(subtree)
  return subtree
}
