# 获取最快的域名

在给定的一组域名列表里，获取到当前网络节点最快的一个域名。哪个资源先返回信息，谁就最快。

## API
### `netApi.getFastDomain(options: <Array|String>, callback: <Function>)`
### 

## 示例代码
```js
import { netApi } from '@neosjs/electron-ipc'

netApi.getFastDomain([
  'https://xxxxx.yyyyy.com/test.png',
  'https://yyyyy.xxxxx.com/test.png'
], res =>{
  console.log(res)
})
```

## Async/Await 用法

```js
import { netApi } from '@neosjs/electron-ipc'

const reportRes = await netApi.getFastDomain([
  'https://xxxxx.yyyyy.com/test.png',
  'https://yyyyy.xxxxx.com/test.png'
])
```
## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 |必选 |
| ---- | ------- | ------ | ------ | ------ | ------ |
| options | 远端地址列表 | Array | —      | —      | 是      |
| callback | 回调 | Function | —      | —      | 否      |

## 返回值
| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| fastDomain | 离当前网络节点最快的域名 | String |
