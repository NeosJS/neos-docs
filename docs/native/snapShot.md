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
#### 返回缩略图示例
```js
import { nativeApi } from '@neosjs/electron-ipc'

const filePath = await nativeApi.snapShot({
  thumbnailWidth: 300,
  thumbnailQuality: 0.5,
  type: 'window',
  ext: 'png'
})

// 生成宽为300像素并压缩50%的缩略图
```
## 返回值
```json
{
  fileName: 'xxxxxxxx.png',
  filePath: '/User/xxxxxxx/,
  thumbnail: 'data:image/jpeg;base64,aadjxixizixczixcuzoxc' // 缩略图的返回，取决于是否设置了 thumbnailWidth
}
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
| options['thumbnailWidth'] | 缩略图宽 | Number |  —   | —    |
| options['thumbnailQuality'] | 缩略图质量。（取值范围 0 -- 1） | String |  —   | 0.8   |

:::info
设置了 `thumbnailWidth` 缩略图将按照`thumbnailWidth`进行等比缩放，并返回一个base64的图片。

不设置 `thumbnailWidth`，将不会生成缩略图。
:::
