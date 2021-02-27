# 视频采集

采集指定设备ID的视频

# API
### `camera.startCapture(deviceId: <String>)`
### 

## 示例代码

```js
import camera from '@neosjs/h5-camera'

camera.startCapture({
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
import camera from '@neosjs/h5-camera'

const res = await camera.startCapture()
```

####  事件监听
```js
import camera from '@neosjs/h5-camera'

camera.on('capture', res => {
  console.log(res)
})
```

## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| deviceId | 设备ID | function | — | — | 否 |


## 相关事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| capture | 返回当前是否处于视频采集中 | false |

:::info 
`deviceId` 可通过 [getDeviceLists](getDeviceLists.html) 获得。

`deviceId` 传空，将使用系统默认的设备。
:::
