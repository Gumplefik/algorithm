// https://leetcode-cn.com/problems/maximum-binary-tree/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length < 1) {
    return null
  }
  let max = 0
  for (let i=1; i<nums.length; i++) {
    if (nums[i] > nums[max]) {
      max = i
    }
  }
  let root = new TreeNode(nums[max])
  root.left = constructMaximumBinaryTree(nums.slice(0, max))
  root.right = constructMaximumBinaryTree(nums.slice(max+1))
  return root
};
