# 初始化

初始化涂鸦画板的一些配置。


## API
### `graffiti.init(options: <Object>)`
### 

## 示例代码
```js
import graffiti from '@neosjs/h5-graffiti'

graffiti.init({
  dom: 'tuya',
  width: 800,
  height: 600,
  background: 'https://xxxxx.xxxx.com/xxxxxx.png',
  quality:0.8,
  waterMark: {
    url: 'https://xxxxx.xxxx.com/water.png',
    postion: 'top-left'
  }
})
```

## 参数

| <div style="width:280px">参数</div>                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选|
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options = {}                | 初始化涂鸦画板参数           | Object | —               | —            | 是 |
|options['dom']| 画板所在容器(ID选择器) | String | —               | —            | 是 |
|options['width']| 画板宽度 | Number | —               | 1024            | 否 |
|options['height']| 画板高度 | Number | —               | 768            | 否 |
|options['background']| 画板背景图片 | String | —               | —            | 否 |
|options['quality']| 图片保存的质量 | String | —               | 0.75            | 否 |
|options['ext']| 图片保存的后缀 | String | —               | jpg            | 否 |
|options['lineSize']| 画笔初始尺寸 | Number | —               | 2            | 否 |
|options['lineColor']| 画笔初始颜色 | String | —               | #000000            | 否 |
|options['waterMark']| 水印设置 | Object | —               | —            | 否 |
|options['waterMark']['url']| 水印图片地址 | String | —               | —            | 否 |
|options['waterMark']['postion']| 水印图片位置 | String | `top-left`、`top-right`、`bottom-left`、`bottom-right`、`center`              | `top-left`            | 否 |
