# 打开系统偏好设置 <BadgeTip text="异步" type="green"></BadgeTip> <BadgeTip text="macOS" type="danger"></BadgeTip>

打开macOS的系统偏好设置面板

:::danger
这是一个<strong>macOS</strong>接口。window系统无效！  
:::

## API
### `nativeApi.openPreferences(pane: <String>, section: <String>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

await nativeApi.openPreferences('security', 'camera') // 打开 隐私面板 --->  摄像头
await nativeApi.openPreferences('security', 'microphone') // 打开 隐私面板 --->  麦克风
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 | 是否必填 | 
| ----- | -------- | ------ | ---------- | ------ |------ |
| pane | 需要打开的面板 | String | —  | —     | 是 |
| section | 打开的设置项 | String | — | —     | 否 |

### pane 可选值
| 名称 | 说明 | 
|---| --- | 
| security | 隐私 |
| universalaccess | 辅助功能 | 
| notifications | 通知 |

### section(security) 可选值
| 名称 | 说明 | 
|---|---|
|camera | 摄像头| 
| microphone | 麦克风| 
| photos |照片 | 
| locationServices | 位置服务 |
| reminders |提醒事项|
