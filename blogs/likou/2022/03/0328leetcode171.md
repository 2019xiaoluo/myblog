---
title: 171. Excel 表列序号
date: 2022-03-28
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟
## [171. Excel 表列序号](https://leetcode-cn.com/problems/excel-sheet-column-number/submissions/)

#### 思路
这个要注意26进制 是从一开始的

#### 代码

```java
class Solution {
    public int titleToNumber(String columnTitle) {
        int res = 0;
        int pow = 1;
        for(int i=columnTitle.length()-1;i>=0;i--){
            // 这个加一表示从一开始的26进制嘛
            res += (columnTitle.charAt(i) - 'A' + 1 ) * pow;
            pow *= 26;
        }
        return res;
    }
}
```
时间复杂度：O(n)
空间复杂度：O(1)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)