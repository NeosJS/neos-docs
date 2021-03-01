# 生成图片 <BadgeTip text="异步" type="green"></BadgeTip>

完成涂鸦操作后，生成图片。


## API
### `graffiti.createImage(fileName: <String>)`
### 

## 示例代码
```js
import graffiti from '@neosjs/h5-graffiti'

const base64Data = await graffiti.createImage('123123123.jpg')
```

## 参数

| 参数                   | 说明                       | 类型   | 可选值          | 默认值       | 是否必选|
| -------------- | ----------------- | ------ | --------------- | ------------ |------------ |
| fileName                | 自定义保存的文件名称           | Sreing | —               | —            | 否 |

:::info
把涂鸦轨迹、背景图(如果有)、水印(如果有)合并成一张图片。  
生成的图片自动保存在特定的目录里，并返回图片路径。
:::
