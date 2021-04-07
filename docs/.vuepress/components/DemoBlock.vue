<template>
  <div class="demo-block" :class="[blockClass, { hover: hovering }]" @mouseenter="hovering = true" @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="description">
      <slot></slot>
      <!-- <seal-tooltip placement="top" :content="controlText">
      <i :class="[iconClass, { 'hovering': hovering }]" @click="isExpanded = !isExpanded"></i>
      </seal-tooltip> -->
    </div>
    <div class="meta">
      <slot name="highlight"></slot>
    </div>
    <div class="demo-block-control" ref="control" @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
.demo-block {
  margin-bottom: 1rem;
  border: solid 1px #e9e9e9;
  border-radius: 4px;
  transition: 0.2s;
  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    border-top: solid 1px #e9e9e9;
    clear: both;
    overflow: hidden;
    height: 0px;
    transition: height 0.2s;
    margin-bottom: -1px;
    .meta-tool {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }

  .description {
    padding: 6px 60px 18px 24px;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 1.8;
    color: #333;
    word-break: break-word;
    position: relative;
    border-top: solid 1px #e9e9e9;
    i {
      position: absolute;
      right: 8px;
      top: 50%;
      margin-top: -9px;
      transform: translateX(-50%);
      color: rgba(0, 0, 0, 0.65);
      font-size: 20px;
      cursor: pointer;
    }

    &::after {
      position: absolute;
      top: -13px;
      content: '组件描述';
      font-size: 14px;
      font-weight: 500;
      left: 13px;
      background-color: #fff;
      padding: 0 10px;
      border-radius: 0 0 3px 0;
      color: #314659;
    }
    p {
      margin: 12px 0 0px;
    }

    /*code {
        color: #5e6d82;
        background-color:rgba(248, 248, 248, 0.08);
        margin: 0 4px;
        transform: translateY(-2px);
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
      }*/
  }

  .highlight {
    width: 100%;
    border-top: solid 0px #e9e9e9;
    border-bottom: solid 1px #e9e9e9;
    position: relative;
    border-radius: 0;
    div[class*='language-'],
    pre[class*='language-'] {
      background: #f8f8f8;
      border-radius: 0;
      code {
        color: #333;
      }
      .highlight-lines {
        .highlighted {
          background-color: #cccccc61;
        }
      }
    }
    pre[class*='language-'] {
      background: transparent;
    }
    .token.punctuation {
      color: #999;
    }
    /*
      &::after{
        position: absolute;
        top: 0px;
        content: '示例代码';
        font-size: 12px;
        left: 0;
        background-color: rgba(0,0,0,.1);
        padding: 2px 5px;
        border-radius: 0 0 3px 0;
        color: #666;
        border: 0px solid #e9e9e9;
        border-top: 0 none;
        border-left: 0 none;
      }*/
    pre {
      margin: 0;
    }
  }

  .demo-block-control {
    border-top: solid 1px #e9e9e9;
    height: 40px;
    box-sizing: border-box;
    background-color: #fafafa;
    margin-top: -1px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    color: rgba(0, 0, 0, 0.55);
    cursor: pointer;
    transition: 0.2s;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 20px;
      line-height: 40px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      /* position: absolute;*/
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 40px;
      transition: 0.3s;
      display: inline-block;
    }
    /*
      &:hover {
        color: #20a0ff;
        background-color: #f8f8f8;
      }
      */
    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }
  }
}
h2 + .demo-block,
h3 + .demo-block,
h4 + .demo-block {
  margin-top: 0.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false
    }
  },

  props: {
    jsfiddle: Object,
    default() {
      return {}
    }
  },

  methods: {},

  computed: {
    blockClass() {
      return `demo-${this.$router.currentRoute.path.split('/').pop()}`
    },

    iconClass() {
      return this.isExpanded ? 'sealui-icon-chevron-up' : 'sealui-icon-chevron-down'
    },

    controlText() {
      return this.isExpanded ? '隐藏代码' : '展示代码'
    },

    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return Math.max(this.$el.getElementsByClassName('description')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight)
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    }
  },

  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      //this.codeArea.style.height = val ? `auto` : '0px';
    }
  },

  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName('highlight')[0]
      if (this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%'
        highlight.borderRight = 'none'
      }
    })
  }
}
</script>
