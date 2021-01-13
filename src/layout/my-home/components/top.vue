<template>
  <div class="top">
    <div class="top_content">
        <div class="topmenulist">
          <ul>
            <li>寄意寒星</li>
            <li>寄意寒星</li>
            <li>寄意寒星</li>
            <li>寄意寒星</li>
            <li>寄意寒星</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  .top_content {
  height: 100px;
  width: 1200px;
  margin: auto;
  background: #f00;
  .topmenulist {
    height: 100px;
    ul {
      margin: 0;
      padding: 0;
      display: flex;;
      li {
        flex: 1;
        list-style: none;
        font-size: 0.16rem;
        line-height: 100px;
        color: #ffffff;
      }
    }
  }
}
}
</style>
