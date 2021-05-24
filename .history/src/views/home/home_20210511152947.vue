<template>
  <div class="app-home">
    <div class="swiper-container">
      <div class="swiper-wapper">
        <div class="swapper-slide" v-for="">
          <img src="" alt="">
        </div>
      </div>
    </div>
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
    return {
      dataList: {
        imgList: [
          {
            imgSrc: '@/assets/img/bz.jpg'
          },
          {
            imgSrc: '@/assets/img/bz.jpg'
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.$router)
    this.test()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    },
    init() {
      new Swiper('.container', {

      })
    }
  }
}
</script>
