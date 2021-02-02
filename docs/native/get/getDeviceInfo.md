# 获取设备信息

获取设备的基本信息。

## API
### `nativeApi.getDeviceInfo(callback: <Function>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const deviceInfo = await nativeApi.getDeviceInfo()
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| cpuModel | CPU型号 | String |
| cpuArch |  CPU位数 | String |
| osVersion | 客户端OS版本号 | String |
| platform | 平台类型 | String |
| totalMem | 设备内存大小 | String |
| usageMem | 当前系统已使用内存。(**实时使用率**) | String |
| uptime | 系统运行总时间。(秒) | Number |
| appUsageMem| 当前应用使用的内存。(**实时使用率**) | String |
| appUsageCPU| 当前应用使用CPU百分比。(**实时使用率**) | String |
| appVersion | 当前运行的APP版本号| String |

::: info
  `appUsageMem`, `appUsageCPU`, `usageMem` 是当前设备的实时信息。
:::
