# 清除本地数据

清除本地 LocalStorage、SessionStorage 数据

:::danger
清除本地数据完成后，APP会自动重启。
:::

## API
### `nativeApi.cleanStorage()`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.cleanStorage()
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 重启APP的参数（可选） | Object | — | —     |

:::tip
options 的配置，详见 [重启应用](relaunchApp.html)
:::
