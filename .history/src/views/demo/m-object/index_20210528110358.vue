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
      console.log(Object.keys(this.mObj))
      console.log(Object.values(this.mObj))
      for (const item in this.mObj) {
        const element = array[index];

      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
