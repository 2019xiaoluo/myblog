---
title: 160. 相交链表
date: 2022-03-27
tags:
 - 链表
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 链表
## [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

#### 思路
我们可以将两个链表的向后对齐，然后从对齐的地方同时开始遍历两个链表，当出现相等的时候，就找到了。

也可以两个指针，一起走完所有节点，如果有相交节点，就退出，如果没有相交，最后都会走到两个为空。
#### 代码
对齐后同时遍历

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public int getCount(ListNode node){
        int count = 0;
        while(node != null){
            node = node.next;
            count ++;
        }
        return count;
    }
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        //获取a b链表的长度
        int na = getCount(headA);
        int nb = getCount(headB);
        //要相交只有可能对齐的后面才会出现相交节点
        //将长的链表的指针向后移动
        if(na > nb){
            int size = na - nb;
            while(size != 0){
                headA = headA.next;
                size --;
            }

        }else if( na < nb){
            int size = nb - na;
            while(size != 0){
                headB = headB.next;
                size --;
            }
        }

        while(headA != null && headB != null){
            if(headA == headB){
                return headA;
            }

            headA = headA.next;
            headB = headB.next;
        }
        return null;
        
    }
}
```

时间复杂度：O(n+m)
空间复杂度：O(1)

双指针
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if(headA == null || headB == null){
            return null;
        }
        ListNode you = headA;
        ListNode she = headB;
        while (you != she){
            // 当you指针走到she指针之后时就改变指向
            // 两个指针同时向后走，直到有缘相交，或者最后相交为null
            you = you != null ? you.next : headB;
            she = she != null ? she.next : headA;
        }
        return you;
        
    }
}
```
时间复杂度：O(n+m)
空间复杂度：O(1)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)