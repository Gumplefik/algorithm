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
  });
})
