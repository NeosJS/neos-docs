# 初始化相机

初始化相机的配置。   
初始化完成后，后续的API才能生效。

## API
### `camera.init(options: <Object>)`
### 

## 示例代码
```js
import camera from '@neosjs/h5-camera'

camera.init({
  cameraDom: 'cameraDiv',
  previewDom: 'previewDiv',
  width: 500,
  ratio: '4:3',
  quality: 0.6,
  ext: 'jpeg'
})
```

## 参数

| <div style="width:280px">参数</div>                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选|
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options = {}                | 初始化涂鸦画板参数           | Object | —               | —            | 是 |
|options['cameraDom']| 相机所在容器(ID选择器) | String | —               | —            | 是 |
|options['previewDom']| 拍照的预览容器(ID选择器) | String | —               | —            | 否 |
|options['width']| 相机容器宽度 | Number | —               | —            | 是 |
|options['height']| 相机容器高度 | Number | —               | —            | 否 |
|options['audio']| 是否采集音频 | Boolean | —               | false            | 否 |
|options['ratio']| 相机缩放比 | String | `4:3`、`16:9`               | 4:3            | 否 |
|options['quality']| 图片保存的质量 | String | —               | 0.75            | 否 |
|options['ext']| 图片保存的后缀 | String | —               | png            | 否 |
|options['autoCollect']| 相机初始化完成后，是否自动开始采集视频 | Boolean | —               | true            | 否 |

:::info
如果同时设置了 `width` 和 `height`, 那么相机的尺寸将以设定值为准。  
`width` 和 `height` 二选一的时候，将根据 `ratio` 进行等比缩放。
:::
