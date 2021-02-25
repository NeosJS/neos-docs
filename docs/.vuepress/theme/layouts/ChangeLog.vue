<template>
  <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <Navbar v-if="shouldShowNavbar && !$page.frontmatter.home" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Page :sidebar-items="sidebarItems" class="changelog" ref="changeLog">
      <div>asdasdasd</div>
    </Page>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'
import '@theme/styles/icon.css'
export default {
  components: { Page, Sidebar, Navbar },
  data() {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return this.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || this.$themeLocaleConfig.nav
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return !frontmatter.home && frontmatter.sidebar !== false && this.sidebarItems.length
    },

    sidebarItems() {
      return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath)
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    const changeLog = this.$refs.changeLog;
    const changeLogNodes = changeLog.$el.children;
    let aText = changeLogNodes[0]
    let node =  this.$refs.changeLog.$el.children[0].children;
    for(let len = node.length,i=0;i<len;i++){
      let _node = node[i]
      if (_node.tagName === 'H3' || _node.tagName === 'H2') {
        let a = _node.querySelectorAll('a');
        for(let len = a.length,k=0;k<len;k++){
          if(a[k] && a[k].getAttribute('class') === 'header-anchor'){
            a[k].remove();
          }else{
            let version = a[k].textContent.trim().split(" ")[0]
            a[k].setAttribute('href',`https://www.npmjs.com/package/@neosjs/electron-ipc/v/${version}`)
          }
        }
      }
      if (_node.tagName === 'UL') {
        let li = _node.querySelectorAll('li');
        for(let len = li.length,j=0;j<len;j++){
          let a = li[j].querySelector('a');
          a.setAttribute('href','')
          a.removeAttribute('target','').removeAttribute('rel','')
          // a && a.remove();
        }

      }
    }
    // _text = _text.replace(/<a (.*?)>/gi,"");
    // _text = _text.replace(/<\/a>/gi,"");
    // _text = _text.replace(/<svg (.*?)>/gi,"");
    // _text = _text.replace(/<\/svg>/gi,"");
    // _text = _text.replace(/#/gi,"");
    // aText.innerHTML.replace(/<a (.*?)>/gi,"");
    // })
    // this.$refs.changeLog.$el.children[0].innerHTML = node
    // for (let len = a.length, i = 1; i < len; i++) {
    //   console.log(a[i])
    //   // a[i].removeAttribute('href');
    //   // a[i].innerHTML.replace(/<span (.*?)>/gi,"");

    //   // a[i].innerHTML.replace(/<\/span>/gi,"");
    // }
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="scss" src="@theme/styles/change-log.scss">

</style>
