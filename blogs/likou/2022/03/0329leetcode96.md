---
title: 96. 不同的二叉搜索树（卡塔兰数）
date: 2022-03-29
tags:
 - 动态规划
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 动态规划
## [96. 不同的二叉搜索树](https://leetcode-cn.com/problems/unique-binary-search-trees/)

#### 思路
>我们固定一个节点，那么左右子树的分布情况为n-1=n-1 + 0 = n-2 + 1 = … = 1 + n-2 = 0 + n-1。此时递归表达式为f(n) = f(n-1) + f(n-2)f(1) + f(n-3)f(2) + … + f(1)f(n-2) + f(n-1)

这就是卡塔兰数，我们通过固定一个节点，来递归找寻它的左子树，右子树
有了递归式我们就可以很简单dp了

也可以用下面的公式计算
![在这里插入图片描述](https://img-blog.csdnimg.cn/0ef5251334d84081aa0502ede6bed3a4.png)


#### 代码

```java
class Solution {
    public int numTrees(int n) {
        if( n == 1){
            return 1;
        }
        int dp[] = new int[n+1];
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        for(int i=3;i<=n;i++){
            //计算递推式的结果
            for(int j=1;j<=i;j++){
                dp[i] += dp[j-1] * dp[i-j];
            }
        }
        return dp[n];
    }
}
 

```
时间复杂度：O(n*n)
空间复杂度：O(n)

#### 参考
[博客](https://blog.csdn.net/qq_42247496/article/details/83661496)
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)