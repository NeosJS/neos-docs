# 获取录音文件 <BadgeTip text="异步" type="green"></BadgeTip>

## API
### `recorder.getBlob()`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

await recorder.getBlob()
```

####  事件监听
```js
recorder.on('getBlob', res => {
  console.log(res)
})
```

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| getBlob | 获取录音文件时抛出 | 返回一个object。失败时，返回失败原因 |


::: info
该接口会先调用 `stopRecord`
:::
