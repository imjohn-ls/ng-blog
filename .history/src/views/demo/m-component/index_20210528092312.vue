<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="temA" name="temA">temA</el-tab-pane>
      <el-tab-pane label="temB" name="temB">temB</el-tab-pane>
      <el-tab-pane label="temC" name="temC">temC</el-tab-pane>
    </el-tabs>
    <component :is="currentView"></component>
  </div>
</template>
<script>
export default {
  name: 'm-component',
  data() {
    return {
      activeName: 'temA',
      currentView: 'm-temA'
    }
  },
  mounted() {},
  methods: {
    handleClick(val, event) {
      this.currentView = val.$vnode 
      console.log(val)
      console.log(event)
    }
  }
}
</script>
<style lang="scss" scoped></style>
