<template>
  <div class="login">
    <div class="login-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.userName" maxlength="20" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" maxlength="16" placeholder="请输入密码" v-model="form.passWord"></el-input>
        </el-form-item>
        <el-button @click="comLogin">登录</el-button>
        <el-button @click="weChatLogin">微信扫码</el-button>
        <!-- <el-button @click="comRegister">注册</el-button> -->
      </el-form>
    </div>
    <div v-show="qrCodeModal" title="请使用微信扫码登录！" class-name="vertical-center-modal" footer-hide width="350">
      <!-- <div class="qrcode" ref="qrCodeUrl" v-if="qrCodeModal" ></div>-->
      <div id="qrcode"></div>
    </div>
  </div>
</template>
<script>
import { getLogin } from '@api/login'
import { perUserLogin } from '@api/api'
import { perTest } from '@api/mock'
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      qrCodeModal: false,
      form: {
        userName: '',
        passWord: ''
      }
    }
  },
  mounted() {
    console.log(this.isIExplorer)
  },
  computed: {
    ...mapState('login', ['isIExplorer'])
  },
  methods: {
    async comLogin() {
      // sessionStorage.setItem('SESSION_ID', '123')
      // this.$router.push({
      //   path: '/homes'
      // })

      // const test = await perTest()
      // console.log(test)

      try {
        const res = await perUserLogin(this.form)
        if (res.data.respCode === '00000000') {
          sessionStorage.setItem('SESSION_ID', res.data.data[0].userName)
          this.$router.push({
            path: '/homes',
            params: res.data
          })
        } else {
          this.$message('别乱搞,大哥!')
        }
      } catch (error) {
        this.$message('没网,大哥!')
      }
    },
    comRegister() {
      this.$router.push({
        path: '/register'
      })
    },
    weChatLogin() {
      this.qrCodeModal = true
      this.createWxQrcode()
    },
    /* weixin */
    createWxQrcode() {
      var obj = new WxLogin(this.$config.wxConfig)
    }
  }
}
</script>
<style lang="scss">
@import url('./index.scss');
</style>
