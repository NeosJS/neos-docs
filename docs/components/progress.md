# Progress 进度条

## 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。


## 线形进度条

:::demo Progress 组件设置`percent`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。通过 `format` 属性来指定进度条文字内容。
```html
<template>
  <ne-progress :percent="parseInt(Math.random() * 100)" v-for="theme in themes" :theme="theme" :key="theme.id"></ne-progress>
</template>
<script>
  export default {
    methods: {
      format(percent) {
        return percent === 100 ? '满' : `${percent}%`
      }
    }
  }
</script>
```
:::

## 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

:::demo  Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。
```html
<template>
  <ne-progress :text-inside="true" :stroke-width="16" :percent="parseInt(Math.random() * 100)" v-for="theme in themes" :theme="theme" :key="theme.id"></ne-progress>
</template>
```
:::

## 自定义颜色

:::demo 可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。
```html
<template>
  <ne-progress :percent="item.percent" :color="item.color" v-for="item in customColors" :key="item.id"></ne-progress>
  <ne-progress :percent="percent" :color="customLinear"></ne-progress>
  <div>
    <ne-button-group>
      <ne-button @click="decrease"> - </ne-button>
      <ne-button @click="increase"> + </ne-button>
    </ne-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        percent: 20,
        customColor: '#409eff',
        customColors: [
          { color: '#f56c6c', percent: 20 },
          { color: '#e6a23c', percent: 40 },
          { color: '#5cb87a', percent: 60 },
          { color: '#1989fa', percent: 80 },
          { color: '#6f7ad3', percent: 100 }
        ],
        customLinear:['#FF2F2F','#FF4EBF']
      }
    },
    methods: {
      customColorMethod(percent) {
        if (percent < 30) {
          return '#909399'
        } else if (percent < 70) {
          return '#e6a23c'
        } else {
          return '#67c23a'
        }
      },
      increase() {
        this.percent += 10
        if (this.percent > 100) {
          this.percent = 100
        }
      },
      decrease() {
        this.percent -= 10
        if (this.percent < 0) {
          this.percent = 0
        }
      }
    }
  }
</script>
```
:::

## 环形进度条

:::demo 通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。
```html
<template>
  <ne-progress type="circle" :percent="parseInt(Math.random() * 100)"  v-for="theme in themes" :color="customLinear" :key="theme.id"></ne-progress>
</template>
```
:::

## 环形进度条缺口位置

:::demo 通过 `gap-position` 属性来指定使用环形进度条的缺口位置。
```html
<template>
  <ne-progress type="circle" :percent="20" status="success"  gap-position="right"  text="right"></ne-progress>
  <ne-progress type="circle" :percent="70" status="warning"  gap-position="left" text="left"></ne-progress>
  <ne-progress type="circle" :percent="50" status="error"  gap-position="top" text="top"></ne-progress>
  <ne-progress type="circle" :percent="90" :strokeColor="['#108ee9','#87d068']"  gap-position="bottom"  text="bottom"></ne-progress>
</template>
```
:::

## 仪表盘形进度条

:::demo 通过 `type` 属性来指定使用仪表盘形进度条。
```html
<template>
  <ne-progress type="dashboard" :percent="percent" :color="colors"></ne-progress>
  <ne-progress type="dashboard" :percent="90" :color="['#ab7ef6','#3b5998']"  text="文字"></ne-progress>
  <ne-progress type="dashboard" :percent="90" :color="['#108ee9','#87d068']" textClass="text-class" :format="format" text="文字"></ne-progress>
  <div>
    <ne-button-group>
      <ne-button @click="decrease"> - </ne-button>
      <ne-button @click="increase"> + </ne-button>
    </ne-button-group>
  </div>
</template>
```
:::

<script>
export default {
  data(){
    return {
      themes:['primary','success','danger','warning','dark'],
      percent: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percent: 20 },
        { color: '#e6a23c', percent: 40 },
        { color: '#5cb87a', percent: 60 },
        { color: '#1989fa', percent: 80 },
        { color: '#6f7ad3', percent: 100 }
      ],
      customLinear:['#FF2F2F','#FF4EBF']
    }
  },
  methods: {
      format(percent) {
        return percent === 100 ? '满' : `${percent}%<br>asdas`
      },
      increase() {
        this.percent += 10
        if (this.percent > 100) {
          this.percent = 100
        }
      },
      decrease() {
        this.percent -= 10
        if (this.percent < 0) {
          this.percent = 0
        }
      }
    }
}
</script>
<style lang="scss">
.demo-progress{
  .ne-progress{
    margin: 1rem 0
  }
}
</style>
