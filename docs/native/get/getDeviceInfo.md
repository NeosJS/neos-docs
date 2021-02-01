# 获取设备信息

获取客户端基本信息。

## API
### `nativeApi.getDeviceInfo()`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const deviceInfo = await nativeApi.getDeviceInfo()
```

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| cpuModel | CPU型号 | String |
| ip | 客户端出口IP地址 | Number |
| osVersion | 客户端OS版本号 | String |
| platform | 平台类型 | String |
| totalMem | 设备内存大小 | String |
| usageMem | 当前已使用内存 | String |
| appVersion | 当前运行的APP版本号| String |
