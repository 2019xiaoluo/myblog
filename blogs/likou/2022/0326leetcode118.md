---
title: 118.杨辉三角
date: 2022-03-26
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 数学模拟
## [118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)

#### 思路
只需要简单的模拟每个过程就可以了
从第三行开始每一行两个一中间的值等于上一行的值两两相加 
#### 代码

```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> res = new ArrayList<>();
        // 初始化第一行和第二行
        if(numRows >= 1){
            res.add(Arrays.asList(1));
        }
        if(numRows >= 2){
            res.add(Arrays.asList(1,1));
        }
        //计算剩下的每一行
        for(int i=2; i < numRows ; i++){
            List<Integer> pre = res.get(i-1);
            //加入第一个1
            List<Integer> cur = new ArrayList<>();
            cur.add(1);
            //将上一行的数字两两相加放入当前行
            for(int j=0; j<pre.size()-1; j++){
                cur.add(pre.get(j) + pre.get(j+1));
            }
            //加入最后一个1
            cur.add(1);

            res.add(cur);
        }
        return res;
    }
}
```

python

```python
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        res = []
        # 初始化第一行和第二行
        if numRows >= 1:
            res.append([1])
        if numRows >= 2:
            res.append([1,1])

        for i in range(2,numRows):
            pre = res[i-1]
            # 初始化当前行
            cur = [1]
            for i in range(len(pre)-1):
                cur.append(pre[i] + pre[i+1])
            cur.append(1)
            # 加入当前行
            res.append(cur)
            
        return res
        
```