// https://leetcode-cn.com/leetbook/read/array-and-string/cpoo6/
// http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/


type Node = {
    children?: Node[]
}

export function deepTravel(node: Node) {
    let nodes: Node[] = []
    if (node != null) {
        let temp: Node[] = []
        temp.push(node)
        let cur
        while(cur = temp.pop()) {
            nodes.push(cur)
            let children = cur.children
            if (children === undefined) {
                continue
            }
            for(let i=0; i < children.length; i++) {
                temp.push(children[i])
            }
        }
    }
    return nodes
}

const node = {
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {
                    id: 3,
                    children: undefined
                }
            ]
        },
        {
            id: 4,
            children: [
                {
                    id: 5,
                    children: undefined
                }
            ]
        }
    ]
}
