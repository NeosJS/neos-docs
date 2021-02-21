# 停止录音 <BadgeTip text="异步" type="green"></BadgeTip>

录音机停止录音

## API
### `recorder.stop(options: <Object>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.stop({
  autoClose: true, // 自动关闭录音机
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

const res = await recorder.stop()
console.log(res)
```


####  事件监听
```js
recorder.on('stop', res => {
  console.log(res)
})
```

## 参数
| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options['success'] | 成功回调 | function | — | — | 否 |
| options['fail'] | 失败回调 | function | — | — | 否 |
| options['autoClose'] | 是否自动关闭录音机 | boolean | — | false | 否 |

::: info
成功停止录音机后。返回 blob数据，录音时长等信息。
:::
