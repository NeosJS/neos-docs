:::demo
```html
<div class="demo-base">
<div>
<clock-countdown />
</div>
<div>
<ne-canvas-countdown :options="options"/>
</div>
```
:::

<script>
export default{
  data(){
    return {
      options:{countDownTime:60}
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
