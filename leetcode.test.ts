import { describe, it } from "mocha";
import { expect } from "chai";
import {maxSubArray} from "./src/leetcode/maxSubArray";
import {maxProfit} from "./src/leetcode/maxProfit";
import {maxProfit2} from "./src/leetcode/maxProfit2";
import {LRUCache} from "./src/leetcode/LRUCache";
import {generateParenthesis} from "./src/leetcode/generateParenthesis";
import {subsets} from "./src/leetcode/subsets";
import {stringify} from "./src/utils/common";
import {permute} from "./src/leetcode/permute";
import {MinStack} from "./src/leetcode/minStack";
import {canWinNim} from "./src/leetcode/Nim";
import {maximalSquare} from "./src/leetcode/maximalSquare";
import {minimumTotal} from "./src/leetcode/minimumTotal";
import {maxEnvelopes} from "./src/leetcode/maxEnvelopes";
import {lengthOfLongestSubstring} from "./src/leetcode/lengthOfLongestSubstring";
import {longestCommonPrefix} from "./src/leetcode/longestCommonPrefix";
import {permutation} from "./src/leetcode/permutation";
import {twoSum} from "./src/leetcode/twoSum";
import {findMedianSortedArrays} from "./src/leetcode/findMedianSortedArrays";
import {longestPalindrome} from "./src/leetcode/longestPalindrome";
import {solveSudoku} from "./src/leetcode/solveSudoku";


describe('dp', () => {
  it('find biggest sub array', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6)
  })
  it('buy shares', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(7)
  })
  it('buy shares1', () => {
    expect(maxProfit([7, 1, 5, 10, 6, 4])).to.equal(9)
  })
  it('buy shares2', () => {
    expect(maxProfit2([7, 1, 5, 3, 6, 4])).to.equal(5)
  })


  it('lru cache', () => {
    let result = []
    let expects = [1, -1, -1, 3, 4]
    let cache = new LRUCache(2 /* 缓存容量 */);
    cache.put(1, 1);
    cache.put(2, 2);
    result.push(cache.get(1))
    cache.put(3, 3);
    result.push(cache.get(2))
    cache.put(4, 4);
    result.push(cache.get(1))
    result.push(cache.get(3))
    result.push(cache.get(4))
    expect(result.join(",")).to.equal(expects.join(","))
  })
  it('lru cache case 1', () => {
    let result = []
    let expects = [-1, -1, 2, 6]
    let cache = new LRUCache(2 /* 缓存容量 */);
    result.push(cache.get(2))
    cache.put(2, 6);
    result.push(cache.get(1))
    cache.put(1, 5);
    cache.put(1, 2);
    result.push(cache.get(1))
    result.push(cache.get(2))
    expect(result.join(",")).to.equal(expects.join(","))
  })
  it('lru cache case 2', () => {
    let result = []
    let expects = [-1, 3]
    let cache = new LRUCache(2 /* 缓存容量 */);
    cache.put(2, 1);
    cache.put(1, 1);
    cache.put(2, 3);
    cache.put(4, 1);
    result.push(cache.get(1))
    result.push(cache.get(2))
    expect(result.join(",")).to.equal(expects.join(","))
  })
  it('generateParenthesis case 1', () => {
    let expects = [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ]
    expect(generateParenthesis(3).join(",")).to.equal(expects.join(","))
  })
  // it('subsets case 1', () => {
  //   let expects = [
  //     [3],
  //     [1],
  //     [2],
  //     [1, 2, 3],
  //     [1, 3],
  //     [2, 3],
  //     [1, 2],
  //     []
  //   ]
  //   expect(stringify(subsets([1, 2, 3]))).to.equal(stringify(expects))
  // })
  it('permute case 1', () => {
    expect(permute([1, 2, 3]).length).to.equal(6)
  });
  it('min stack case 1', () => {
    let minStack = new MinStack();
    let expects = [-3, 0, -2]
    let result = []
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    result.push(minStack.getMin())
    minStack.pop();
    result.push(minStack.top())
    result.push(minStack.getMin())
    expect(result.join(",")).to.equal(expects.join(","))
  })
  it('min stack case 2', () => {
    let minStack = new MinStack();
    let expects = [-1, -1]
    let result = []
    minStack.push(-1);
    result.push(minStack.top())
    result.push(minStack.getMin())
    expect(result.join(",")).to.equal(expects.join(","))
  })
  it('min stack case 3', () => {
    let minStack = new MinStack();
    let expects = [-2, -1, -2]
    let result = []
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-1);
    result.push(minStack.getMin())
    result.push(minStack.top())
    minStack.pop()
    result.push(minStack.getMin())
    expect(result.join(",")).to.equal(expects.join(","))
  })
  it('nim', () => {
    expect(canWinNim(1348820612)).to.equal(false)
  })
  it('maxSquare case 1', () => {
    expect(maximalSquare([
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0'],
    ])).to.equal(4)
  })
  it('minimumTotal case 1', () => {
    expect(minimumTotal([
      [2],
      [3,4],
      [6,5,7],
      [4,1,8,3]
    ])).to.equal(11)
  })
  it('maxEnvelopes case 1', () => {
    expect(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])).to.equal(3)
  })
  it('maxEnvelopes case 2', () => {
    expect(maxEnvelopes([[4,5],[6,7],[2,3]])).to.equal(3)
  })
  it('maxEnvelopes case 3', () => {
    expect(maxEnvelopes([[4,5],[4,6],[6,7],[2,3],[1,1]])).to.equal(4)
  })
  it('maxEnvelopes case 4', () => {
    expect(maxEnvelopes([[30,50],[12,15],[3,4],[12,2]])).to.equal(3)
  })
  it('maxEnvelopes case 5', () => {
    expect(maxEnvelopes([[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]])).to.equal(3)
  })
  it('maxEnvelopes case 6', () => {
    expect(maxEnvelopes([[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]])).to.equal(5)
  })
  it('maxEnvelopes case 7', () => {
    expect(maxEnvelopes([[46,89],[50,53],[52,68],[72,45],[77,81]])).to.equal(3)
  })
  it('lengthOfLongestSubstring  case 1', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).to.equal(3)
  })
  it('lengthOfLongestSubstring  case 2', () => {
    expect(lengthOfLongestSubstring("pwwkew")).to.equal(3)
  })
  it('lengthOfLongestSubstring  case 3', () => {
    expect(lengthOfLongestSubstring("aa")).to.equal(1)
  })
  it('lengthOfLongestSubstring  case 4', () => {
    expect(lengthOfLongestSubstring("au")).to.equal(2)
  })
  it('lengthOfLongestSubstring  case 5', () => {
    expect(lengthOfLongestSubstring("dvdf")).to.equal(3)
  })
  it('longestCommonPrefix case 1', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).to.equal("fl")
  })
  it('longestCommonPrefix case 2', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).to.equal("")
  })
  it('permutation case 1', () => {
    expect(permutation("abc").length).to.equal(6)
  })
  it('permutation case 2', () => {
    expect(permutation("aab").length).to.equal(3)
  })
  // it('checkInclusion case 1', () => {
  //   expect(checkInclusion("abo", "eidbaoaoo")).to.equal(true)
  // })
  // it('checkInclusion case 2', () => {
  //   expect(checkInclusion("dinitrophenylhydrazine", "acetylphenylhydrazine")).to.equal(true)
  // })
  it('twoSum case 1', () => {
    expect(twoSum([2, 7, 11, 15], 9).join(",")).to.equal([0,1].join(","))
  })
  it('twoSum case 2', () => {
    expect(twoSum([3, 2, 4], 6).join(",")).to.equal([1,2].join(","))
  })
  it('twoSum case 3', () => {
    expect(twoSum([3,3], 6).join(",")).to.equal([0,1].join(","))
  })
  it('twoSum case 4', () => {
    expect(twoSum([-1,-2,-3,-4,-5], -8).join(",")).to.equal([2,4].join(","))
  })
  it('findMedianSortedArrays case 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).to.equal(2)
  })
  it('findMedianSortedArrays case 2', () => {
    expect(findMedianSortedArrays([1, 3], [2, 4])).to.equal(2.5)
  })
  it('longestPalindrome case 1', () => {
    expect(longestPalindrome("babad")).to.equal("bab")
  })
  it('longestPalindrome case 2', () => {
    expect(longestPalindrome("cbbd")).to.equal("bb")
  })
  it('longestPalindrome case 3', () => {
    expect(longestPalindrome("a")).to.equal("a")
  })
  it('longestPalindrome case 4', () => {
    expect(longestPalindrome("bb")).to.equal("bb")
  })
  it('solveSudoku case 1', () => {
    let input = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
    let value = [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
    solveSudoku(input)
    expect(input.toString()).to.equal(value.toString())
  })
})
