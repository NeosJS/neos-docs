# 初始化

初始化点赞的配置。

## API
### `like.init(options: <Object>)`
### 

## 示例代码
```js
import like from '@neosjs/h5-like'

like.init({
  icons: ['1.png', '2.png'],
  btnDom: 'likeBtn',
  flyDom: 'likeFly',
  width: 90,
  height: 300,
  className: 'likeFlyClass'
})
```

:::info
只有初始化完成后，点击 `btnDom`, 点赞动效才能生效。
:::


## 参数

| 参数                     | 说明                       | 类型   | 可选值          | 默认值       | 是否必选|
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options = {}                | 初始化点赞的参数           | Object | —               | —            | 是 |
|options['icons']| 漂浮出来的图标 | Array | —               | —            | 是 |
|options['width']| 画板宽度 | Number | —               | 1024            | 是 |
|options['height']| 画板高度 | Number | —               | 768            | 是 |
|options['btnDom']| 点赞的按钮(ID选择器) | String | —               | —            | 是 |
|options['flyDom']| icon漂浮的父级DOM(ID选择器)） | String | —               | —            | 是 |
|options['className']| icon漂浮的位置的样式 | String | —               | —            | — |
