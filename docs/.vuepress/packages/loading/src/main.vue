<template>
  <div :class="className">
    <svg
      viewBox="0 0 16 16"
      version="1.1"
      :fill="fillColor"
      :width="size"
      :height="size"
      :aria-labelledby="name"
      aria-hidden="true"
      focusable="false"
      class="neosui-icon"
    >
      <defs v-if="isLinear">
        <linearGradient :id="linearId" x1="0%" y1="0%" x2="100%" y2="0%">
          <template v-for="(value, index) in strokeColor">
            <stop
              :offset="index === 'from' ? '0%' : '100%'"
              :style="'stop-color:' + value + ';stop-opacity:1'"
              :key="index"
            />
          </template>
        </linearGradient>
      </defs>
      <circle
        cx="8"
        cy="8"
        r="7.5"
        :stroke="circleColor"
        stroke-opacity="1"
        :stroke-width="strokeSize"
        vector-effect="non-scaling-stroke"
      ></circle>
      <image x="4" y="4" width="8" height="8" :xlink:href="logo" v-if="logo" />

      <text
        x="8"
        y="9"
        text-anchor="middle"
        font-size="3.5"
        style="font-family: SFProRounded-Medium,SF Pro Rounded,SFPro-Medium,Helvetica,Roboto,Arial"
        :fill="isLinear ? 'url(#' + linearId + ')' : stroke"
        v-if="showText"
      >
        {{ text }}
      </text>
      <path
        d="M15.5 8a7.502 7.502 0 00-7.5-7.5"
        fill="none"
        :stroke="isLinear ? 'url(#' + linearId + ')' : stroke"
        stroke-opacity="1"
        :stroke-width="strokeSize"
        :stroke-linecap="square ? 'square' : 'round'"
        vector-effect="non-scaling-stroke"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 8 8"
          to="360 8 8"
          :dur="duration"
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      uuid: Math.random()
        .toString(36)
        .substring(3, 20)
    }
  },
  props: {
    name: {
      type: String,
      default: 'loading'
    },
    logo: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 32
    },
    fillColor: {
      type: String,
      default: '#fafbfc'
    },
    strokeWidth: {
      type: Number,
      default: 0
    },
    strokeColor: {
      type: [String, Object],
      default: '#6f6f6f'
    },
    circleColor: {
      type: String,
      default: '#cfcfcf'
    },
    square: {
      type: Boolean,
      default: false
    },
    duration: {
      type: String,
      default: '1s'
    },
    maskClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    linearId() {
      return `linear_${this.uuid}`
    },
    stroke() {
      return typeof this.strokeColor === 'string' ? this.strokeColor : this.strokeColor['from']
    },
    isLinear() {
      return typeof this.strokeColor !== 'string'
    },
    showText() {
      return this.text && !this.logo && this.size > 60
    },
    strokeSize() {
      return this.strokeWidth || this.size * 0.0625
    },
    className() {
      return this.maskClass && `neosui-mask ${this.maskClass}`
    }
  }
}
</script>

<style lang="scss" scoped>
.neosui-mask {
  .neosui-icon {
    display: inline-block;
    vertical-align: baseline;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
