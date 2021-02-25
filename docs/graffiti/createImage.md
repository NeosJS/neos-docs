# 生成图片 <BadgeTip text="异步" type="green"></BadgeTip>

完成涂鸦操作后，生成图片。


## API
### `graffiti.createImage()`
### 

## 示例代码
```js
import graffiti from '@neosjs/h5-graffiti'

const base64Data = await graffiti.createImage()
```

:::info
把涂鸦轨迹、背景图(如果有)、水印(如果有)合并成一张图片。  
生成的图片是 base64 位图。
:::
