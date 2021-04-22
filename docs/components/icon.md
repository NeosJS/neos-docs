---
pageClass: components
---

# Icon 图标
提供了一套项目里常用的图标集合。

## 引入
```js
import { NeIcon } from 'neosui'
Vue.use(NeIcon)
```

## 基础用法
直接通过设置icon的 `name` 来使用即可。例如：
:::demo 使用默认配置
```html
<template>
  <ne-icon name="close-circle"></ne-icon>
  <ne-icon name="loading"></ne-icon>
  <ne-icon name="clock"></ne-icon>
</template>
```
:::

## 图标集合
<ul class="icon-lists">
  <li  v-for="item in lists" :key="item.id" >
    <ne-icon :name="item"/>
    <span class="icon-name">{{item}}</span>
  </li>
</ul>


## 参数

| 参数         | 说明          | 类型   | 可选值          | 默认值       | 是否必选 |
| ----------- | --------------- | ------ | -------- | --------- |------------ |
| name | icon名称 | String | — | — | 是 |
| size | icon尺寸 | Number | — | 20 | — |
| color | icon颜色 | String | — | currentColor | — |
| rotate | 是否旋转 | Boolean | — | false | — |
| customClass | 自定义样式(可以设置图标大小、颜色等) | String | — | — | — |

<script>
const iconList = require('./icons.json');
export default {
  data() {
    return {
      lists: iconList
    }
  }
}
</script>
<style lang="scss">
.icon-lists{
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  width:90%;
  li {
    float: left;
    width: calc(100% / 8);
    text-align: center;
    line-height: 80px;
    color: #666;
    font-size: 14px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    i{
      display:block;
      margin:2rem auto 0 auto;
      width:1.5rem;
      height:1.5rem
    }
  }
  
  .icon-name{
    display: inline-block;
    padding: 0 3px;
    height: 1em;
  }
}
</style>
