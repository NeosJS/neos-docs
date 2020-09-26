<template>
  <div class="sealui-badge">
    <slot></slot>
    <transition name="sealui-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || dot)"
        v-text="content"
        class="sealui-badge__content"
        :class="[type ? 'sealui-badge--' + type : '', { 'is-fixed': $slots.default, 'is-dot': dot }]"
      >
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    max: {
      type: Number,
      default: 10
    },
    dot: Boolean,
    hidden: Boolean,
    type: String
  },

  computed: {
    content() {
      if (this.isDot) return
      const value = this.value
      const max = this.max
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
.sealui-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  &__content {
    background-color: #ed4014;
    border-radius: 1rem;
    color: #fff;
    display: inline-block;
    font-size: 0.65rem;
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.35rem;
    text-align: center;
    white-space: nowrap;
    border: 0px solid #fff;
    min-width: 0.4rem;
    &.is-fixed {
      position: absolute;
      top: 0;
      right: #{1 - 0.8rem / 2};
      transform: translateY(-50%) translateX(100%);
      &.is-dot {
        right: 5px;
      }
    }
    &.is-dot {
      height: 10px;
      width: 10px;
      min-width: 10px;
      padding: 0;
      right: 0;
      border-radius: 50%;
      border: 1px solid #fff;
    }
  }
  &--success {
    background-color: #09bb07;
  }
  &--warning {
    background-color: #faa918;
  }
  &--info {
    background-color: #8c99a5;
  }
}
.sealui-zoom-in-center-enter-active,
.sealui-zoom-in-center-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.sealui-zoom-in-center-enter,
.sealui-zoom-in-center-leave-active {
  opacity: 0;
  transform: scaleX(0);
}
</style>
