---
title: 63. 不同路径 II
date: 2022-03-27
tags:
 - 动态规划
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 动态规划
## [63. 不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)

#### 思路
和62不同路径是一样的，每一格的路径数等于它的上面一格和左边一格的路径数之和，唯一区别是当有障碍物时该格子的路径数为0
#### 代码

```java
class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;
        //定义dp数组
        int dp[][] = new int[m][n];
        if(obstacleGrid[0][0] == 0){
             dp[0][0] = 1;
        }
        //初始化dp数组 原则遇到障碍物时我们将路径数置为0
        for(int i=1;i<m;i++){
            if(obstacleGrid[i][0] == 1){
                dp[i][0] = 0;
            }else{
                dp[i][0] = dp[i-1][0];
            }
        }
        for(int i=1;i<n;i++){
            if(obstacleGrid[0][i] == 1){
                dp[0][i] = 0;
            }else{
                dp[0][i] = dp[0][i-1];
            }
        }
        //计算dp
        for(int i=1;i<m;i++){
            for(int j=1;j<n;j++){
                if(obstacleGrid[i][j] == 0){
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
                }else{
                    dp[i][j] = 0;
                }
                
            }
        }
        return dp[m-1][n-1];
    }
}
```
时间复杂度：O(m*n)
空间复杂度：O(m*n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)