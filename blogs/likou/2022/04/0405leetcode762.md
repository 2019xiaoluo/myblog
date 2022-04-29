---
title: 762. 二进制表示中质数个计算置位
date: 2022-04-05
tags:
 - 模拟
categories: 
 - 力扣刷题
---

# 力扣刷题记录 
### 模拟
## [762. 二进制表示中质数个计算置位](https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/)

#### 思路
循环遍历范围内的数，统计二进制中含一的个数，判断是否为质数

#### 代码

```java
class Solution {
    public boolean isPrime(int x){
    	// 判断x是否为质数
        if(x == 1 || x == 0){
            return false;
        }
        for(int i=2;i < x;i++){
            if(x % i == 0){
                return false;
            }
        }
        return true;
    }
    public boolean[] getPrime(int len){
    	// 埃式筛选出自定返回内的数
        boolean is[] = new boolean[len+1];
        Arrays.fill(is,true);
        is[0] = false;
        is[1] = false;
        for(int i=2;i<=len;i++){
            if(isPrime(i)){
                is[i] = true;
                for(int j=i+i;j<=len;j=i+j){
                    is[j] = false;
                }
            }
        }
        return is;
    }
    public int countPrimeSetBits(int left, int right) {
    	//打表 这个范围内的1的个数不会超过20
        boolean[] flag = {false, false, true, true, false, true, false, true, false, false, false, true, false, true, false, false, false, true, false, true, false};
        int res = 0;
        for(int i = left;i <= right;i++){
        	// 自定义的选择统计一的个数
            // int cnt = 0;
            // int num = i;
            // while(num != 0){
            //     if( num % 2  == 1){
            //         cnt ++;
            //     }
            //     num = num / 2;
            // }
            
           //使用自带的统计1的个数的函数
            if(flag[Integer.bitCount(i)]){
                res ++;
            }
        }
        return res;
    }
}
```
时间复杂度：O((right-left) * log (sqrt(right)))
空间复杂度：O(1)

#### 参考
[代码随想录刷题集](https://programmercarl.com/0062.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84.html#%E6%80%9D%E8%B7%AF)