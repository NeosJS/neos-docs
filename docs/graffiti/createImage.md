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

## 返回值

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| errCode | 状态码 | Number |  
| errMsg | 错误信息 | String |  
| base64 | 图片的base64信息 | String | 


:::info
把涂鸦轨迹、背景图(如果有)、水印(如果有)合并成一张图片。  
:::
