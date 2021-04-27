<template>
  <div>
    <img :src="imgSrc" alt="">
    <el-button @click="vprint()">打印</el-button>
  </div>
</template>
<script>
import printJS from '@/plugin/print-js'
export default {
  data() {
    return {
      dataBase: ''
    }
  },
  mounted() {},
  methods: {
    baseImg() {
      this.imgSrc = 'data:image/png;base64,' + this.dataBase
    },
    vprint() {
      console.log('dsf')
      printJS({
        printable:
          '',
        type: 'pdf',
        base64: true
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
