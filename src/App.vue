<template>
  <div id="app" class="fillcontain">
    <router-view></router-view>
  </div>
</template>

<script>

import { getmicsinfo } from '@/api/data'
export default {
  mounted() {
    window.screenHeight = document.documentElement.clientHeight
    this.fullHeight = window.screenHeight + 'px'
    getmicsinfo().then((res) => {
      if (res.code === 200) {
        this.$store.commit('savemiceinfo', res.data.data)
      }

    })
  },
}
</script>

<style lang="less">
@import './style/common.less';
</style>
