// https://leetcode-cn.com/leetbook/read/tencent/xxk4s2/


// 动态规划


export function longestPalindrome(s: string): string {
  let n = s.length
  if (n < 2) {
    return s
  }
  let dp = new Array(n).fill(new Array(n)), i = 0, ans = ''
  for (let l = 0; l < n; ++l) {
    for (let i = 0; i + l < n; ++i) {
      let j = i + l;
      if (l == 0) {
        dp[i][j] = 1;
      } else if (l == 1) {
        dp[i][j] = (s[i] == s[j]);
      } else {
        dp[i][j] = (s[i] == s[j] && dp[i + 1][j - 1]);
      }
      if (dp[i][j] && l + 1 > ans.length) {
        ans = s.slice(i, l + 1);
      }
    }
  }
  return ans;
}
