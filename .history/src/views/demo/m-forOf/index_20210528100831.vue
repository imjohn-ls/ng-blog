<template>
  <div>
    <div class="cc">
      <h3>for...of</h3>
      <h3>{{ list }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-forOf',
  data() {
    return {
      list: ['1', '2', '3', '4', '5']
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] > 2) {
          break
        }
        console.log(this.list[i])
      }
      for (const item of this.list) {
        if (item > 2) {
          break
        }
        console.log(item)
      }
      this.list.forEach((item, index, arr) => {
        if (item === 3) return
        console.log(index)
        console.log(item) 
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cc {
  h3 {
    font-size: 14px;
  }
}
</style>
