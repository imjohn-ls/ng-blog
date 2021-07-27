<template>
  <div class="app-home">
    <div class="app-conent">
      <div class="block">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="aticleBlock">
        <ul>
          <li @click="GoArticleDetail(item)" v-for="(item, index) in article" :key="index">
            {{ item.aticleTitle }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticle } from '@api/api'
export default {
  name: 'Home',
  data() {
    return {
      article: []
    }
  },
  mounted() {
    console.log(this.$router)
    // this.init()
    this.getArt()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    },
    async getArt() {
      const res = await getArticle({
        pageSize: '5'
      })
      if (res.data) {
        this.article = res.data
      }
    },
    GoArticleDetail(val) {
      // this.$router.push({
      //   name: 'm-article',
      //   query: {
      //     art: JSON.stringify(val)
      //   }
      // })
      sessionStorage.setItem('articleTitle', JSON.stringify(val))
      this.$router.push({
        name: 'm-article'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-home {
  width: 100%;
  .app-conent {
    width: 100%;
    height: 600px;
    // position: relative;
  }
  // .app-conent::after {
  //   background: url('../../assets/img/bz.jpg');
  //   content: '';
  //   opacity: 0.5;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  //   position: absolute;
  // }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item.is-animating {
  transition: opacity 0.2s ease-in-out !important;
}
.aticleBlock {
  ul {
    li {
      font-size: 16px;
      text-align: left;
      line-height: 32px;
      padding-left: 15px;
      cursor: pointer;
    }
  }
}
</style>
