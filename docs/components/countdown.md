# 指针倒计时

指针倒计时，**指针走动一圈**，倒计时结束。


## 基础用法

:::demo 使用默认配置
```html
<template>
  <div class="demo-base">
    <div class="block">
      <ne-clock-countdown :options="{countDownTime:60}"/>
    </div>
    <div class="block">
      <ne-clock-countdown :options="{countDownTime:50,size:100}"/>
    </div>
  </div>
</template>
```
:::

## 自定义样式

设置颜色、尺寸、刻度等信息，可以显示不同的组件样式。

:::demo 通过设置 `borderColor`、 `background`、 `pointerColor`、`size`，配置组件的样式。
```html
<template>
  <div class="demo-base">
    <div class="block">
      <ne-clock-countdown :options="options"/>
    </div>

    <div class="block">
      <ne-clock-countdown :options="opts" @complete="complete"/>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      options:{
        countDownTime:90,
        borderWidth:2,
        borderColor:'#FFAA0A',
        background:['rgba(255,213,24,.3)', 'rgba(255,170,10,.5)'],
        pointerColor:'rgba(255,170,10,1)',
        pointerDotColor:'rgba(255,213,24,.8)',
      },
      opts:{
        size:200,
        countDownTime:5,
        borderWidth:10,
        borderColor:['#f60'],
        pointerWidth:8,
        pointerColor:'#E6ECF1',
        pointerDotColor:'#7F8C8D',
        background:'#ab7ef6',
        scale:{
          color:'#fdbe01',
          lineWidth:3
        },
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
| background | 组件背景色(为Array时，背景将绘制成渐变) | String、Array | — | #E6ECF1 | 否 |
| borderWidth | 外层边框宽度 | Number | — | 2 | 否 |
| borderColor | 外层边框颜色(为Array时，背景将绘制成渐变) | String、Array | — | 9DAAB6 | 否 |
| pointerWidth | 指针宽度 | Number | — | 2 | 否 |
| pointerColor | 指针颜色 | String | — | #9DAAB6 | 否 |
| scale | 刻度 | Object | — | — | 否 |
| scale['color'] | 刻度颜色 | String | — | — | — |
| scale['width'] | 刻度宽度 | Number | — | — | — |
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
      optin:{
        countDownTime:60
      },
      optin1:{
        countDownTime:60,
        borderColor: '#AB7EF6', // 边框颜色
        outerColor: '#ffc715', // 最外层底圆颜色
        scheduleColor: '#7ac70c', // 进度条动画颜色
        fontColor: '#AB7EF6', // 字体颜色
        ringColor: '#377FEA', // 进度条环形颜色
        innerColor: '#FFF5CD', // 最内圆底色
        innerBorderWidth:4,
        drawInnerRing:true
      },
      options1:{
        countDownTime:90,
        borderWidth:2,
        borderColor:'#FFAA0A',
        background:['rgba(255,213,24,.3)', 'rgba(255,170,10,.5)'],
        pointerColor:'rgba(255,170,10,1)',
        pointerDotColor:'rgba(255,213,24,.8)',
      },
      options:{
        size:200,
        countDownTime:60,
        borderWidth:8,
        borderColor:['#8e5cd4','#ea4c89'],
        background:['#fff1f0','#ffa39e'],
        pointerWidth:8,
        pointerColor:'#f4645f',
        text:{
          content:['🍏','🍎','🍊','🍋']
        },
        // scale:{
        //   color:'#AB7EF6',
        //   small:true
        // }
      },
      opts:{
        size:200,
        countDownTime:30,
        borderWidth:10,
        borderColor:['#f60'],
        pointerWidth:8,
        pointerColor:'#E6ECF1',
        background:'#fa8c16',
        scale:{
          color:'#ffd591',
          lineWidth:3
        },
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

