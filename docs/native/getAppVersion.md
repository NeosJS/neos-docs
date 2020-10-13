# 获取APP版本 <BadgeTip text="异步" type="green"></BadgeTip>
获取APP版本号

## API
### `nativeApi.getAppVersion()`
### 

## 示例代码
```js
import nativeApi from '@neosjs/electron-native'

const version = await nativeApi.getAppVersion()
```
:::tip
返回 package.json 中定义的 version 的值
:::
