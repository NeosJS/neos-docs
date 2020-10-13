# 打开文件选择框 <BadgeTip text="异步" type="green"></BadgeTip>
打开文件选择框

:::danger
这是一个<strong>异步</strong>接口。同步弹框会阻塞主进程，故：不通过同步接口
:::

## API
### `nativeApi.openFileDialog(options: <Object>)`
### 

## 示例代码
```js
import nativeApi from '@neosjs/electron-native'

const res = await nativeApi.openFileDialog()
```
:::tip
返回文件的路径地址
:::

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 选择框的配置 | Object | — | —     |
| options['title] | 选择框标题 | String | — | —     |
| options['buttonLabel] | 「确认」按钮的自定义标签 | String | — | —     |
| options['filters'] | 限制为特定类型时可显示或选择的文件类型 | Array | — | —     |

#### filters 字段示例：
```json
{
  filters: [
    { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
    { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
    { name: 'Custom File Type', extensions: ['as'] },
    { name: 'All Files', extensions: ['*'] }
  ]
}
```
