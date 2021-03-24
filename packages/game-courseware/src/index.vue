<template>
  <div
    class="gameCourseware-container"
    :class="[hiddenTools]"
    id="gameCoursewareContent"
    ref="gameCoursewareContent"
  >
    <!-- <NeLoading :visible="showLoading"></NeLoading> -->

    <!-- 加载出错弹层 -->
    <NeDialog :visible="showFailedDialog">
      <p style="padding-top:50px">Failed to load</p>
      <div slot="footer">
        <button class="btn is-cancel" @click.stop="confirmExit">Exit</button>
        <button class="btn" @click.stop="reloadGamePage">Reload</button>
      </div>
    </NeDialog>

    <!-- 退出二次确认 -->
    <NeDialog :visible="showExitDialog" :exitMask="true">
      <p style="padding:20px 15px 0 15px">
        Exit The Game
        <span>You cannot open the game again after exiting!</span>
      </p>
      <div slot="footer">
        <button class="btn is-cancel" @click.stop="showExitDialog = !showExitDialog">Cancel</button>
        <button class="btn is-cancel" @click.stop="confirmExit">Exit</button>
      </div>
    </NeDialog>

    <div class="gameCourseware-tools" v-show="showTools">
      <button @click.stop="showExitDialog = !showExitDialog" class="exitView">关闭</button>
      <button @click.stop="reloadGamePage" class="reloadView">刷新</button>
    </div>

    <iframe
      :src="url"
      frameborder="0"
      scrolling="no"
      id="gameCourseware"
      name="gameCourseware"
      ref="gameCourseware"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script>
import logger from 'utils/logger'
import { isPC } from 'utils/util'
import gameCourseware from './game-courseware.js'
import NeDialog from './dialog'
// import NeLoading from './loading'

export default {
  name: 'NeGamecourseware',
  components: { NeDialog },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    gameUrl: {
      type: String,
      default: ''
    },
    interactId: {
      type: String,
      default: ''
    },
    planId: {
      type: Number,
      default: 0
    },
    classId: {
      type: [Number, String],
      default: 0
    },
    nickName: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: () => {
        return {}
      }
    },
    role: {
      type: String,
      default: 'student'
    },
    requestUrl: {
      type: String,
      default: ''
    },
    platform: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'en'
    },
    isAnswer: {
      type: [Number, String],
      default: 2
    }
  },
  data() {
    return {
      loaderGameTimer: null, // 加载游戏定时器
      LOAD_TIMEOUT: 3000, // 加载超时时间 ms
      url: null, // 游戏课件URL
      isLoaded: false, // 是否加载完成
      showFailedDialog: false, // 是否加载失败
      showExitDialog: false, // 是否退出
      showTools: true, // 是否显示工具栏
      isSubmit: false, // 是否已提交
      showLoading: true,
      messageHandlerBinded: () => {}
    }
  },
  computed: {
    hiddenTools() {
      return !isPC() ||
        (this.platform &&
          (this.platform.toUpperCase() === 'IOS' || this.platform.toUpperCase() === 'ANDROID'))
        ? 'hiddenToolsBg'
        : ''
    }
  },
  created() {
    const submitHeaders = window.sessionStorage.getItem('submitHeaders')
      ? JSON.parse(window.sessionStorage.getItem('submitHeaders'))
      : {}
    this.url = `${this.gameUrl}?lan=${this.lang}`
    this.removeMessageListener()
    this.$nextTick(() => {
      this.gameCourseware = new gameCourseware({
        interactId: this.interactId,
        planId: this.planId * 1,
        classId: this.classId * 1,
        headers: this.headers || submitHeaders,
        nickName: this.nickName,
        requestUrl: this.requestUrl,
        platform: this.platform,
        isAnswer: this.isAnswer * 1
      })
      this.messageHandlerBinded = this.messageHandler.bind(this)
      this.addMessageListener()
    })
  },
  mounted() {
    this.$nextTick(() => {
      const gameCoursewareIframe = document.getElementById('gameCourseware')
      gameCoursewareIframe.onload = () => {
        this.gameLoaded()
      }
    })
    this.loaderTimer()
  },
  destroyed() {
    this.removeMessageListener()
  },
  methods: {
    // 加载定时器，用于检测加载状态
    loaderTimer() {
      this.loaderGameTimer = window.setTimeout(() => {
        if (!this.isLoaded) {
          this.showLoading = false
          this.showFailedDialog = !this.showFailedDialog
          this.$emit('fail')
          logger.info('game load failed')
        }
        this.clearLoaderTimer()
      }, this.LOAD_TIMEOUT)
    },
    clearLoaderTimer() {
      if (this.loaderGameTimer) {
        clearTimeout(this.loaderGameTimer)
        this.loaderGameTimer = null
      }
    },
    /**
     * 监听课件发出的消息
     */
    addMessageListener() {
      window.addEventListener('message', this.messageHandlerBinded)
    },
    /**
     * 移除事件监听方法
     */
    removeMessageListener() {
      window.removeEventListener('message', this.messageHandlerBinded)
    },

    /**
     * 执行消息
     */
    messageHandler(e) {
      const type = e.data.type
      switch (type) {
        case 'game_load_start': // 游戏开始加载
          logger.info('Game Start Loading')
          break
        case 'game_start': // 游戏加载结束
          // this.gameLoaded()
          logger.info('Game Loaded')
          break
        case 'score': // 得到积分
          // eslint-disable-next-line no-case-declarations
          const data = e.data.scoreData
          // eslint-disable-next-line no-case-declarations
          const rightNum = data.detail.resultDetail.rightNum
          // eslint-disable-next-line no-case-declarations
          const totalNum = data.detail.resultDetail.questionSum
          // eslint-disable-next-line no-case-declarations
          const rightRate = this.gameCourseware.getRightRate(rightNum, totalNum)
          // 提交数据
          this.submitUserAnswer(rightRate, 1)
          logger.info(
            `Game Score rightNum: ${rightNum} totalNum: ${totalNum} rightRate: ${rightRate}`
          )
          break
        case 'game_over': // 游戏结束
          logger.info('Game Over')
          break
        default:
          break
      }
    },

    /**
     * 提交答案
     */
    async submitUserAnswer(rightRate, isAnswer) {
      if (this.isSubmit || this.isAnswer === 1 || this.role !== 'student') return
      try {
        const { isSubmit, data } = await this.gameCourseware.submitAnswer(rightRate, isAnswer)
        this.isSubmit = isSubmit
        if (data) {
          this.$emit('coinChange', data)
          logger.info('game coin change')
        }
      } catch (error) {
        logger.error(error)
      }
    },

    /**
     * 游戏加载成功
     */
    async gameLoaded() {
      this.isLoaded = this.showTools = true
      this.showExitDialog = this.showLoading = false
      this.$emit('loaded')
      logger.info('game load success')
    },

    /**
     * 刷新页面
     */
    reloadGamePage() {
      this.$emit('reload')
      this.showLoading = true
      this.showFailedDialog = this.showExitDialog = false
      this.gameCourseware.closeToast()
      // 这么做的目的是解决iframe跨域的问题
      const random = +new Date()
      this.url = this.gameUrl && `${this.gameUrl}?lan=${this.lang}&t=${random}`
      this.loaderTimer()
    },

    /**
     * 退出
     */
    // exit() {
    //   // 如果游戏加载成功,并且未提交数据。 退出，需要提交一次答题数据
    //   // if (this.isLoaded && (!this.isSubmit || this.isAnswer === 2)) {
    //   //   this.submitUserAnswer(0, 2)
    //   // }
    //   this.showExitDialog = true
    // },

    /**
     * 确认退出
     */
    confirmExit() {
      this.showExitDialog = this.showLoading = this.showFailedDialog = this.showTools = false
      this.gameCourseware.closeToast()
      this.$emit('exit', { isSubmit: this.isSubmit })
    }
  }
}
</script>

<style lang="scss" scoped>
.gameCourseware-container {
  position: absolute;
  z-index: 2;
  top: 25px;
  left: 0;
  width: 100%;
  height: calc(100% - 25px);
  overflow: hidden;
  box-sizing: border-box;
  p {
    span {
      color: rgba(162, 170, 184, 1);
      line-height: 20px;
      font-size: 14px;
      display: block;
      padding-top: 15px;
    }
  }
  &.hiddenToolsBg {
    top: 0;
    height: 100%;
    button {
      top: 30px !important;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    background: transparent;
  }
  .game-courseware-mask-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: url(./imgs/wait-bg.jpg) no-repeat center center;
    background-size: 100% 100%;
  }
  .gameCourseware-tools {
    position: relative;
    z-index: 9;
    button {
      width: 30px;
      height: 30px;
      border: 0 none;
      background: #ffb60f;
      color: #fff;
      font-size: 0px;
      outline: 0 none;
      position: absolute;
      top: 5px;
      &.exitView {
        background: url(./imgs/back.png) no-repeat center center;
        background-size: 100%;
        left: 20px;
      }
      &.reloadView {
        background: url(./imgs/refresh.png) no-repeat center center;
        background-size: 100%;
        right: 20px;
      }
    }
  }
}
</style>
