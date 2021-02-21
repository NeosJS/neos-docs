# 关闭录音机 <BadgeTip text="异步" type="green"></BadgeTip>

关闭录音机

## API
### `recorder.close(options: <Object>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.close({
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

const res = await recorder.close()
console.log(res)
```

####  事件监听
```js
recorder.on('close', res => {
  console.log(res)
})
```

## 参数
| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options['success'] | 关闭录音机的成功回调 | function | — | — | 否 |
| options['fail'] | 关闭录音机的失败回调 | function | — | — | 否 |

:::danger
不再需要录音的时候，必须调用此接口，关闭录音，释放资源！
:::
