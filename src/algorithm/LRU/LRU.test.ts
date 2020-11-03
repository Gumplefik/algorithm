import { describe, it } from "mocha";
import { expect } from "chai";
import {LRUCache} from "./LRU";


describe('lru', () => {
    let lru = new LRUCache(5);
    lru.put(1, 11);
    lru.put(2, 22);
    lru.put(3, 33);
    lru.put(4, 44);
    lru.put(5, 55);
    lru.put(6, 66);
    lru.put(5, 12);
    lru.put(3, 22);
    it('lru case 1', () => {
        expect(lru.get(1)).to.equal(undefined);
    })
    it('lru case 2', () => {
        expect(lru.get(3)).to.equal(22);
    })
    it('lru case 3', () => {
        expect(lru.get(5)).to.equal(12);
    })
    it('lru case 4', () => {
        expect(lru.get(-1)).to.equal(undefined);
    })
});

