# 更改设备ID

# API
### `camera.changeDeviceId(deviceId: <String>)`
### 

## 示例代码

```js
import camera from '@neosjs/h5-camera'

camera.changeDeviceId('qweqeqwe12312asdasd')
```

## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| deviceId | 摄像头设备ID | String | — | — | 否 |

:::info 
`deviceId` 可通过 [getDeviceLists](getDeviceLists.html) 获得。
:::
