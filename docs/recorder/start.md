# 开始录音

## API
### `recorder.start()`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

const res = await recorder.start()

// 返回
// {
//   errCode: 0 || -1
// }
```

####  事件监听
```js
recorder.on('start', res => {
  console.log(res)
})
```

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| start | 开始录音时抛出 | 返回一个 object。失败时，返回失败原因 |
