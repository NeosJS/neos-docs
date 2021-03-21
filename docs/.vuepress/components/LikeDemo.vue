<template>
  <div id="likeFly" class="likeDemo">
    <div id="likeBtn">点赞</div>
  </div>
</template>

<script>
import like from "@neosjs/h5-like";
export default {
  name:'likeDemo',
  mounted () {
    this.$nextTick(()=>{
      like.init({
        icons: ['1.png', '2.png'],
        btnDom: 'likeBtn',
        flyDom: 'likeFly',
        width: 90,
        height: 300,
        className: 'likeFlyClass',
        duration: 2000
      })
    })
  },
  destroyed () {
    like.destroy()
  }
}
</script>

<style lang="scss" scoped>
  .likeDemo{
    width: 500px;
  }
</style>
