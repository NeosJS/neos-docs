# 网速上报

在一段时间内，通过连续请求某个远端地址，取其平均耗时，来上报当前网速

## API
### `netApi.reportNetSpeed(options: <Object>, times: <Number>, callback: <Function>)`
### 

## 示例代码
```js
import { netApi } from '@neosjs/electron-ipc'

netApi.reportNetSpeed(
  {
    url: 'https://xxxxxxx.xxxxx.com/xxxxx',
    method: 'POST',
    params: {
      type: 0
    },
    timeout: 10000
  },
  10,
  res => {
    console.log(res)
  }
)
```

> times 可以省略，直接写回调。例如：
```js
netApi.reportNetSpeed(
  {
    url: 'https://xxxxxxx.xxxxx.com/xxxxx',
    method: 'GET',
    params: {
      type: 0
    },
    timeout: 10000
  },
  res => {
    console.log(res)
  }
)
```
> 当不需要传入额外的参数时，`options` 可为一个 字符串。 例如：

```js
netApi.reportNetSpeed('https://xxxxxxx.xxxxx.com/xxxxx', 10, res => {
  console.log(res)
})
```

## Async/Await 用法

```js
import { netApi } from '@neosjs/electron-ipc'

const reportRes = await netApi.reportNetSpeed('https://xxxxxxx.xxxxx.com/xxxxx',10)
```

####  事件监听
```js
downloaderApi.on('reportNetSpeed', res => {
  console.log(res)
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| options | 配置项 | Object | —      | —      | 是      |
| options['url'] | 远端地址 | String | —      | —      | 是      |
| options['method'] | 请求方式 | String | GET、POST      | GET      | 否      |
| options['timeout'] | 超时时间 (毫秒) | Number | —      | 15000      | 否      |
| options['params'] | 请求参数 | Object | —      | —      | 否      |
| times | 请求总时长（秒） | Number | —      | 10      | 否      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回数据

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| all | 请求总数 | Number |
| success | 请求成功次数 | Number |
| avg | 平均耗时（毫秒） | Number |
| rate | 成功率 | Number |
