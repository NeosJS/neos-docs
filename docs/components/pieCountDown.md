# 扇形倒计时

扇形倒计时，转动一圈倒计时结束。
## 基础用法

:::demo 使用默认配置
```html
<template>
  <div class="demo-base">
    <div class="block">
      <ne-pie-countdown :options="{countDownTime:60}"/>
    </div>
    <div class="block">
      <ne-pie-countdown :options="{countDownTime:50,size:100}"/>
    </div>
  </div>
</template>
```
:::

## 自定义样式

设置颜色、尺寸、刻度等信息，可以显示不同的组件样式。

:::demo 通过设置 `outerBorderWidth`、`outerColor`、 `innerBorderWidth`、`innerColor`、 `borderColor`、`size`，配置组件的样式。
```html
<template>
  <div class="demo-base">
    <div class="block">
      <ne-pie-countdown :options="options2"/>
    </div>
    <div class="block">
      <ne-pie-countdown :options="options1"/>
    </div>
    <div class="block">
      <ne-pie-countdown :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      options1:{
        size:150,
        countDownTime:50,
        borderColor: '#0194EF', // 边框颜色
        outerColor: '#0194EF', // 最外层底圆颜色
        scheduleColor: '#fff', // 进度条动画颜色
        fontColor: '#AB7EF6', // 字体颜色
        ringColor: '#40a9ff', // 进度条环形颜色
        innerColor: '#ffffff', // 最内圆底色
        innerBorderWidth:4,
        drawInnerRing:true
      },
      options:{
        size:150,
        countDownTime:30,
        outerColor: '#8E44AD', // 最外层底圆颜色
        innerColor:'#ab7ef6',
        borderColor:'#8e5cd4',
        scheduleColor: '#ab7ef6', // 进度条动画颜色
        ringColor: '#6e5494', // 进度条环形颜色
        // outerBorderWidth:10,
        innerBorderWidth:20,
        drawInnerRing:true
      },
      options2:{
        size:150,
        countDownTime:60,
        outerColor: '#FFD518', // 最外层底圆颜色
        scheduleColor: '#E6ECF1', // 进度条动画颜色
        ringColor: '#FFD518', 
        drawInnerRing:false,
        outerBorderWidth:0,
        
      }
    }
  }
}
</script>
```
:::

## 参数

| 参数                        | 说明                       | 类型   | 可选值          | 默认值       | 是否必选 |
| --------------------------- | -------------------------- | ------ | --------------- | ------------ |------------ |
| countDownTime | 倒计时时长(单位：秒) | Number | — | — | 是 |
| size | 组件大小 | Number | — | 60 | 否 |
| outerBorderWidth | 外边框宽度 | Number | — | 5 | 否 |
| outerColor | 外边框颜色 | String | — | #ffaa0a | 否 |
| innerBorderWidth | 内边框宽度 | Number | — | 5 | 否 |
| innerColor | 内边框颜色 | String | — | #FFD518 | 否 |
| scheduleColor | 进度条动画颜色 | String | — | #ffffff | 否 |
| ringColor | 进度条环形颜色 | String | — | #ffaa0a | 否 |
| stepRing | 步长（值越小，圆环的动效约流畅） | Number | — | 100 | 否 |
| ratio | 组件缩放倍数(可有效的消除锯齿，值越大越清晰) | Number | — | 2 | 否 |

## 事件

| 事件名称        | 说明          | 回调值 |
| ------------ | ------------ | ------ | 
| complete | 倒计时结束时触发 | — |
| remain | 倒计时剩余时长(单位：秒) | time |


<script>
export default{
  data(){
    return {
      options1:{
        size:150,
        countDownTime:50,
        borderColor: '#0194EF', // 边框颜色
        outerColor: '#0194EF', // 最外层底圆颜色
        scheduleColor: '#fff', // 进度条动画颜色
        fontColor: '#AB7EF6', // 字体颜色
        ringColor: '#40a9ff', // 进度条环形颜色
        innerColor: '#ffffff', // 最内圆底色
        innerBorderWidth:4,
        drawInnerRing:true
      },
      options:{
        size:150,
        countDownTime:30,
        outerColor: '#8E44AD', // 最外层底圆颜色
        innerColor:'#ab7ef6',
        borderColor:'#8e5cd4',
        scheduleColor: '#ab7ef6', // 进度条动画颜色
        ringColor: '#6e5494', // 进度条环形颜色
        // outerBorderWidth:10,
        innerBorderWidth:20,
        drawInnerRing:true
      },
      options2:{
        size:150,
        countDownTime:60,
        outerColor: '#FFD518', // 最外层底圆颜色
        scheduleColor: '#E6ECF1', // 进度条动画颜色
        ringColor: '#FFD518', 
        drawInnerRing:false,
        outerBorderWidth:0,
        
      }
    }
  },
   methods: {
     complete(){
       console.log('over')
     }
   }
}
</script>

<style lang="scss">
.demo-base{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  text-align:center;
  .block{
    flex:1;
  }
}
</style>
