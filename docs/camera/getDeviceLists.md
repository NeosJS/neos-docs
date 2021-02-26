# 获取相机列表

获取当前设备上的摄像头列表

当设备有变化时，会抛出`deviceChanged`消息，并返回新的设备列表。

# API
### `camera.getDeviceLists(callback: <Function>)`
### 

## 示例代码

```js
import camera from '@neosjs/h5-camera'

camera.getDeviceLists({
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

const res = await camera.getDeviceLists()
```

####  事件监听
```js
import camera from '@neosjs/h5-camera'

camera.on('deviceChanged', res => {
  console.log(res)
})
```

## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options['success'] | 成功回调 | function | — | — | 否 |
| options['fail'] | 失败回调 | function | — | — | 否 |


## 相关事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| deviceChanged | 当输入输出设备有变化时抛出 | 设备更改后的列表 |
