
// https://leetcode-cn.com/problems/diving-board-lcci/

let result: Array<number> = [];
export function divingBoard(shorter: number, longer: number, k: number): number[] {
  result = [];
  if (k < 1 || k === undefined) {
    return []
  }
  let min = shorter * k;
  result.push(min);
  if (shorter === longer) {
    return result
  }
  for (let i = k; i > 0; i--) {
    min = min - shorter + longer;
    result.push(min)
  }
  return result
}



// https://leetcode-cn.com/problems/re-space-lcci/

export function respace(dictionary: string[], sentence: string): number {
  let result = [0];
  let len: number = sentence.length;
  for (let i = 1; i <= len; i++) {
    result[i] = result[i-1] + 1;
    for (let j = i - 1; j >= 0; j--) {
      if (dictionary.includes(sentence.slice(j, i))) {
        result [i] = Math.min(result[i], result[j])
      }
    }
  }
  return result[len]
}
