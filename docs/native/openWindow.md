# 打开新窗口

打开一个新窗口。

## API

### `nativeApi.openWindow(url, options: <object>)`
###

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.openWindow('https://www.thethinkacademy.com', {
  width: 500,
  height: 500
})
```
## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| url | 需要打开的页面地址 | String | — | —     |
| options | 配置 | Object | — | —     |
| options['width] | 窗口宽度 | Number | — | 主窗口的宽     |
| options['height] | 窗口高度 | Number | — | 主窗口的高     |
| options['frameName] | 窗口类型 | String | modal、target |  target   |

:::info
如果 `frameName` 是  `modal`,新开的窗口将会以一个模态框的形式附在主窗口上。
:::
