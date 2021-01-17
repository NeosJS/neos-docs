# 停止录音

## API
### `recorder.stop(successCallback: <Function>, failCallback: <Function>, autoClose: <Boolean>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.stop(res => {
  console.log(res)
},
error => {
  console.log(error)
})
```

### async/wait
```js
import recorder from '@neosjs/h5-recorder'

const res = await recorder.stop()
console.log(res)
```


####  事件监听
```js
recorder.on('stop', res => {
  console.log(res)
})
```

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| successCallback | 成功回调 | function | — | — | 否 |
| successCallback | 失败回调 | function | — | — | 否 |
| autoClose | 是否自动关闭录音机 | boolean | — | false | 否 |

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| stop | 停止录音时抛出 | 返回一个object。失败时，返回失败原因 |

::: info
成功停止录音机后。返回 blob数据，录音时长等信息。
:::
