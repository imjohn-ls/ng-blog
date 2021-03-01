<template>
  <div>
    <div>logo二维码</div>
    <vue-qr :logoSrc="imageUrl" text="helloworld" :size="200"></vue-qr>
    <div>条码</div>
    <img id="barcode" />
  </div>
</template>
<script>
import vueQr from 'vue-qr'
import JsBarcode from 'jsbarcode'
export default {
  components: {
    vueQr
  },
  data() {
    return {
      code: '20210227104447119',
      imageUrl: require('./img/logo.png')
    }
  },
  mounted() {
    JsBarcode('#barcode', '20210227104447119', {
      format: 'CODE128',
      // lineColor: '#000',
      // background: '#fff',
      width: 2,
      height: 40,
      fontSize: 12,
      displayValue: true,
      text: '6565656565656'
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
#barcode {
  // width: 400px;
  height: 50px;
}
</style>
