# 重启应用

从当前实例退出，重启应用。

## API
### `nativeApi.relaunchApp(options)`
### 

## 示例代码
```js
import nativeApi from '@neosjs/electron-native'

nativeApi.relaunchApp()

// 带参数
nativeApi.relaunchApp({ args: process.argv.slice(1).concat(['--relaunch']) })
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 重启时的参数 | Object | — | —     |
