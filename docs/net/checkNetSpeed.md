# 网络测速

请求指定的远端资源。返回请求耗时、速度(kb/s)等信息。

远端资源可以是多个，也可以是一个。

## API
### `netApi.checkNetSpeed(options: <Array|String>, callback: <Function>)`
### 

## 示例代码
```js
import { netApi } from '@neosjs/electron-ipc'

netApi.checkNetSpeed(
  [
    'https://xxxxx.yyyyy.com/test.png',
    'https://yyyyy.xxxxx.com/test.png'
  ],
  res => {
    console.log(res)
  }
)
```
> 请求单个地址
```js
netApi.checkNetSpeed('https://xxxxx.yyyyy.com/test.png', res => {
    console.log(res)
  }
)
```

## Async/Await 用法

```js
import { netApi } from '@neosjs/electron-ipc'

const reportRes = await netApi.checkNetSpeed('https://xxxxxxx.xxxxx.com/xxxxx')
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| options | 远端地址列表 | Array、String | —      | —      | 是      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| speed | 下载速度 | String |
| status | http标准状态码 | Number | 
| time | 请求耗时 | Number | 
| url | 当前请求的地址 | String | 
