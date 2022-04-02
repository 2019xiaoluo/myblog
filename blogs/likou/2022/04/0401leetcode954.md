---
title: 954. 二倍数对数组
date: 2022-04-01
tags:
 - 哈希表
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 哈希表
## [954. 二倍数对数组](https://leetcode-cn.com/problems/array-of-doubled-pairs/)

#### 思路
一开始只想到按绝对值排序，之后相邻的两个数成两倍关系，显然，如果有多个重复的数不能这样，能通过前80多个用例。

用hash表记录每个数出现的数量，这样可以去重。首先判断0的数量是否为奇数，肯定不行。在将哈希表的key按绝对值排序，判断x 和 2x的个数就可以了

#### 代码

```java
class Solution {
    public boolean canReorderDoubled(int[] arr) {
        Map<Integer,Integer> map = new HashMap<>();
        for(int i = 0;i<arr.length;i++){
            map.put(arr[i],map.getOrDefault(arr[i],0)+1);
        }
        if(map.getOrDefault(0,0) % 2 != 0 ){
            return false;
        }

        List<Integer> list = new ArrayList<>();
        for(Integer num : map.keySet()){
            list.add(num);
        }
        Collections.sort(list,(a,b)->Math.abs(a) - Math.abs(b));

        for(int num : list){
            if(map.get(num) > map.getOrDefault(2 * num,0)){
                return false;
            }
            map.put(2 * num,map.getOrDefault(2 * num,0) - map.get(num));
        }
        return true;
    }
}
```
时间复杂度：O(n log n)
空间复杂度：O(n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)