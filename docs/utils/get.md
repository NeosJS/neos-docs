# 工具类

> 即将发布

```js
import { utilsApi } from '@neosjs/electron-ipc'
```

#### 获取当前平台
### `utilsApi.getPlatform()`

#### 字节转换
### `utilsApi.bytesToSize(bytes)`
 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| bytes | 字节数 | Number | —      | —      | 是      |

#### 格式化时间
### `utilsApi.formatTime(formats,timestamp)`
 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| formats | 格式 | String | Y, M, D, H, m, s, S      | Y-M-D      | 否      |
| timestamp | 时间戳 | String | —      | new Date()      | 否      |

#### 格式化参数
### `utilsApi.formatParams(params)`
 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| params | 参数 | Object | —      | —      | 是      |

#### 获取文件名
### `utilsApi.getFileName(url)`
 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| url | 文件地址 | String | —      | —      | 是      |

#### 获取域名
### `utilsApi.getDomain(url)`
 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| url | 文件地址 | String | —      | —      | 是      |

#### 获取指定范围内的随机数
### `utilsApi.randomNum(min, max)`
 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| min | 起始值 | Number | —      | —      | 是      |
| max | 结束 | Number | —      | —      | 是      |

