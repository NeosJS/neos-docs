<template>
  <transition @after-leave="handleAfterLeave">
    <div
      class="game-coursewae-toast"
      :class="[typeClass]"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      v-if="visible"
    >
      <div class="message">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
      </div>
      <div class="coins-number" v-if="type !== 'wrong'"><i></i> +{{ coin }}</div>
    </div>
  </transition>
</template>
<script>
const typeMap = {
  right: 'right',
  halfRight: 'halfRight',
  wrong: 'wrong'
}
export default {
  data() {
    return {
      visible: false,
      type: 'right',
      title: '',
      message: '',
      coin: 0,
      duration: 0,
      closed: false,
      onClose: null,
      timer: null
    }
  },
  computed: {
    typeClass() {
      return `is-${typeMap[this.type]}`
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },

    clearTimer() {
      clearTimeout(this.timer)
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game-coursewae-toast {
  transform: translate(-50%, 0%);
  width: 521px;
  position: absolute;
  left: 50%;
  top: 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  text-align: center;
  z-index: 1008;
  padding: 20px;
  box-sizing: border-box;
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
  }
  &.is-right {
    height: 95px;
    background: url(../imgs/toast_right.png) no-repeat center center;
    background-size: 100%;
    p {
      font-size: 20px;
      font-family: 'SFProRounded-Medium', 'SFProRounded', 'PingFang SC', 'sans-serif', 'Arial',
        'Verdana', 'Microsoft YaHei';
      font-weight: 500;
      line-height: 28px;
    }
  }
  &.is-halfRight {
    height: 95px;
    background: url(../imgs/toast_right_half.png) no-repeat center center;
    background-size: 100%;
    p {
      font-size: 20px;
      font-family: 'SFProRounded-Medium', 'SFProRounded', 'PingFang SC', 'sans-serif', 'Arial',
        'Verdana', 'Microsoft YaHei';
      font-weight: 500;
      line-height: 28px;
    }
  }
  &.is-wrong {
    width: 240px;
    height: 95px;
    background: url(../imgs/toast_wrong.png?v=1) no-repeat center center;
    background-size: 100%;
    display: block;
    .message {
      width: 100%;
    }
    h2 {
      padding: 0 0 20px 0;
      margin-top: -5px;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      padding: 0;
      line-height: 1.2;
      font-family: 'SFProRounded-Medium', 'SFProRounded', 'PingFang SC', 'sans-serif', 'Arial',
        'Verdana', 'Microsoft YaHei';
    }
  }
  .message {
    width: 300px;
    text-align: center;
  }
  .coins-number {
    i {
      display: inline-block;
      vertical-align: -14px;
      width: 44px;
      height: 44px;
      background: url(../imgs/coins.png) no-repeat center center;
      background-size: 100%;
    }
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    line-height: 29px;
    margin: 5px auto 12px auto;
    font-family: 'SFProRounded-Bold', 'SFProRounded', 'Helvetica', 'PingFang SC', 'sans-serif',
      'Arial', 'Verdana', 'Microsoft YaHei';
  }
  h2 {
    font-size: 24px;
    font-family: 'SFProRounded-Semibold', 'SFProRounded', 'Helvetica', 'PingFang SC', 'sans-serif',
      'Arial', 'Verdana', 'Microsoft YaHei';
    font-weight: 600;
    color: #fff;
    line-height: 31px;
    padding: 0 0 5px 0;
    margin: 0;
  }
}
</style>
