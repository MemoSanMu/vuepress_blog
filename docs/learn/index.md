# 好好学习 天天向上
## 数组扁平化
```
const arr = [1, 1, 2, 3, [3 , 4, 5, 6, [7, 8, [666, 8888]]]]
方法一 普通循环：
function flotArray (array) {
    let result = [] 
    for (let i = 0; i < array.length; i++) {
        result = Array.isArray(array[i]) ? result.concat(flotArray(array[i])) : result.concat(array[i])
    }
    return result
}
方法二 reduce 方法：
 function flotArray (array) {
    return array.reduce((cur, next) => cur.concat(Array.isArray(next) ? flotArray(next) : next), [])
}
方法三 while语句循环调用：
function flotArray (array) {
    while (array.some(item => Array.isArray(item))) {
        array = [].concat(...array)
    }
    return array
}
console.log(flotArray(arr), 'floatrray')
```
## 简单版深复制

```
const objs = {
    a: 2,
    b: 4,
    arr: [1, 3, 5, [{oj: {a: 'c'}}]],
    fun: function() {},
    ob2: {
        a: 'fff',
        arr2: [2]
    }
}
function deepClone (obj) {
    const isObject = Object.prototype.toString.call(obj) === '[object Object]'
    let result
    if (isObject) {
        const isArray = Array.isArray(obj)
        result = isArray ? [] : {}
        for (let key in obj) {
            result[key] = isArray ? deepClone(obj[key]) : obj[key]
        }
    } else {
        result = obj
    }
    return result
}
// console.log(deepClone(objs), 'objs');
```
## 防抖节流

```
// 节流 实现思路：在设定的执行器内重复调用方法，不予执行直接返回，直至特定时间内执行器执行完毕，再接着执行下一个执行器。
function throttle (cb, delay) {
    let timer 
    return function (...arg) {
        if (timer) clearTimeout(timer)
        const _that = this
        timer = setTimeout(() => {
            cb.apply(_that, arg)
        }, delay)
    }
}

// 防抖 时间思路：首先设定一个执行器，重复触发执回调则清空上次设定的执行器不予执行，直至执行最后一次触发。
function debounce (cb, delay) {
    let timer 
    return function (...arg) {
        if (timer) return   
        const _that = this
        timer = setTimeout(() => {
            cb.apply(_that, arg)
            timer = null
        }, delay)
    }
}
```
## 数组乱序

```
function arrarSort (arr) {
    return arr.sort((a, b) => Math.random() - .5)
}
```
## 阶乘

```
function factorial(n) {
    if (n == 1) return n;
    return n * factorial(n - 1)
}
console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1 = 120
```

## 二分查找

```
function bin2(arr, value) {
    let a = 0,
        b = arr.length-1;
    while (a <= b) {
        let mid = parseInt((a + b) / 2)
        console.log(mid);
        if (arr[mid] === value) {
            return mid
        } else if (arr[mid] < value) {
            a = mid + 1
        }  else if (arr[mid] > value) {
            b = mid - 1
        } else {
            return -1
        }
    }
}
const bin2Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(bin2(bin2Arr, 20), '20 index');
```
