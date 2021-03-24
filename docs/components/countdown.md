# 倒计时

:::demo
```html
<div class="demo-base">
  <div class="block">
    <clock-countdown :options="options1" />
  </div>

  <div class="block">
    <clock-countdown :options="options"/>
  </div>

  <div class="block">
    <clock-countdown :options="opts"/>
  </div>
</div>
```
:::

<script>
export default{
  data(){
    return {
      options1:{
        countDownTime:90,
        borderWidth:18,
        borderColor:'#FFAA0A',
        background:['rgba(255,213,24,.3)', 'rgba(255,170,10,.5)'],
        pointerColor:'rgba(255,170,10,1)',
        pointerDotColor:'rgba(255,213,24,.8)',
      },
      options:{
        countDownTime:60,
        borderWidth:12,
        borderColor:['#8e5cd4','#ea4c89'],
        pointerWidth:10,
        pointerColor:'#f4645f',
        pointerDotColor:'#fdbe01',
        background:['#2DBE60', '#D5F2DF'],
        text:{
          content:['🍏','🍎','🍊','🍋']
        },
        scale:{
          color:'#AB7EF6',
          small:true
        }
      },
      opts:{
        countDownTime:30,
        borderWidth:12,
        borderColor:['#f60'],
        pointerWidth:10,
        pointerColor:'#E6ECF1',
        pointerDotColor:'#7F8C8D',
        background:['#0194EF', '#2EA2F9'],
        scale:{
          color:'#fdbe01',
          lineWidth:5
        },
        text:{
          content:[12,3,6,9],
          color:'#fff',
          font:'20px Microsoft yahei'
        },
      }
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
  .block{
    flex:1;
  }
}
</style>

