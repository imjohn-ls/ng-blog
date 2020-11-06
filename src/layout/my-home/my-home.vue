<template>
  <div class="wrapper">
    <top ref="top"></top>
    <div class="wrapper_content">
      <transition :name="content">
        <router-view v-if="isRouterAlive" />
      </transition>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import top from "./components/top";
import bottom from "./components/bottom";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      content: "",
      isRouterAlive: true
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgba(248, 248, 248, 1);
  .wrapper_content {
    width: 1200px;
    margin: auto;
    min-height: calc(100vh - 224px);
    // margin-top: 10px;
    // 操作域距离菜单暂定8px
    margin-top: 10px;
  }
}
</style>
