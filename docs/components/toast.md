# Toast 提示
在页面指定位置弹出黑色提示，用于消息通知、加载提示、操作结果提示等场景。

## 基础用法
从中间出现，3 秒后自动消失。

:::demo 
```html
<ne-button @click="show">显示</ne-button>
```
:::

## 自定义位置

:::demo  Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。
```html
<template>
  <ne-button @click="showPosition(`${position}`)" v-for="position in ['left','right','top','bottom']">
    {{position}}显示
  </ne-button>
</template>

<script>
export default {
  methods:{
    showPosition(position){
      this.$NeToast(`Toast ${position} 提示`,{
        position
      })
    }
  }
}
</script>
```
:::

## 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | String、 VNode | — | — |
| position | 显示的位置 | String | left、right、top、bottom、center | center |
| icon | 自定义图标的类名 | String | — | — |
| useHTMLString | 是否将 Toast 属性作为 HTML 片段处理 | Boolean | — | false |
| customClass | 自定义类名 | String | — | — |
| duration | 显示时间。设为 0 则不会自动关闭。(单位: 毫秒) | Number | — | 3000 |
| showClose | 是否显示关闭按钮 | Boolean | — | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 Toast 实例 | Function | — | — |
| offset | Toast 距离窗口的偏移量(**`position` 为 `center` 时无效**) | String | — | 1rem |
| target | Toast 挂载的 DOM 节点。 <br>可传入一个 DOM 对象或字符串；<br>若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点 | String | — | document.body |

## 方法
调用 `Toast` 或 `this.$NeToast` 会返回当前 Toast 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Toast |

<script>
export default {
  methods:{
    show(){
      this.$NeToast('Toast 提示')
    },
    showPosition(position){
      this.$NeToast(`Toast ${position} 提示`,{
        position
      })
    }
  }
}
</script>
