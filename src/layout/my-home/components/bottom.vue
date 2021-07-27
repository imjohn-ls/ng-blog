<template>
  <div class="bottom">
    <p></p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bottom {
  margin: 0;
  padding: 0;
  width: 1200px;
  height: 60px;
  line-height: 60px;
  z-index: 3;
  position: fixed;
  bottom: 0;
  animation: mymove 1s linear infinite alternate;
  -webkit-animation: mymove 1s linear infinite alternate; /*Safari and Chrome*/
  p {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-image: url('../../../assets/img/bottom-bg.png');
  }
}
@keyframes mymove {
  from {
    bottom: 0px;
  }
  to {
    bottom: 3px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    bottom: 0px;
  }
  to {
    bottom: 3px;
  }
}
</style>
