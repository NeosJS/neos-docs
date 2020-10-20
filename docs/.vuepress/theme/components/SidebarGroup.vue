<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
  >
    <router-link
      v-if="item.path"
      class="sidebar-heading clickable"
      :class="{
        open,
        active: isActive($route, item.path)
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"> </span>
    </router-link>

    <p v-else class="sidebar-heading" :class="{ open }" @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"> </span>
    </p>

    <DropdownTransition>
      <SidebarLinks class="sidebar-group-items" :items="item.children" v-if="open || !collapsable" :sidebarDepth="item.sidebarDepth" :depth="depth + 1" />
    </DropdownTransition>
  </section>
</template>

<script>
import { isActive } from '../util'
import DropdownTransition from '@theme/components/DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'open', 'collapsable', 'depth'],
  components: { DropdownTransition },
  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = require('./SidebarLinks.vue').default
  },
  methods: { isActive }
}
</script>

<style lang="stylus">
.sidebar-group
  .sidebar-group
    padding-left 0.5em
  &:not(.collapsable)
    .sidebar-heading:not(.clickable)
      // cursor auto
      // color #999
  // refine styles of nested sidebar groups
  &.is-sub-group
    padding-left 0
    & > .sidebar-heading
      font-size 0.95em
      line-height 2
      font-weight normal
      padding-left 2rem
      cursor pointer
      &:not(.clickable)
        opacity 0.8
    & > .sidebar-group-items
      padding-left 0rem
      & > li > .sidebar-link
        font-size: 0.95em;
        border-left none
        padding-left 3rem
  &.depth-2
    & > .sidebar-heading
      border-left none

.sidebar-heading
  color #222
  transition color .15s ease
  cursor pointer
  font-size .9em
  font-weight bold
  // text-transform uppercase
  padding 0.25rem 1.5rem 0.5rem 1.25rem
  width 100%
  box-sizing border-box
  margin 0
  border-left 0.25rem solid transparent
  &.open, &:hover
    // color inherit
  .arrow
    position relative
    top -0.12em
    left 0.5em
  &.clickable
    &.active
      font-weight 600
      color $--color-primary
      border-left-color $--color-primary
    &:hover
      color $--color-primary

.sidebar-group-items
  transition height .1s ease-out
  font-size 0.95em
  overflow hidden
</style>
