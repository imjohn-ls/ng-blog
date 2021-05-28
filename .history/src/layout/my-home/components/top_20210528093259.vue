<template>
  <div class="top">
    <div class="top_content">
      <div class="topmenulist">
        <ul>
          <li v-for="(item, index) in menuList" index="index" @click="goHome()">首页</li>
          <li>寄意寒星</li>
          <li>寄意寒星</li>
          <li>寄意寒星</li>
          <li>寄意寒星</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        path: '/homes'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  .top_content {
    height: 100px;
    width: 1200px;
    margin: auto;
    background: #f00;
    .topmenulist {
      height: 100px;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        li {
          cursor: pointer;
          flex: 1;
          list-style: none;
          font-size: 0.16rem;
          line-height: 100px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
