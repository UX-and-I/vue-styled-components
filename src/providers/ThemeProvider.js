import { h, provide, toRefs } from 'vue'

export default {
  props: {
    theme: Object
  },
  setup (props) {
    const { theme } = toRefs(props)

    provide('theme', theme)
  },

  render () {
    return h('div', {}, this.$slots.default())
  }
}

