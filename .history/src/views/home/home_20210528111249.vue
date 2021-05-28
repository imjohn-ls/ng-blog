<template>
  <div class="app-home">
    
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$router)
    // this.init()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-home {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
