# 获取媒体状态 <BadgeTip text="异步" type="green"></BadgeTip>

获取麦克风、摄像头等媒体的授权情况

## API
### `nativeApi.getMediaAccessStatus(mediaType, callback)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const accessStatus = await nativeApi.getMediaAccessStatus('microphone') // 获取麦克风的授权情况

// 返回 true 表示已授权, 否则返回 false
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 | 是否必选 |
| ----- | -------- | ------ | ---------- | ------ |------ |
| mediaType | 媒体类型 | String | microphone、camera | —      | 是      |
| callback | 回调 | Function | —  | —      | 否 |
