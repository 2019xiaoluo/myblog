---
title: 343. 整数拆分
date: 2022-03-28
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 动态规划
## [343. 整数拆分](https://leetcode-cn.com/problems/integer-break/)

#### 思路
动态规划五步走，dp数组怎样遍历
dp数组记录拆分的乘积最大值

两层for循环去获得j的拆分
#### 代码

```java
class Solution {
    public int integerBreak(int n) {
        int dp[] = new int[n+1];
        //初始化dp数组dp[2] = 1
        dp[2] = 1;
        for(int i=3;i<=n;i++){
            for(int j=1;j<i-1;j++){
                // j * i-j 这个循环中相当于拆分了 j
                // dp[i-j] 相当于拆分了i - j 
                dp[i] = Math.max(dp[i],Math.max( j * (i-j) , j * dp[i-j]));
            }
        }
        return dp[n] ;
    }
}


```
时间复杂度：O(n*n)
空间复杂度：O(n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)