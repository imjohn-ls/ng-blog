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
      menuList: require('@/assets/json/router.json'),
      options: [],
      value: [],
      list: [],
      loading: false,
      states: require('@/assets/json/search.json').searchKey
    }
  },
  mounted() {
    console.log(this.states)
    this.list = this.states.map(item => {
      debugger
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
