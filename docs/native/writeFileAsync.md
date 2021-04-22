# 写入文件 <BadgeTip text="异步" type="green"></BadgeTip>

把指定的内容写到到一个设定的文件路径里。

## API
###  `nativeApi.writeFileAsync(options: <Object>)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.writeFileAsync({
  savePath: '/User/xxxx/xxxxx/yyyt.json',
  content: 'hello world!',
  success: () => {
    // 成功的回调
  },
  fail: () => {
    // 失败的回调
  }
})
```

### Async / Await
```js
import { nativeApi } from '@neosjs/electron-ipc'

const res = await nativeApi.writeFileAsync({
  savePath: '/User/xxxx/xxxxx/yyyt.json',
  content: 'hello world!'
})
console.log(res)
```

## 参数

| 参数  | 说明     | 类型   | 可选值     | 默认值 | 是否必填 | 
| ----- | -------- | ------ | ---------- | ------ |------ |
| options[] | 接口参数 | Object | —      | —      | 是      |
| options['savePath'] | 文件保存的路径 | String | —      | —      | 是      |
| options['content'] | 需要写入的内容| Any[] | —      | —      | 是      |
| options['success'] | 写入成功的回调 | Function | —      | —      | 否      |
| options['fail'] | 写入失败的回调 | Function | —      | —      | 否      |
