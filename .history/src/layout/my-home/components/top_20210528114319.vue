<template>
  <div class="top">
    <div class="top_content">
      <el-select class="top-search" v-model="value" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <!-- <div class="topmenulist">
        <ul>
          <li v-for="(item, index) in menuList" :key="index" @click="goHome(item)">{{ item.title }}</li>
        </ul>
      </div> -->
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
    height: 40px;
    width: 1200px;
    margin: auto;
    padding: 15px;
    .top-search {
      width: 200px;
      display: block;
      float: right;
      margin-right: 30px;
    }
    // .topmenulist {
    //   ul {
    //     margin: 0;
    //     padding: 0;
    //     display: flex;
    //     li {
    //       cursor: pointer;
    //       flex: 1;
    //       list-style: none;
    //       font-size: 0.16rem;
    //       line-height: 40px;
    //       color: #ffffff;
    //     }
    //   }
    // }
  }
}
</style>
