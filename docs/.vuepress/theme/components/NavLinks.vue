<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <!-- <div class="nav-item" v-for="item in userLinks" :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div> -->
    <template v-for="item in userLinks">
      <div class="nav-item" v-if="!item.dropdown && item.type !== 'links'"  :key="item.id">
        <NavLink :item="item"  />
      </div>
    </template>
    <ne-dropdown class="nav-item" trigger="click">
      <span class="ne-dropdown-link">{{navName}}
        <NeIcon name="chevron-down" />
      </span>
      <ne-dropdown-menu slot="dropdown">
        <ne-dropdown-item  :command="item.text" v-for="item in userLinks" :key="item.link">
          <NavLink v-if="item.type !== 'links' && item.dropdown" :item="item" />
        </ne-dropdown-item>
      </ne-dropdown-menu>
    </ne-dropdown>
    <!-- repo link -->
    <a v-if="repoLink" :href="repoLink" class="repo-link" target="_blank" rel="noopener noreferrer">
      {{ repoLabel }}
      <OutboundLink />
    </a>
  </nav>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from '@theme/components/NavLink.vue'

export default {
  data(){
    return {
      navName: 'More API'
    }
  },
  components: { NavLink, DropdownLink },

  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav() {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = (themeLocales[path] && themeLocales[path].label) || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repoLink() {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`
      }
      return null
    },

    repoLabel() {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">
.ne-dropdown-link
  color #555
  pointer cursor
  font-weight: 500;
.ne-dropdown
  border:1px solid $borderColor;
  border-radius .2rem
  padding:.2rem .5rem
  line-height:1.5rem !important
  font-size .9rem
  cursor pointer
  .ne-icon
    margin-top -.3rem
    margin-left .5rem
    color #888
    font-size 1rem
.ne-dropdown-menu__item
  .nav-link
    display block
    color #555
    cursor pointer
.ne-dropdown-menu__item:focus,
.ne-dropdown-menu__item:not(.is-disabled):hover
  background transparent
  a
    color #000
.nav-links
  display inline-block
  a
    line-height 3.7rem
    color #555
    transition: color 0.2s ease;
    &:hover
      color $--color-black
    &.router-link-active
      color $--color-primary
    .sealui-badge
      vertical-align .2rem !important
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
  .repo-link
    margin-left 1.5rem

@media (max-width: $MQMobile)
  .nav-links
    a
     line-height 1rem
     color #2c3e50
    .nav-item, .repo-link
      margin-left 0

@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      // color $--color-primary
      opacity: 1
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($--color-white, 8%)
</style>
