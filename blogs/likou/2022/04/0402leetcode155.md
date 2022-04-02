---
title: 155. 最小栈
date: 2022-04-02
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟
## [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)

#### 思路
可以使用一个辅助最小栈，这个栈维护着当前元素中的最小值，我们只关心的是最小值，所以如果有更大的值进来，我们不需要入栈，只要重复进入最小值就可以了（方便pop时和栈保持一致）
#### 代码

```java
class MinStack {
    LinkedList<Integer> stack ;
    LinkedList<Integer> minStack ;
    
    public MinStack() {
        stack = new LinkedList<>();
        minStack = new LinkedList<>();
        minStack.addFirst(Integer.MAX_VALUE);
    }
    
    public void push(int val) {
        stack.addFirst(val);
        minStack.addFirst(Math.min(minStack.getFirst(),val));
    }
    
    public void pop() {
        this.stack.pop();
        this.minStack.pop();
    }
    
    public int top() {
        return this.stack.getFirst();
    }
    
    public int getMin() {
        return this.minStack.getFirst();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
```
时间复杂度：O(1)
空间复杂度：O(n)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)