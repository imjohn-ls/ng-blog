<template>
  <div class="top">
    <div class="top_content">
      <div class="topmenulist">
        <ul>
          <li v-for="(item, index) in menuList" :key="index" @click="goHome(item)">{{ item.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: require('@/assets/json/router.json')
    }
  },
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
  background: #fff;
  .top_content {
    background-image: url('../../../assets/img/bz.jpg');
    background-size: 100% 40px;
    background-repeat: no-repeat;
    height: 40px;
    width: 1200px;
    margin: auto;
    .topmenulist {
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        li {
          cursor: pointer;
          flex: 1;
          list-style: none;
          font-size: 0.16rem;
          line-height: 40px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
