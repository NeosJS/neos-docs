# 加载URL

主窗口加载一个远程的url

## API
###  `nativeApi.loadUrl(url, options)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.loadUrl('https://www.thethinkacademy.com/')
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| url | 远程url地址 | String | —  | —      |
| options | 参数（可选） | Object | —  | —      |
| options['httpReferrer']| referrer | String、referrer | —  | —      |
| options['userAgent']| 发起请求的 userAgent | String | —  | —      |
