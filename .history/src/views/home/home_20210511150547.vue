<template>
  <div class="app-home">
    <!-- <el-button @click="goTo('./demo')">demo</el-button>
    <el-button @click="goTo('./m-table')">m-table</el-button>
    <el-button @click="goTo('./m-filter')">m-filter</el-button>
    <el-button @click="goTo('./m-provider')">m-provider</el-button>
    <el-button @click="goTo('./m-file')">m-file</el-button>
    <el-button @click="goTo('./m-qrcode')">m-qrcode</el-button>
    <el-button @click="goTo('./m-class')">m-class</el-button>
    <el-button @click="goTo('./m-blob')">m-blob</el-button>
    <el-button @click="goTo('./m-secret')">m-secret</el-button>
    <el-button @click="goTo('./m-print')">m-print</el-button> -->
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      //如果需要自动切换海报
      // autoplay: {
      //   delay: 1000,//时间 毫秒
      //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
    })
    console.log(this.$router)
    this.test()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    }
  }
}
</script>
