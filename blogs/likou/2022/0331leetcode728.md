---
title: 728. 自除数
date: 2022-03-31
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟
## [728. 自除数](https://leetcode-cn.com/problems/self-dividing-numbers/)

#### 思路
定义一个判断该数是否为自除数的方法，循环遍历范围内部的数
#### 代码

```java
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> res = new ArrayList<>();
        for(int i=left;i<=right;i++){
            if(isDividingNumbers(i)){
                res.add(i);
            }
        }
        return res;
    }
    public boolean isDividingNumbers(int num){
        int tmp = num;
        while(tmp != 0){
            int yu = tmp % 10;
            if(yu == 0 || num % yu != 0){
                return false;
            }
            tmp = tmp / 10;
        }
        return true;
    }
}
```
时间复杂度：O(nlogn)
空间复杂度：O(1)  

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)