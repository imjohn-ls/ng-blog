<template>
  <div class="login">
    <div class="login-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="学生姓名">
          <el-input v-model="form.stuname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-button @click="comLogin">登录</el-button>
        <!-- <el-button @click="comRegister">注册</el-button> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import { getLogin } from '@api/login'
export default {
  data() {
    return {
      form: {
        stuname: '',
        password: ''
      }
    }
  },
  mounted() {

  },
  methods: {
    async comLogin() {
      const res = await getLogin(this.form)
      if (res.data) {
        sessionStorage.setItem('SESSION_ID', '123')
        this.$router.push({
          path: '/homes',
          params: res.data
        })
      }
    },
    comRegister() {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>
<style lang="scss">
@import url('./index.scss');
</style>
