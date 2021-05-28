<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="temA">temA</el-tab-pane>
      <el-tab-pane label="配置管理" name="temB">temB</el-tab-pane>
      <el-tab-pane label="角色管理" name="temC">temC</el-tab-pane>
    </el-tabs>
    <component :is="currentView"></component>
  </div>
</template>
<script>
export default {
  name: 'm-component',
  data() {
    return {
      activeName: 'temA'
    }
  },
  mounted() {},
  methods: {
    handleClick(val, event) {
      console.log(val)
      console.log(event)
    }
  }
}
</script>
<style lang="scss" scoped></style>
