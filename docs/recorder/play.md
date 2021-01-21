# 播放录音文件 <BadgeTip text="异步" type="green"></BadgeTip>

## API
### `recorder.play(audioDomId: <String>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

await recorder.play('audioContent')
```

####  事件监听
```js
recorder.on('play', res => {
  console.log(res)
})
```

## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ | ------- |
| audioDomId                | audio的dom           | string | —               | —            | 是 |

## 事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| play | 播放录音文件时抛出 | 返回一个object。失败时，返回失败原因 |
