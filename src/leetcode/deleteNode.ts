// https://leetcode-cn.com/problems/delete-node-in-a-bst/


import {
  TreeNode
} from '../utils/tree'


function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null

  if (root.val === key) {
    if (root.right === null) return root.left

    if (root.left === null) return root.right

    let minNode = getMin(root.right)
    root.val = minNode.val
    root.right = deleteNode(root.right, minNode.val)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  return root
};


function getMin(node: TreeNode) : TreeNode {
  while(node.left !== null) {
    node = node.left
  }
  return node
}


