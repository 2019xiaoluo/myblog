---
title: 62.不同路径
date: 2022-03-26
tags:
 - 动态规划
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 动态规划类型
## [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)

#### 思路
###### 典型的动态规划，我们可以分几步走。
1.定义dp数组 确定dp数组含义
2.初始化dp数组
3.计算
4.返回结果

这里经过观察可以发现每一格的路径数为上面一格和左边一格的路径数相加

```java
dp[m][n] = dp[m-1][n] + dp[m][n-1]
```

#### 代码
java
```java
class Solution {
    public int uniquePaths(int m, int n) {
        if(m == 1 || n == 1){
            return 1;
        }
        //定义dp数组 初始化
        int dp[][] = new int[m][n];
        dp[0][0] = 1;

        //初始化第一行第一列
        for(int i=1;i<m;i++){
            dp[i][0] = dp[i-1][0];
        }
        for(int j=1;j<n;j++){
            dp[0][j] = dp[0][j-1];
        }
        //计算后面的列
        for(int i=1;i<m;i++){
            for(int j=1;j<n;j++){
                dp[i][j] = dp[i-1][j] + dp[i][j-1]; 
            }
        }
        return dp[m-1][n-1];
    }
}
```

python

```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if m == 1 or n == 1:
            return 1
        # 定义dp数组
        dp = [[0] * n] * m
        # 初始化dp数组
        dp[0][0] = 1
        for i in range(1,n):
            dp[0][i] = dp[0][i-1]
        for j in range(1,m):
            dp[j][0] = dp[j-1][0]
        
        # 计算
        for i in range(1,m):
            for j in range(1,n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
        
        return dp[m-1][n-1]
```

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)