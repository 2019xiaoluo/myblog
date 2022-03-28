---
title: 168. Excel表列名称
date: 2022-03-28
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟
## [168. Excel表列名称](https://leetcode-cn.com/problems/excel-sheet-column-title/)

#### 思路
特殊的26进制，我们每一位减个一就好了
#### 代码

```java
class Solution {
    public String convertToTitle(int columnNumber) {

        StringBuilder sb = new StringBuilder();
        int n = columnNumber;
        // 就是26进制 相当于每一位都要减一 因为是从1开始
        while( n != 0){
            int yu = (n-1) % 26;
            n = (n-1) / 26;
           
            sb.append( (char) ('A' + yu ));
            
        }
        return sb.reverse().toString();

    }
}
```
时间复杂度：O(log26 (n))
空间复杂度：O(log26 (n))

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)