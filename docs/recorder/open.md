# 打开录音机 <BadgeTip text="异步" type="green"></BadgeTip>

开始录音之前应该先调用此接口来打开录音机

## API
### `recorder.open(options: <Object>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.open({
  success: res => {
    console.log(res)
  },
  fail: err => {
    console.log(err)
  }
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
recorder.on('open', res => {
  console.log(res)
})
```

## 参数
| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options['success'] | 录音机打开成功回调 | function | — | — | 否 |
| options['fail'] | 录音机打开失败回调 | function | — | — | 否 |

::: info
如果初始化时，设置了 `autoOpen` , 则不再需要调用该接口。
:::
