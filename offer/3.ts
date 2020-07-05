export function findRepeatNumber(nums: number[]): number {
  let r: Map<number, number> = new Map();
  for(let i = 0, l=nums.length; i < l; i++) {
      let val: number = nums[i];
      let n: number = r.get(val) || 0;
      if (n > 0) {
          return val;
      }
      r.set(val, n + 1);
  }
  return 0;
}
