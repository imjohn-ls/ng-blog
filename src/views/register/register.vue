<template>
  <div class="register">
    <div class="register-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="学生姓名">
          <el-input v-model="form.stuname"></el-input>
        </el-form-item>
        <el-form-item label="年级">
          <el-input v-model="form.gender"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-button @click="Register">注册</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import { perAddStu } from '@api/api'
export default {
  data() {
    return {
      form: {
        stuname: '',
        password: '',
        gender: ''
      }
    }
  },
  mounted() {},
  methods: {
    async Register() {
      const res2 = await perAddStu(this.form)
      res2.data && this.$message('注册成功!')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss">
@import url('./index.scss');
</style>
