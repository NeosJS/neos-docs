# 剪贴板

在系统剪贴板上执行复制和粘贴操作


## 写入
### `nativeApi.clipboard.write(content: <String>, [type='text': <String>])`
### 

### 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.clipboard.write('测试文本') // 写入纯文本
nativeApi.clipboard.write('<h1>测试文本</h1>', 'html') // 写入html
```

## 读取
### `nativeApi.clipboard.read([type='text': <String>])`
### 

### 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const text = nativeApi.clipboard.read() // 读取剪贴板的文本内容
const html = nativeApi.clipboard.read('html')  // 读取剪贴板html内容
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| content | 需要写入剪贴板的内容 | String | — | —     |
| type | 写入类型 | String | text、image、html | text    |
