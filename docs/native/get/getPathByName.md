# 获取目录地址

## API
### `nativeApi.getPathByName(name: <String>, callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const path = await nativeApi.getPathByName('home')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 | 是否必选 |
| ---- | ------- | ------ | ------ | ------ |------ |
| name | 需要获取地址的目录名称 | name | home, appData, userData, temp, crashDumps, logs, downloads, courseware, updates      | —      | 是 |
| callback | 回调函数（可选） | Function | —      | —      | 否 |
