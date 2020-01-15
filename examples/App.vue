<template>
  <div id="app">
    <Button @click="openShare">分享一下</Button>
    <TradeShare :visable="showShare" @close="closeShare"></TradeShare>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      showShare: false, // 是否展示分享组件
    }
  },
  methods: {
    openShare() {
      this.showShare = !this.showShare;
    },
    closeShare() {
      this.showShare = false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
