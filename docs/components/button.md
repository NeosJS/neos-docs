---
pageClass: components
---

# Button 按钮

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 基础用法
:::demo
```html
<template>
  默认:  <ne-button :theme="theme" v-for="theme in themes" :key="theme.id">{{theme | themeType }}</ne-button><br />
  背景减淡:  <ne-button light round :theme="theme" v-for="theme in themes" :key="theme.id">{{theme | themeType }}</ne-button>
</template>
```
:::

## 圆角按钮
:::demo 你可以使用`round`属性来定义是否启用圆角按钮
```html
<template>
  <ne-button round :theme="theme" v-for="theme in themes" :key="theme.id">{{theme | themeType}}</ne-button>
</template>
```
:::

## 幽灵按钮
:::demo 你可以使用`plain`属性来定义是否启用幽灵按钮
```html
<template>
  <ne-button plain :theme="theme" v-for="theme in themes" :key="theme.id">{{theme | themeType}}</ne-button>
</template>
```
:::

## 禁用状态
:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值
```html
<template>
  <ne-button disabled :theme="theme" v-for="theme in themes" :key="theme.id">{{theme | themeType}}</ne-button>
</template>
```
:::

## 自定义颜色
:::demo 你可以使用`color`属性来定义按钮的背景色，如果是`plain`按钮，则按钮的字体颜色为设定的`color`值
```html
<template>
  <ne-button round size="lg" 
    :color="gradient.color" 
    v-for="gradient in gradients" 
    :key="gradient.id"
  >{{gradient.name}}</ne-button>
  <ne-button round color="#8e5cd4" size="lg">#8e5cd4</ne-button>
</template>
```
:::

## 不同尺寸
:::demo `Button` 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸
```html
<template>
  <div class="block-list">
    <div class="block">
      <ne-button round color="linear-gradient(45deg, #FFD518 0%, #FFAA0A 100%)" size="lg">大按钮</ne-button>
      <ne-button round color="linear-gradient(45deg, #FFD518 0%, #FFAA0A 100%)">正常按钮</ne-button>
      <ne-button round color="linear-gradient(45deg, #FFD518 0%, #FFAA0A 100%)" size="sm">小按钮</ne-button>
      <ne-button round color="linear-gradient(45deg, #FFD518 0%, #FFAA0A 100%)" size="mn">迷你按钮</ne-button>
    </div>
    <div class="block">
      <ne-button theme="primary" size="lg" round>large</ne-button>
      <ne-button theme="success" round>default</ne-button>
      <ne-button theme="danger" size="sm" round>small</ne-button>
      <ne-button theme="warning" size="mn" round>mini</ne-button>
    </div>
  </div>
</template>
```
:::

## 按钮组
:::demo 以按钮组的方式出现，常用于多项类似操作。使用 `ne-button-group` 标签来嵌套你的按钮。
```html
<template>
  <ne-button-group>
    <ne-button theme="primary">Left</ne-button>
    <ne-button theme="primary">Middle</ne-button>
    <ne-button theme="primary">Right</ne-button>
  </ne-button-group>

  <ne-button-group>
    <ne-button theme="danger">1</ne-button>
    <ne-button theme="danger">2</ne-button>
    <ne-button theme="danger">3</ne-button>
    <ne-button theme="danger">4</ne-button>
    <ne-button theme="danger">5</ne-button>
  </ne-button-group>

  <ne-button-group>
    <ne-button theme="success">7</ne-button>
    <ne-button theme="success">8</ne-button>
  </ne-button-group>
</template>
```
:::

### API

| 参数        | 说明                                                  | 类型    | 可选值                                             | 默认值 |
| ----------- | ----------------------------------------------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸                                                  | string  | lg、 sm、 mn                              | —      |
| theme        | 皮肤         | string  | primary、 success、 warning、 danger、 dark | —     |
| plain       | 是否朴素按钮                                          | boolean | —                                                  | false  |
| round       | 是否圆角按钮                                          | boolean | —                                                  | false  |
| circle      | 是否圆形按钮                                          | boolean | —                                                  | false  |
| loading     | 是否加载中状态                                        | boolean | —                                                  | false  |
| disabled    | 是否禁用状态                                          | boolean | —                                                  | false  |
| icon        | 图标名称                                              | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦                                          | boolean | —                                                  | false  |
| native-type | 原生 type 属性                                        | string  | button、 submit、 reset                            | button |
| color       | 自定义按钮背景颜色。例如：`#dc0000`                   | string  | —                                                  | —      |
| light | 是否轻背景 | Boolean | — | false |

### Events

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
| click    | 点击时的事件 | —        |

<script>
export default{
  filters: {
    themeType: value => {
      if (!value) return 'default'
      return value
    }
  },
  data(){
    return {
      themes: ['','primary', 'success', 'warning', 'danger', 'dark'],
      gradients:[{
        name: 'primary',
        color: 'linear-gradient(45deg, #FFD518 0%, #FFAA0A 100%)'
      },
      {
        name: 'success',
        color: 'linear-gradient(225deg, #02CA8A 0%, #1EFC92 100%)'
      },
      {
        name: 'danger',
        color: 'linear-gradient(240deg, #FF2F2F 0%, #FF4EBF 100%)'
      },
      {
        name: 'blue',
        color: 'linear-gradient(45deg, #62CDFF 0%, #3370FF 100%)'
      },
      {
        name: 'orange',
        color: 'linear-gradient(45deg, #FFAA0A 0%, #FF850A 100%)'
      }]
    }
  }
}
</script>
<style lang="scss">
.demo-block.demo-button {
  .block-list{
    display: flex;
    justify-content:space-around;
    .block{
      display: flex;
      justify-content:center;
      align-items: center;
    }
  }
  .ne-button {
    margin-bottom: 1rem;
    text-transform: capitalize;
    &:not(.ne-button--mn){
      height: 1.5rem !important;
    }
    &.ne-button--lg{
      height:2rem !important
    }
  }
}

</style>

