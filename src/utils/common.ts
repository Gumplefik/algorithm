let cache: Array<number> = []

export function factorialize(num: number) {
    if (!isNotOrEmpty((cache[num]))) {
        return cache[num];
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;


}


export function  isNotOrEmpty(val: any) {
    return val === undefined || val === null
}

export function stringify(val: any) : string {
    return JSON.stringify(val)
}
