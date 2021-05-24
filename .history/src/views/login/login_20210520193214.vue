<template>
  <div class="login">
    <div class="login-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.userName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" v-model="form.passWord"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input type="password" placeholder="请输入真实姓名" v-model="form.realName"></el-input>
        </el-form-item>
        <el-button @click="comLogin">登录</el-button>
        <!-- <el-button @click="comRegister">注册</el-button> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import { getLogin } from '@api/login'
import { perQueryStu } from '@api/api'
import { perTest } from '@api/mock'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        userName: '',
        passWord: '',
        realName: ''
      }
    }
  },
  mounted() {},
  computed: {
    
  },
  methods: {
    async comLogin() {
      // sessionStorage.setItem('SESSION_ID', '123')
      // this.$router.push({
      //   path: '/homes'
      // })

      const test = await perTest()
      console.log(test)

      // const resut = await perQueryStu({
      //   id: '1'
      // })

      // const res = await getLogin(this.form)
      // if (res.data) {
      //   sessionStorage.setItem('SESSION_ID', '123')
      //   this.$router.push({
      //     path: '/homes',
      //     params: res.data
      //   })
      // }
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
