import { describe, it } from "mocha";
import { expect } from "chai";
import {maxSubArray} from "./src/leetcode/maxSubArray";
import {maxProfit} from "./src/leetcode/maxProfit";
import {maxProfit2} from "./src/leetcode/maxProfit2";
import {LRUCache} from "./src/leetcode/LRUCache";


describe('dp', () => {
  it('find biggest sub array', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).to.equal(6)
  })
  it('buy shares', () => {
    expect(maxProfit([7,1,5,3,6,4])).to.equal(7)
  })
  it('buy shares1', () => {
    expect(maxProfit([7,1,5,10,6,4])).to.equal(9)
  })
  it('buy shares2', () => {
    expect(maxProfit2([7,1,5,3,6,4])).to.equal(5)
  })


  it('lru cache', () => {
    let result = []
    let expects = [1, -1, -1, 3, 4]
    let cache = new LRUCache( 2 /* 缓存容量 */ );
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
    let cache = new LRUCache( 2 /* 缓存容量 */ );
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
    let cache = new LRUCache( 2 /* 缓存容量 */ );
    cache.put(2, 1);
    cache.put(1, 1);
    cache.put(2, 3);
    cache.put(4, 1);
    result.push(cache.get(1))
    result.push(cache.get(2))
    expect(result.join(",")).to.equal(expects.join(","))
  })
});

