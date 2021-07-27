<template>
  <div class="top">
    <div class="top_content">
      <div class="grid-container">
        <div class="header-left">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="goRouter" background-color="#2d5df7" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="`${index}`">{{ item.label }}</el-menu-item>
          </el-menu>
        </div>
        <div class="header-search">
          <el-autocomplete v-model="state" clearable :fetch-suggestions="querySearchAsync" placeholder="快捷ll" @select="handleSelect">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-autocomplete>
          <!-- <el-input placeholder="请输入内容" v-model="input3">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input> -->
        </div>
        <div>
          <el-button>注册</el-button>
          <el-button>登录</el-button>
        </div>
      </div>
      <el-drawer title="m-demo" :visible.sync="drawer" :direction="direction" :before-close="closeDrawer">
        <div class="m-demo">
          <el-button v-for="(item, index) in dawerList" :key="index" @click="goTo(item.path)">{{ item.label }}</el-button>
        </div>
      </el-drawer>
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
      menuList: require('@/assets/json/menu.json'),
      dawerList: require('@/assets/json/drawer.json'),
      input3: '',
      select: '',
      searchList: [],
      loading: false,
      state: '',
      states: require('@/assets/json/search.json'),
      activeIndex: '0',
      timeout: null,
      drawer: false,
      direction: 'rtl'
    }
  },
  mounted() {},
  methods: {
    querySearchAsync(queryString, cb) {
      const searchList = this.states
      var results = queryString ? searchList.filter(this.createStateFilter(queryString)) : searchList

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 500 * Math.random())
    },
    createStateFilter(queryString) {
      return state => {
        return state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(val) {
      this.$router.push({
        path: val.path
      })
    },
    goRouter(ele) {
      if (this.menuList[ele].name === 'm-demo') {
        this.drawer = !this.drawer
      } else if (this.menuList[ele].path == this.$route.path) {
        this.$parent.reload()
      } else {
        this.$router.push({
          path: this.menuList[ele].path
        })
      }
    },
    closeDrawer() {
      this.drawer = !this.drawer
    },
    goTo(val) {
      this.drawer = !this.drawer
      this.$router.push(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background: #fff;
  .top_content {
    padding: 0 15px;
    height: 60px;
    margin: auto;
    overflow: hidden;
    background: #2d5df7;
    .grid-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 60px;
      line-height: 60px;
      .header-left {
        flex: 1;
      }
      .header-search {
        height: 60px;
        width: 300px;
        display: flex;
        .el-autocomplete {
          display: flex;
        }
      }
    }
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
}
.m-demo {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  .el-button {
    width: 120px;
    margin: 5px;
  }
}
</style>
