# 生成快照 <BadgeTip text="异步" type="green"></BadgeTip>
获取屏幕或窗口的快照图片

## API
### `nativeApi.snapShot(options: <Object>)`

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const filePath = await nativeApi.snapShot({
  type: 'window',
  ext: 'png'
})

// 拍摄当前激活的窗口快照，保存成png图片，并返回图片路径
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| options | 拍摄快照的参数。（可选） | Object | —| —|
| options['width'] | 保存图片的宽度 | Number |  —  | 1200      |
| options['height'] | 保存图片的高度 | Number |  —  | 7200      |
| options['savePath'] | 图片保存的路径 | String |  —  | 本机的桌面      |
| options['ext'] | 保存图片的后缀名 | String |  png、jpeg  | jpg      |
| options['type'] | 快照类型。（支持 `屏幕快照` 和 `窗口快照`） | String |  screen、window  | window      |
