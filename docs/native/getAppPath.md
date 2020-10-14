# 获取APP路径 <BadgeTip text="异步" type="green"></BadgeTip>
获取APP的安装路径

## API
### `nativeApi.getAppPath()`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const path = await nativeApi.getAppPath()
```
:::tip
返回APP的安装路径地址
:::
