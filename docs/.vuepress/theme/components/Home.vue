<template>
  <main class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <img class="bg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzI1IiBoZWlnaHQ9Ijk5MCIgdmlld0JveD0iMCAwIDcyNSA5OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY2My45NzMiIHk9Ii00NTQiIHdpZHRoPSIxMjcwLjAzIiBoZWlnaHQ9IjkzOSIgcng9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA2NjMuOTczIC00NTQpIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2NjMuOTczIiB5MT0iLTQ1NCIgeDI9IjE1NTkuNjMiIHkyPSI3NTcuNDEyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTk4RjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDk2MURDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==">
    <header class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" />
      <h1 v-if="data.heroText !== null" id="mainTitle" style="text-align:left;margin-left:36rem;width:50rem;height:60px;"></h1>
      <p class="description" id="description"  style="text-align:left;margin-left:36rem;width:58rem;height:33px;"></p>
      <p class="description" id="line"  style="text-align:left;margin-left:36rem;width:66rem;height:33px;margin-top:-20px"></p>
      <!-- <p class="action" v-if="data.actionText && data.actionLink" style="text-align:left;margin-left:35rem;width:50rem"></p> -->
      <div class="features" v-if="data.features && data.features.length" style="margin-left:36rem;text-align:left">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
        <BtnLink :link="feature.link">查看详情</BtnLink>
      </div>
    </div>
    </header>


    <div id="cc" class="cc"></div>
    <Content class="theme-default-content custom" />

    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import theaterJS from 'theaterjs';
// import 'particles.js'
import NavLink from '@theme/components/NavLink.vue'
import BtnLink from '@theme/components/BtnLink.vue'
// import bg from '@imgs/bg.jpg'
const isServer = Vue.prototype.$isServer
export default {
  components: { NavLink,BtnLink },
  data() {
    return {
      // bg
    }
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },
    actionLink1() {
      return {
        link: this.data.actionLink1,
        text: this.data.actionText1
      }
    },
    actionLink2() {
      return {
        link: this.data.actionLink2,
        text: this.data.actionText2
      }
    },
    actionLink3() {
      return {
        link: this.data.actionLink3,
        text: this.data.actionText3
      }
    },
    actionLink4() {
      return {
        link: this.data.actionLink4,
        text: this.data.actionText4
      }
    },
    actionLink5() {
      return {
        link: this.data.actionLink5,
        text: this.data.actionText5
      }
    },
    actionLink6() {
      return {
        link: this.data.actionLink6,
        text: this.data.actionText6
      }
    },
    actionLink7() {
      return {
        link: this.data.actionLink7,
        text: this.data.actionText7
      }
    },
    actionLink8() {
      return {
        link: this.data.actionLink8,
        text: this.data.actionText8
      }
    },
    actionLink9() {
      return {
        link: this.data.actionLink9,
        text: this.data.actionText9
      }
    },
    actionLink10() {
      return {
        link: this.data.actionLink10,
        text: this.data.actionText10
      }
    },
    actionLink11() {
      return {
        link: this.data.actionLink11,
        text: this.data.actionText11
      }
    }
  },
  mounted () {
    if(!isServer){
      require('particles.js')
      window.particlesJS.load('cc', 'cc.json');
    }
    function typing(theater){
      theater
      .addScene("少加班，多恋爱",1800,-7,600)
      .addScene("少搬砖，把酒干",1800,-7,700)
      .addScene("少抓头发，把灯开",1800,-8,800)
      .addScene((done) =>{
        typing(theater)
        done()
      })
    }
    const theater = theaterJS();
    theater.
    on('type:start, erase:start', function () {
      theater.getCurrentActor().$element.classList.add('typing')
    }).
    on('type:end, erase:end', function () {
      theater.getCurrentActor().$element.classList.remove('typing')
    })

    theater
    .addActor('mainTitle',{speed: 1, accuracy: 1 })
    .addScene(`mainTitle:${this.$title}`,600)
    theater
    .addActor('description', { speed: 0.5, accuracy: 1 })
    .addScene(`description:${this.data.tagline}`, 600)
    theater
    .addActor('line', { speed: 0.5, accuracy: 1 })
    .addScene(300)
    .addScene(`line:只为让你：`, 500)
    // .addScene(`line:只为这样的你：`, 500)
    .addScene(
      (done) =>{
        typing(theater)
        done()
      }
    )
    // .addScene(theater.replay.bind(theater));
  }
}
</script>

<style lang="stylus">
@keyframes blink {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.typing::after {
  content: "|";
  animation: blink 500ms infinite;
}
.cc{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 1
}
.bg
  width 40%
  height 100%
  position: fixed;
  top 0
  // left 0
  bottom 0
  right 0
.home
  // font-family: neo-sans, sans-serif;
  z-index 2
  // padding $navbarHeight 2rem 0
  max-width 100%
  margin 0px auto
  display block;
  height 100%
  overflow hidden
  background #f8fafc
  .hero
    text-align center
    position relative
    top 3rem
    margin-left -30rem
    img
      max-width: 100%
      // max-height 280px
      display block
      margin 0rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      text-align left
      max-width 25rem
      font-size 1.6rem
      line-height 1.3
      color lighten($--color-black, 30%)
    .action
      margin-top:5rem
    .action-button
      margin 0 0 1rem 1rem
      display inline-block
      font-size 1.2rem
      color #fff
      background-image: linear-gradient(to right, #0097e6, #14d4f4);
      padding 0.5rem 1.2rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        background-color lighten($--color-primary, 10%)
  .features
    position relative
    z-index 10
    border-top 0px solid $borderColor
    padding 1.2rem 0
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content flex-start
    max-width 60rem;
    margin-top 6rem
  .feature
    box-sizing border-box
    padding:.5rem
    box-shadow: 0 6px 18px 0 rgba(0,0,0,.1);
    flex-grow 1
    flex-basis 18%
    max-width 18%
    border-radius .2rem
    background #fff
    border 0px solid rgba(0,0,0,.05)
    transition: all .3s ease-in-out;
    overflow hidden
    margin 0 1rem 1rem 0
    &:hover{
      // transform: translateY(-0.1rem);
      box-shadow: 0 6px 32px 0 rgba(0,0,0,.2);
      border 0px solid rgba(0,0,0,0)
    }
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color rgba(0,0,0,.85)
      margin 0
      text-align center
      background rgba(0,0,0,.01)
      margin -0.5rem -0.5rem 0 -0.5rem;
      padding:.5rem
    p
      height:4.5rem;
      color rgba(0,0,0,.5)
      line-height 1.5
      font-size .85rem
      text-indent: 1.5rem;
      padding-top .5rem
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    overflow-y auto
    .hero
      top 1rem
    .features
      margin-top 0
      flex-direction column
      margin-left 0 !important
    .feature
      max-width 100%
      width 100%

@media (max-width: $MQMobileNarrow)
  .home
    overflow-y auto
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      margin-left 0
      top 1rem
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        margin-left auto !important
        font-size 1.8rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        margin-left auto !important
        text-align  center
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
        margin .5rem
      .action
        margin-left: 0 !important
        width: 100% !important
        text-align left;
        margin-top:0
    .feature
      margin-top 0
      h2
        font-size 1.25rem
</style>
