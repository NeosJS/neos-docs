<script>
import Emitter from '../..//mixins/emitter'

export default {
  name: 'NeCheckboxGroup',

  componentName: 'NeCheckboxGroup',

  mixins: [Emitter],

  inject: {
    neFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _neFormItemSize() {
      return (this.neFormItem || {}).neFormItemSize
    },
    checkboxGroupSize() {
      return this.size || this._neFormItemSize || (this.$ThinkAcademy || {}).size
    }
  },

  watch: {
    value(value) {
      this.dispatch('NeFormItem', 'ne.form.change', [value])
    }
  }
}
</script>

<template>
  <div class="ne-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
