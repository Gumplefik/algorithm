import { describe, it } from "mocha";
import { expect } from "chai";
import { findRepeatNumber } from "./src/offer/3";
import { ListNode, Solution } from './src/algorithm/math/ReservoirSampling';
import { divingBoard, respace } from './src/algorithm/math/Memorize'


describe('offer3', () => {
  it('find repeat num', () => {
    expect([2, 3].includes(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))).to.equal(
      true
    );
  })

});


describe('ReservoirSampling', () => {
  it('get random item', () => {
    let n = 900;
    let head: ListNode = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    let solution: Solution = new Solution(head);
    let result: Map<number, number> = new Map();
    while (n > 0) {
      let x = solution.getRandom();
      result.set(x, (result.get(x) || 0) + 1);
      n--
    }
    console.log(result.keys());
    console.log(result.values())
  })
});


describe('memorize', () => {
  it('cache result', () => {
    console.log(divingBoard(1, 2, 3))
    // console.log(divingBoard(2, 1118596, 979))
  });
  it('respace', () => {
    console.log(respace(["looked", "just", "like", "her", "brother"], "jesslookedjustliketimherbrother"));
  })
});
