<template>
  <div class="app-home">
    <div class="grid-container">
      <div class="A"></div>
      <div class="B"></div>
      <div class="C"></div>
      <div class="D"></div>
      <div class="E"></div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$router)
    // this.init()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-home {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 0.9fr 1.1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'A A C D'
      'B B C D'
      'E E E E';
  }

  .A {
    grid-area: A;
  }

  .B {
    grid-area: B;
  }

  .C {
    grid-area: C;
  }

  .D {
    grid-area: D;
  }

  .E {
    grid-area: E;
  }
}
</style>
