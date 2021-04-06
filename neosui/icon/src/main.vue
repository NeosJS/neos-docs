<template>
  <i class="ne-icon" :class="[iconName, iconRotate, customClass]" :style="styles"></i>
</template>

<script>
export default {
  name: 'NeIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 0
    },
    rotate: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `ne-icon--${this.name}`
    },
    iconRotate() {
      return this.rotate && `is-rotate`
    },
    styles() {
      let _style = {}
      if (this.color) _style.color = this.color
      if (this.size) {
        _style.width = `${this.size}px`
        _style.height = `${this.size}px`
      }
      return _style
    }
  }
}
</script>
