# 恢复录音

## API
### `recorder.resume()`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

await recorder.resume()
```

####  事件监听
```js
recorder.on('resume', flag => {
  console.log(flag)
})
```

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| resume | 恢复录音时抛出 | 返回一个 boolean |
