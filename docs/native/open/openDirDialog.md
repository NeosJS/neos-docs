# 打开目录选择框 <BadgeTip text="异步" type="green"></BadgeTip>
打开一个目选择框

:::danger
这是一个<strong>异步</strong>接口。同步弹框会阻塞主进程，故：不通过同步接口
:::

## API
### `nativeApi.openDirDialog(options: <Object>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const paths = await nativeApi.openDirDialog({
  title: '选择文件夹',
  buttonLabel: '就它了'
})
```
:::tip
返回目录的路径地址
:::

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 选择框的配置（可选） | Object | — | —     |
| options['title] | 选择框标题 | String | — | —     |
| options['buttonLabel] | 「确认」按钮的自定义标签 | String | — | —     |
