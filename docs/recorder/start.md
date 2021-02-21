# 开始录音 <BadgeTip text="异步" type="green"></BadgeTip>

录音机开始录音

## API
### `recorder.start(options: <Object>)`
### 

## 示例代码

```js
import recorder from '@neosjs/h5-recorder'

recorder.start({
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

const res = await recorder.start()
console.log(res)
```

####  事件监听
```js
recorder.on('start', res => {
  console.log(res)
})
```

## 参数
| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options['success'] | 录音机开始录音成功回调 | function | — | — | 否 |
| options['fail'] | 录音机开始失败回调 | function | — | — | 否 |
