# 获取设备列表 <BadgeTip text="异步" type="green"></BadgeTip>

获取当前系统的输入设备列表。

当设备有变化时，会抛出`deviceChange`消息，并返回新的设备列表。

# API
### `recorder.getDeviceLists(callback: <Function>)`
### 

## 示例代码
```js
import recorder from '@neosjs/h5-recorder'

const res = await recorder.getDeviceLists()
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| callback | 回调信息 | Function | —      | —      | 否      |


## 相关事件
| 名称                        | 说明                       | 返回值   |
| --------------------------- | -------------------------- | ------ |
| deviceChange | 当输入输出设备有变化时抛出 | 设备更改后的列表 |

### 示例代码
```js
import recorder from '@neosjs/h5-recorder'

recorder.on('deviceChange', res => {
  console.log(res)
})
```
