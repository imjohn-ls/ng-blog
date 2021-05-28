<template>
   <div></div>
</template>
<script>
export default {
  data() {
    return {
      mObj: {
        name: 'john',
        id: 'john',
        age: 'john',
        grader: 'john',
        adress: 'john',
        email: 'john',
        phone: 'john',
        fox: 'john',
        sex: 'john'
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.mObj
    }
  }
}
</script>
<style lang='scss' scoped></style>
