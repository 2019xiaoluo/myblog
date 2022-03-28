---
title: 693.交替位二进制数
date: 2022-03-28
tags:
 - 模拟
 - 数学
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟 数学
## [693. 交替位二进制数](https://leetcode-cn.com/problems/binary-number-with-alternating-bits/)

#### 思路
这题就是简单模拟每次比较相邻两位，相同就返回false
#### 代码
```java
class Solution {
    public boolean hasAlternatingBits(int n) {
        // 根据除k取余法 
        // 我们每次对2取余 相邻的两次余数相等就返回false
        int pre = n % 2;
        n = n / 2;
        // 循环对n取余 相除
        while (n != 0){
            int cur = n % 2;
            if(cur == pre){
                return false;
            }
            pre = cur;
            n = n / 2;
        }
        return true;
    }
}


```
时间复杂度：O(n)
空间复杂度：O(n)


这个位运算真的强
```java
        //位运算 将 00...101 和 右移一位 00...010 异或可以得到 a = 00111  a+1 = 01000
        //再将 a 和 a+1 & 运算 就可以得到 0
        int a = n ^ (n >> 1);
        return (a & (a + 1)) == 0 ;
```
时间复杂度：O(1)
空间复杂度：O(1)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)