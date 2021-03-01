<template>
  <div class="login">
    <div class="login-form">
      <!-- <login-form @on-success-valid="handleSubmit"></login-form> -->
    </div>
  </div>
</template>
<script>
// import LoginForm from '_c/login-form'
export default {
  data() {
    return {

    };
  },
  methods: {
    handleSubmit (data) {
      console.log(data);
      const param = {
        accountNo: data.userName,
        password: data.password
      }
      console.log(param);
      this.$axios('/login',param).then((res) => {
        console.log(res);

      })
      // this.$router.push({
      //       name: this.$config.homeName
      //     })
      // this.handleLogin({ userNo: data.userName, password: data.password }).then(res => {
      //   if (res.data.code === 'success') {
      //     this.$router.push({
      //       name: this.$config.homeName
      //     })
      //   } else {
      //     this.$Message.error(res.data.result)
      //   }
      // })
    },
  },
  components: {
    LoginForm
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
