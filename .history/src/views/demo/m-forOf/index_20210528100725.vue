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
      list.forEach((item, index, arr) => {
  if (item === 5) return;
  console.log(index); // 0 1 2 3 5 6 7 9 10
  console.log(item); // 1 2 3 4 6 7 8 9 10
});

作者：政采云前端团队
链接：https://juejin.cn/post/6966390357005172773
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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
