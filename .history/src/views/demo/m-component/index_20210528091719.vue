<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">temA</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">temB</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">temC</el-tab-pane>
  </el-tabs>
    <component :is="currentView"></component>
  </div>
</template>
<script>
export default {
  name: 'm-component',
  data() {
    return {
      activeName: ''
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
