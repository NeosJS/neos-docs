# 打开文件

打开指定的文件。  
提供 **同步** 和 **异步** 两种方法。


## API
### `nativeApi.openFileSync(filePath)` <BadgeTip text="同步" type="blue"></BadgeTip>
### `nativeApi.openFileAsync(filePath)` <BadgeTip text="异步" type="green"></BadgeTip>
### 

## 示例代码
#### 同步
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.openFileSync('index.js')
```

#### 异步
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = nativeApi.openFileAsync('index.js')
```
或者
```js
nativeApi.openFileAsync('index.js').then(() => {
  // 成功
}).catch(() => {
  // 失败
})
```
> 返回 Boolean .   
true -> 清除成功    
fase -> 清除失败

## 参数

| 参数  | 说明     | 类型   | 可选值     | 默认值 | 是否必选 |
| ----- | -------- | ------ | ---------- | ------ | ---- |
| filePath | 文件路径 | String | —      | —      | 是 |
