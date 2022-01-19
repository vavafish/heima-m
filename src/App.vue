<template>
  <div id="app">
    <h1>黑马头条</h1>
    <router-view/>
    <div>
      <i class="iconfont icon-yanzhengma"></i>
      <span class="iconfont icon-dianzan2"></span>
    </div>
    <van-icon name="chat-o" badge="99+"/>
    <br>
    <van-rate v-model="value" :size="25" color="#ffd21e" void-icon="star" void-color="#eee"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less"></style>
