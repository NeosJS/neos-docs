# 打开录音机 <BadgeTip text="异步" type="green"></BadgeTip>

开始录音之前应该先调用此接口来打开录音机

## API
### `recorder.open(successCallback: <Function>, failCallback: <Function>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.open(res => {
  console.log(res)
},
error => {
  console.log(error)
})

```

### async/wait
```js
import recorder from '@neosjs/h5-recorder'

const res = await recorder.open()
console.log(res)
```
####  事件监听
```js
recorder.on('open', flag => {
  console.log(flag)
})
```

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| open | 打开录音机时抛出 | 返回一个 boolean |

::: info
如果初始化时，设置了 `autoOpen` , 则不再需要调用该接口。
:::
