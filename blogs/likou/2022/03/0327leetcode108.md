---
title: 108. 将有序数组转换为二叉搜索树
date: 2022-03-27
tags:
 - 二叉树
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 二叉树
## [108. 将有序数组转换为二叉搜索树](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/)

#### 思路
每一次将有序数组中间的数字拿出来构造节点，然后递归构建左节点和右节点即可。
#### 代码

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode build(int[] nums,int start,int end){
        if(start >= end){
            return null;
        }
        int mid = (start + end) / 2;
        TreeNode root = new TreeNode(nums[mid]);
        root.left = build(nums,start,mid);
        root.right = build(nums,mid+1,end);
        return root;
        
    }
    public TreeNode sortedArrayToBST(int[] nums) {
        if(nums.length == 1){
            return new TreeNode(nums[0]);
        }
        return build(nums,0,nums.length);
    }
}
```
时间复杂度：O(n)
空间复杂度：O(n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)%AF)