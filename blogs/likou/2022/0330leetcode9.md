---
title: 9. 回文数
date: 2022-03-30
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟
## [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)

#### 思路
将数字转换成字符串逐一比较即可

#### 代码

```java
class Solution {
    public boolean isPalindrome(int x) {
        String  s = String.valueOf(x);
        int l = 0;
        int r = s.length() - 1;
        while(l < r){
            if(s.charAt(l) != s.charAt(r)){
                return false;
            }else{
                l ++;
                r --;
            }
        }
        return true;
    }
}
```
时间复杂度：O(n)
空间复杂度：O(n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)