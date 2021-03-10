# 清除本地缓存文件

清除本地缓存的文件。  
提供 **同步** 和 **异步** 两种方法。


## API
### `nativeApi.cleanFilesSync()` <BadgeTip text="同步" type="blue"></BadgeTip>
### `nativeApi.cleanFilesAsync()` <BadgeTip text="异步" type="green"></BadgeTip>
### 

## 示例代码
#### 同步
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.cleanFilesSync()
```

#### 异步
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.cleanFilesAsync()
```
或者
```js
nativeApi.cleanFilesAsync().then(() => {
  // 成功
}).catch(() => {
  // 失败
})
```
> 返回 Boolean .   
true -> 清除成功    
fase -> 清除失败
