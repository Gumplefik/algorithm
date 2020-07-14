// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得关键字 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得关键字 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lru-cache
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

export class LRUCache {
    public caches: Map<string, number>
    public size: number
    constructor(capacity: number) {
        this.caches = new Map<string, number>()
        this.size = capacity
    }

    get(key: number): number {
        let cacheKey = key + ""
        let val = this.caches.get(cacheKey)
        if (val !== undefined) {
            this.caches.delete(cacheKey)
            this.caches.set(cacheKey, val)
        } else {
            val = -1
        }
        return val
    }

    put(key: number, value: number): void {
        let cacheKey = key + ""
        if (this.caches.size >= this.size && !this.caches.has(cacheKey)) {
            this.caches.delete(this.caches.keys().next().value)
        }
        this.caches.delete(cacheKey)
        this.caches.set(cacheKey, value)
    }
}
