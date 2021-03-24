<template>
  <div class="game-courseware-mask-bg" v-if="visible">
    <div class="loading-contenter">
      <div class="loading-logo"></div>
      <div class="loading-animation" />
    </div>
  </div>
</template>

<script>
import { isPC } from 'utils/util'
export default {
  name: 'NeLoading',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.game-courseware-mask-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  overflow: hidden;
  background: url(../imgs/wait-bg.jpg) no-repeat center center;
}
.loading-contenter {
  position: absolute;
  background: #fff;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loading-logo {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(../imgs/logo-loading.png) no-repeat center center;
  background-size: 100% 100%;
}
.loading-animation,
.loading-animation:after {
  border-radius: 50%;
  width: 82px;
  height: 82px;
  margin: -1px 0 0 -1px;
  box-sizing: border-box;
}
.loading-animation {
  font-size: 0px;
  position: relative;
  text-indent: -9999em;
  border-top: 6px solid rgba(255, 182, 15, 0.5);
  border-right: 6px solid rgba(255, 182, 15, 0.5);
  border-bottom: 6px solid rgba(255, 182, 15, 0.5);
  border-left: 6px solid #ffb60f;
  transform: translateZ(0);
  animation: loading 1s infinite linear;
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
