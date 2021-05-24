<template>
  <div class="app-home">
    <div class="swiper-container">
      <div class="swiper-wapper">
        <div class="swiper-slide" v-for="(item, index) in dataList.imgList" :key="index">
          <img class="swiper-slide-img" :src="item.imgSrc" alt="" />
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
            imgSrc: require('@/assets/img/bz.jpg')
          },
          {
            imgSrc: require('@/assets/img/bz.jpg')
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.$router)
    this.init()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    },
    init() {
      new Swiper('.container', {
        loop: true,
        autoplay: {
          delay: 1000, //时间 毫秒
          disableOnInteraction: false //用户操作之后是否停止自动轮播默认true
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100vh;
  .swiper-wrapper {
    .swiper-slide {
      width: 100%;
      height: 100%;
      background-color: #42b983;
      text-align: center;
      height: 100vh;
      &-img {
  width: 100%;
  height: 100%;
}
    }
  }
}

</style>
