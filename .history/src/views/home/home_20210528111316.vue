<template>
  <div class="app-home">
    <div class="grid-container">
      <div class="A"></div>
      <div class="B"></div>
      <div class="C"></div>
      <div class="D"></div>
      <div class="E"></div>
    </div>
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
    <el-button @click="goTo('./m-forOf')">m-forOf</el-button>
    <el-button @click="goTo('./m-object')">m-object</el-button>
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
  .grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 0.9fr 1.1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "A A C D"
    "B B C D"
    "E E E E";
}

.A { grid-area: A; }

.B { grid-area: B; }

.C { grid-area: C; }

.D { grid-area: D; }

.E { grid-area: E; }

}
</style>
