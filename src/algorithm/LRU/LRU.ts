
// 定义单个节点，此处使用双向链表
export class LinkNode{
    public key:number;
    public value:number;
    public prev?:LinkNode;
    public next?:LinkNode;
    constructor(key: number, value:number) {
        this.key = key;
        this.value = value;
    }
}

interface DoubleLinkListInterface {
    addFirst(node: LinkNode): void
    remove(node: LinkNode): void
    removeLast(): LinkNode | void
    size(): number
}

export class DoubleLinkList implements DoubleLinkListInterface {
    public head?:LinkNode;
    constructor() {
    }
    addFirst(node: LinkNode): void {
        node.next = this.head;
        this.head instanceof LinkNode && (this.head.prev = node)
        this.head =  node;
    }

    remove(node: LinkNode): void {
        let flag = this.head;
        while(flag !== undefined) {
            // 匹配到了
            if (flag.key === node.key) {
                // 移除节点
                flag.prev instanceof LinkNode && (flag.prev.next = flag.next);
                flag.next instanceof LinkNode && (flag.next.prev = flag.prev)
                break;
            }
            flag = flag.next
        }
    }

    removeLast(): LinkNode | void{
        let flag = this.head;
        if (!(flag instanceof LinkNode)) {
            return;
        }
        while(flag.next instanceof LinkNode) {
            flag = flag.next
        }
        // 如果节点存在就解绑
        flag.prev instanceof LinkNode && (flag.prev.next = undefined);
        flag.prev = flag.next = undefined;
        return flag
    }

    size(): number {
        let count = 0;
        let flag = this.head;
        while(flag instanceof LinkNode) {
            flag = flag.next;
            count++;
        }
        return count
    }
}


export class LRUCache {
    private map:Map<number, LinkNode>;
    private cache:DoubleLinkList;
    // 最大容量
    private readonly cap:number;
    constructor(capacity: number) {
        this.cap = capacity;
        this.map = new Map();
        this.cache = new DoubleLinkList()
    }

    public get(key: number) : number | undefined {
        if (!this.map.has(key)) {
            return undefined;
        }
        let val = (this.map.get(key) as LinkNode).value;
        this.put(key, val);
        return val;
    }

    public put(key: number, value:number) {
        let x = new LinkNode(key, value);
        if (this.map.has(key)) {
            this.cache.remove(this.map.get(key) as LinkNode);
            this.cache.addFirst(x);
            this.map.set(key, x)
        } else {
            if (this.cap === this.cache.size()) {
                let last = this.cache.removeLast() ;
                last instanceof LinkNode && this.map.delete(last.key)
            }
            this.cache.addFirst(x);
            this.map.set(key, x)
        }
        console.log(this.map.keys())
        console.log(this.map.values())
    }
}


