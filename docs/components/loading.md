# Loading 加载
加载数据时显示动效。

## 基础用法
::: demo 基础用法 设置 `size`, `stroke-color`, `circle-color` 等，可以显示不同的loading图标。

``` html
<template>
  <div class="demo-base">
    <div class="block">
      <Loading />
    </div>
    <div class="block">
      <Loading stroke-color="rgba(255,150,60,1)" />
    </div>
    <div class="block">
      <Loading stroke-color="rgba(255,150,60,1)" circle-color="#FFD518" />
    </div>
    <div class="block">
      <Loading stroke-color="rgba(255,110,10,1)" circle-color="#FFD518" :size="60" />
    </div>
  </div>
</template>
```
:::

## 带有Logo图标、文本
通过设置logo或text，可以达到不同的视觉效果。

:::demo 设置 `logo` 属性，即可在圆环内显示设置的logo图片。设置 `text` 属性，即可在圆环内显示设置的文本。  **注意：尺寸小于60，将不会显示文本！**
``` html
<template>
  <div class="demo-base">
    <div class="block">
      <Loading :logo="logo" :size="100" stroke-color="rgba(255,150,60,1)" circle-color="#FFD518"/>
    </div>
    <div class="block">
      <Loading logo="https://static.haibian.com/favicon.ico?v=1" :size="100" stroke-color="rgba(255,150,60,1)" circle-color="#FFD518"/>
    </div>
    <div class="block">
      <Loading :text="text" :size="100" stroke-color="rgba(255,150,60,1)" circle-color="#FFD518"/>
    </div>
    <div class="block">
      <Loading text="loading" :size="100" stroke-color="rgba(255,150,60,1)" circle-color="#FFD518"/>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      text: 'Loading',
      logo: '/favicon.ico'
    }
  }
}
</script>
```
:::

## 自定义尺寸
通过设置不同的尺寸，来缩放loading的大小。
:::demo 设置 `size` 属性，即可改变组件的大小。
```html
<template>
  <div class="demo-base">
    <div class="block">
      <Loading :logo="logo" :size="24" />
    </div>
    <div class="block">
      <Loading :logo="logo" :size="30" />
    </div>
    <div class="block">
      <Loading :logo="logo" :size="60" />
    </div>
    <div class="block">
      <Loading :logo="logo" :size="80" />
    </div>
    <div class="block">
      <Loading :logo="logo" :size="100" />
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      logo: '/favicon.ico'
    }
  }
}
</script>
```
:::

## 自定义颜色
通过设置不同的颜色，达到不同风格的loading图标。
:::demo 设置 `stroke-color`, `circle-color`, `fill-color` 属性，可以很方便的得到自己想要的颜色。
```html
<template>
  <div class="demo-base">
    <div class="block">
      <Loading 
        :logo="logo"
        :size="80"
        :stroke-color="strokeColor"
        circle-color="#FFB610"
        fill-color="rgba(255,255,255,1)"
      ></Loading>
    </div>

    <div class="block">
      <Loading 
        :logo="logo"
        :size="80"
        :stroke-color="{from:'#AB7EF6',to:'#ea4c89'}"
        circle-color="#e7e7e7"
        fill-color="rgba(255,255,255,1)"
      ></Loading>
    </div>

    <div class="block">
      <Loading 
        :logo="logo"
        :size="80"
        circle-color="#f5f5f5"
        :stroke-color="strokeColor1"
        fill-color="rgba(255,255,255,1)"
      ></Loading>
    </div>

    <div class="block">
      <Loading 
        :logo="logo"
        :size="80"
        circle-color="#e8e8e8"
        :stroke-color="{from: '#8549ba',to: '#ab7ef6'}"
        fill-color="#FFF5CD"
      ></Loading>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      logo: '/favicon.ico',
      strokeColor: { from: 'rgba(255,180,60,1)', to: 'rgba(255,150,60,1)' },
      strokeColor1:{from:'#108ee9',to:'#87d068'}
    }
  }
}
</script>
```
:::

## 自定义遮罩
通常用于全局加载。
:::demo 设置 `mask-class` 属性，可以自定义遮罩的样式。
```html
<template>
  <div class="demo-base" style="height:200px;">
    文本文本文本
    <div class="block">
      <Loading 
        :logo="logo"
        :size="80"
        :stroke-color="strokeColor"
        circle-color="#FFD518"
        fill-color="rgba(255,255,255,1)"
        mask-class="maskClass"
      ></Loading>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      logo: '/favicon.ico',
      strokeColor: { from: 'rgba(255,180,60,1)', to: 'rgba(255,150,60,1)' }
    }
  }
}
</script>

<style>
.maskClass{
  position:absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
</style>
```
:::


## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| name| 图标名称 | String | — | loading | 否 |
| logo | 图标地址 | String | — | — | 否 |
| text | 文本 | String | — | — | 否 |
| size | 组件尺寸 | Number | — | 32 | 否 |
| fill-color | 圆环内部填充色 | String | — | `#fafbfc` | 否 |
| stroke-width | 外环宽度(如果不设置，外环宽度将会根据整个组件尺寸进行自动设置) | Number | — | 0 | 否 |
| stroke-color | 外环颜色(Object则渐变显示) | String、Object | — | `#6f6f6f` | 否 |
| circle-color | 圆环底色 |String | — | `#cfcfcf` | 否 |
| square | 外环是否直接 | Boolean | true、false | false | 否 |
| duration | 外环转动速度 | String | — | 1s | 否 |
| mask-class | 遮罩样式 | String | — | — | 否 |


<style lang="scss">
.demo-base{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .block{
    flex:1;
  }
}
.maskClass{
  position:absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}
</style>
<script>
export default{
  data(){
    return {
      text: '加载中',
      logo: '/favicon.ico',
      strokeColor: { from: 'rgba(255,180,60,1)', to: 'rgba(255,150,60,1)' },
      strokeColor1:{ from: '#108ee9', to: '#87d068' }
    }
  }
}
</script>
