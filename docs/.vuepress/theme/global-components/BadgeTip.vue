<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render(h, { props, slots }) {
    return h(
      'span',
      {
        class: ['sealui-badge', `is-${props.type}`],
        style: {
          verticalAlign: props.vertical
        }
      },
      props.text || slots().default
    )
  }
}
</script>

<style lang="stylus" scoped>
.sealui-badge
  display inline-block
  font-size .65rem
  height 1.2rem
  line-height 1.2rem
  border-radius .15rem
  padding 0 .3rem
  color white
  background-color #8c99a5
  &.is-tip
    background-color #8c99a5
  &.is-green
    background-color #09bb07
  &.is-error,
  &.is-danger
    background-color #ed4014
  &.is-warning,
  &.is-warn,
  &.is-yellow
    background-color #fdbe01
  &.is-blue
    background-color #1499f8
  & + &
    margin-left .3rem
</style>
