<template>
  <div id="cameraDemo" class="cameraDemo"></div>
</template>

<script>
import camera from "@neosjs/h5-camera";
export default {
  name:'cameraDemo',
  mounted () {
    this.$nextTick(()=>{
      camera.init({
        cameraDom: 'cameraDemo',
        width: 500,
        ratio: '4:3',
        quality: 0.6,
        ext: 'jpeg',
        hotKey:'space'
      })
    })
  },
  destroyed () {
    camera.destroy()
  }
}
</script>

<style lang="scss" scoped>
  .cameraDemo{
    width: 500px;
  }
</style>
