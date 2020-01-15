<template>
  <button class="vant-btn" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {

  name: 'Button',
  props: {
    type: { // 类型
      type: String,
      default: 'default'
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
