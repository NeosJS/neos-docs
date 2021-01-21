# 暂停录音 <BadgeTip text="异步" type="green"></BadgeTip>

## API
### `recorder.pause()`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

await recorder.pause()
```


####  事件监听
```js
recorder.on('pause', flag => {
  console.log(flag)
})
```

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| pause | 暂停录音时抛出 | 返回一个 boolean |
