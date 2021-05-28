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
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.cc {
  h3
}
</style>
