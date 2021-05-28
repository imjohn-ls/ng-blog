<template>
  <div class="app-home">
    <el-button @click="goTo('./demo')">demo</el-button>
    <el-button @click="goTo('./m-table')">m-table</el-button>
    <el-button @click="goTo('./m-filter')">m-filter</el-button>
    <el-button @click="goTo('./m-provider')">m-provider</el-button>
    <el-button @click="goTo('./m-file')">m-file</el-button>
    <el-button @click="goTo('./m-qrcode')">m-qrcode</el-button>
    <el-button @click="goTo('./m-class')">m-class</el-button>
    <el-button @click="goTo('./m-blob')">m-blob</el-button>
    <el-button @click="goTo('./m-secret')">m-secret</el-button>
    <el-button @click="goTo('./m-print')">m-print</el-button>
    <el-button @click="goTo('./m-component')">m-component</el-button>
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
    this.init()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-
</style>
