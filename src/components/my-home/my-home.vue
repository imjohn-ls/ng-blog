<template>
  <div class="home">
    <p>{{home}}</p>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        home: "home"
      }
    }
  }
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
