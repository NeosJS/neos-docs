<template>
  <transition @after-leave="afterLeave">
    <div class="game-courseware-mask-bg" v-if="visible" :class="[maskClass]">
      <div class="ne-dialog">
        <div class="ne-dialog--body">
          <slot></slot>
        </div>
        <div class="ne-dialog--footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NeDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    exitMask: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    maskClass() {
      return this.exitMask ? 'game-courseware-mask' : ''
    }
  },
  methods: {
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>
<style lang="scss" scoped>
.game-dialog {
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.game-courseware-mask {
  background-color: rgba(#000, 0.5) !important;
  background-image: none !important;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.ne-dialog {
  background: #fff;
  border-radius: 16px;
  width: 340px;
  min-height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  text-align: center;
}
.ne-dialog--body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  font-family: Helvetica, PingFang SC, 'sans-serif', Arial, Verdana, Microsoft YaHei;
  ::v-deep p {
    margin: 0;
    font-size: 18px;
    font-family: Helvetica, PingFang SC, 'sans-serif', Arial, Verdana, Microsoft YaHei;
    font-weight: 600;
    color: rgba(23, 43, 77, 1);
    line-height: 26px;
  }
}
.ne-dialog--footer {
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  ::v-deep div {
    display: flex;
    justify-content: space-around;
  }
  ::v-deep .btn {
    background: linear-gradient(45deg, rgba(255, 213, 24, 1) 0%, rgba(255, 170, 10, 1) 100%);
    border-radius: 30px;
    font-size: 16px;
    font-family: Helvetica, PingFang SC, 'sans-serif', Arial, Verdana, Microsoft YaHei;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    border: 0 none;
    padding: 15px 0px;
    width: 45%;
    outline: 0 none;
    text-align: center;
    cursor: pointer;
    &.is-cancel {
      background: rgba(255, 243, 220, 1);
      color: #ffaa0a;
    }
  }
}
</style>
