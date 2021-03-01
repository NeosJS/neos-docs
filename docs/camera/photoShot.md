# 拍照

调用摄像机进行拍照。

# API
### `camera.photoShot(options: <Object>)`
### 

## 示例代码

```js
import camera from '@neosjs/h5-camera'

camera.photoShot({
  success: res => {
    console.log(res)
  },
  fail: err => {
    console.log(err)
  }
})
```

### async/wait
```js
import camera from '@neosjs/h5-camera'

const res = await camera.photoShot()
```

## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| options['success'] | 成功回调 | function | — | — | 否 |
| options['fail'] | 失败回调 | function | — | — | 否 |

## 返回值

| 字段 | 说明    | 类型   | 
| ---- | ------- | ------ | 
| errCode | 状态码 | Number |  
| errMsg | 错误信息 | String |  
| data['imgData'] | 图片的base64信息 | String | 

::: info
拍照成功后，会返回本地文件路径。    
初始化的时候，设置了 `previewDom` 参数，将会显示拍照的预览图。
:::
