---
title: 268. 丢失的数字
date: 2022-03-30
tags:
 - 哈希表
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 哈希表
## [268. 丢失的数字](https://leetcode-cn.com/problems/missing-number/submissions/)

#### 思路
将每个数放到hashset中，之后一个循环判断是否存在
#### 代码

```java
class Solution {
    public int missingNumber(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for(int i=0;i<nums.length;i++){
            set.add(nums[i]);
        }

        for(int i=0;i<=nums.length;i++){
            if(!set.contains(i)){
                return i;
            }
        }
        return -1;
    }
}
```
时间复杂度：O(n)
空间复杂度：O(n)

>也可以排序后判断下表是否相同
```java
class Solution {
    public int missingNumber(int[] nums) {
        Arrays.sort(nums);
        for(int i=0;i<nums.length;i++){
            if(i != nums[i]){
                return i;
            }
        }
        return nums.length;
    }
}
```
时间复杂度：O(nlogn)
空间复杂度：O(nlogn)


#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)