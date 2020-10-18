# 获取窗口尺寸 <BadgeTip text="异步" type="green"></BadgeTip>
获取当前主窗口的宽高

## API
### `nativeApi.getWindowSize(callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.getWindowSize()
```
### 返回值

```json
{
  width: xxx,
  height: xxx
}
```


## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |
| ---- | ------- | ------ | ------ | ------ |
| callback | 回调函数（可选） | Function | —      | —      |
