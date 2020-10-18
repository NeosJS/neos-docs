# 获取客户端信息 <BadgeTip text="异步" type="green"></BadgeTip>

获取客户端的基本信息

## API 接口

### `nativeApi.getClientInfo(callback: <Function>)`
### 

## 示例代码

```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.getClientInfo(info => {
  console.log(info)
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |
