---
title: 77. 组合
date: 2022-03-31
tags:
 - 回溯
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 回溯
## [77. 组合](https://leetcode-cn.com/problems/combinations/)

#### 思路
回溯算法加剪枝，递归遍历每一层的，加入到数组中，回溯时移除该数字

剪枝优化，判断可能还能加入几个数 k - path.size()    n - (k-pah.size()) + 1
#### 代码

```java
class Solution {
    List<List<Integer>> res;
    public List<List<Integer>> combine(int n, int k) {
       res = new ArrayList();
       dfs(n,k,new ArrayList<>(),1);
       return res;
    }
    public void dfs(int n,int k,List<Integer> path,int start){
        if(path.size() == k){
            res.add(new ArrayList<>(path));
            return;
        }
        for(int i=start;i<= n - (k - path.size()) + 1 ;i++){
            path.add(i);
            dfs(n,k,path,i+1);
            path.remove(path.size()-1);
        }

    }
}
```
时间复杂度：O( k * C(n,k))
空间复杂度：O(n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)