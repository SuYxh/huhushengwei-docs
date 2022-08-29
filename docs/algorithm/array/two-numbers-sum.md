### 方法一：暴力循环

第一层循环数组元素，第二层循环从i+1起，逐个对比，看有没有加起来和为输入值的。

```js
export function findTowNumbers1(arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  // O(n^2)
  for (let i = 0; i < length - 1; i++) {
    const n1 = arr[i]
    let flag = false // 是否得到了结果

    for (let j = i + 1; j < length; j++) {
      const n2 = arr[j]

      if (n1 + n2 === n) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }

    if (flag) break
  }

  return res
}
```





### 方法二：双指针

两个指针，一前一后，分别向中间靠拢，逐步判断两个指针对应的值是否符合要求。如果两个指针对应的数之和大于给定的值，那么尾指针前移，如果小于给定的值那么头指针后移。

```ts
export function findTowNumbers2(arr: number[], n: number): number[] {
  const res: number[] = []

  const length = arr.length
  if (length === 0) return res

  let i = 0 // 头
  let j = length - 1 // 尾

  // O(n)
  while (i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    const sum = n1 + n2

    if (sum > n) {
      // sum 大于 n ，则 j 要向前移动
      j--
    } else if (sum < n) {
      // sum 小于 n ，则 i 要向后移动
      i++
    } else {
      // 相等
      res.push(n1)
      res.push(n2)
      break
    }
  }

  return res
}
```





