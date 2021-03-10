# 拖拽元素

拖拽某个dom时，被拖拽的dom将在指定的节点内移动。

## API 接口

### `nativeApi.elementDrag(options: <Object>)`
### 

## 示例代码

```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.elementDrag({
  dragDom: 'drag', // 需要移动的dom节点
  areaDom: 'area', // 移动范围的dom节点
  className: 'demo' // dom移动时需要额外添加的类名
})
```

## 参数

| 参数 | 说明    | 类型   | 可选值 | 默认值 | 是否必选 | 
| ---- | ------- | ------ | ------ | ------ | ------ |
| dragDom | 需要移动的dom节点(**id选择器**) | string | —      | —      | 是 |
| areaDom | 移动范围的dom节点(**id选择器**) | string | —      | —      | 是 |
| className | dom移动时需要额外添加的类名 | string | —      | —      | 否 |

::: info 
请注意：该API功能和 [addElementDrag](addElementDrag.html) 不一样。 addElementDrag 是添加一个元素，让其控制**整个窗口移动**。本接口是控制某个元素在窗口范围内的移动。
:::
