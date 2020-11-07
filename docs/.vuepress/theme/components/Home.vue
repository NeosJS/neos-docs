<template>
  <main class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <div class="bg" :style="'background:url(' + bg + ') no-repeat;background-size:cover;background-position: 55%;'"></div>
    <header class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" :alt="data.heroAlt || 'hero'" />

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description }}
      </p>

      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink" v-if="data.actionLink" />
        <NavLink class="action-button" :item="actionLink1" v-if="data.actionLink1" />
        <NavLink class="action-button" :item="actionLink2" v-if="data.actionLink2" />
        <NavLink class="action-button" :item="actionLink3" v-if="data.actionLink3" />
        <NavLink class="action-button" :item="actionLink4" v-if="data.actionLink4" />
        <NavLink class="action-button" :item="actionLink5" v-if="data.actionLink5" />
      </p>
    </header>

    <div class="features" v-if="data.features && data.features.length">
      <div class="feature" v-for="(feature, index) in data.features" :key="index">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import bg from '@imgs/bg.jpg'
export default {
  components: { NavLink },
  data() {
    return {
      bg
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
    }
  }
}
</script>

<style lang="stylus">
.bg
  width 100%
  height 100%
  position: fixed;
  top 0
  left 0
  bottom 0
  right 0
.home
  z-index 2
  // padding $navbarHeight 2rem 0
  max-width 100%
  margin 0px auto
  display block
  .hero
    text-align center
    position relative
    top 20rem
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
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($--color-black, 40%)
    .action-button
      margin 0 0 0 1rem
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
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin 2.5rem auto 0 auto
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    max-width 80%
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      margin-left 0
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 1.8rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
        margin .5rem
      .action
        text-align left
    .feature
      h2
        font-size 1.25rem
</style>
