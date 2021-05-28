<template>
  <div class="top">
    <div class="top_content">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
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
      menuList: require('@/assets/json/router.json'),
      options: [],
      value: [],
      list: [],
      loading: false,
      states: require('@/assets/json/search.json')
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  methods: {
    goHome() {
      this.$router.push({
        path: '/homes'
      })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
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
    padding: 10px 15px;
    overflow: hidden;
    background: #333;
    position: relative;
    .top-search {
      width: 280px;
      display: block;
      position: absolute;
      right: 30px;
      padding-left: 15px;
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
  .el-select__input {
    margin-left: 32px;
  }
}
</style>
