import Vue from 'vue'
import Toast from './toast.vue'

let ToastConstructor = Vue.extend(Toast)

let instance
const ToastBox = options => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let id =
    'toast_' +
    Math.random()
      .toString(36)
      .substring(3, 20)
  instance = new ToastConstructor({
    data: options
  })
  instance.id = id
  instance.$mount()
  const warp = document.getElementById('gameCoursewareContent')
  // document.body.appendChild(instance.$el)
  warp.appendChild(instance.$el)
  instance.visible = true
  return instance
}
ToastBox.close = () => {
  if (instance) {
    instance.visible = false
  }
}

export default ToastBox
