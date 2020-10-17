# 打开文件或文件夹(Deprecated) <BadgeTip text="弃用" type="danger"></BadgeTip>
调用系统打开文件或文件夹

:::danger
该API即将弃用，请使用 [`openDirBySystem`](openDirBySystem.html) 和 [`openFileBySystem`](openFileBySystem.html) 代替！
:::


## API
### ~~`nativeApi.openFileOrDirBySystem(path: <String>)`~~
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.openFileOrDirBySystem('/User/xxxxx')
```
