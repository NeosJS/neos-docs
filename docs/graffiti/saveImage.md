# 保存图片

保存涂鸦图片到本地。

## API
### `graffiti.saveImage(fileName: <String>)`
### 

## 示例代码
```js
import graffiti from '@neosjs/h5-graffiti'

graffiti.saveImage('1231231212.png')
```

## 参数

| 参数                       | 说明                       | 类型   | 可选值          | 默认值       | 是否必选|
| ------------------- | -------------------- | ------ | --------------- | ------------ |------------ |
| fileName                | 保存的图片文件名           | String | —               | new Date()            | 否 |

:::info
该接口会自动调用 [createImage](createImage) 接口生成图片。
:::
