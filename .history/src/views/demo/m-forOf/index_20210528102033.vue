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
      list: ['1', '2', '3', '4', '5'],
      mlist: [
        {
          name: 'john',
          id: '1'
        },
        {
          name: 'john2',
          id: '2'
        },
        {
          name: 'john3',
          id: '3'
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // for (let i = 0; i < this.list.length; i++) {
      //   if (this.list[i] > 2) {
      //     break
      //   }
      //   console.log(this.list[i])
      // }
      // -----------------------------------------------------------
      // for (const item of this.list) {
      //   if (item > 2) {
      //     break
      //   }
      //   console.log(item)
      // }
      // -----------------------------------------------------------
      // this.list.forEach((item, index, arr) => {
      //   if (item === '3') return
      //   // console.log(index)
      //   console.log(item)
      // })
      // -----------------------------------------------------------
      // const msome = this.mlist.some(val => {
      //   return val.id === '6'
      // })
      // console.log(msome)
      // -----------------------------------------------------------
      // const mevery = this.mlist.every(val => {
      //   return Number(val.id) < 2
      // })
      // console.log(mevery)
      // -----------------------------------------------------------
      // const resultList = this.mlist.filter(val => {
      //   return Number(val.id) > 1
      // })
      // console.log(resultList)
      // -----------------------------------------------------------
      const resultList = this.mlist.map(val => {
        // [false, true, true]
        // return Number(val.id) > 1
        // [1, 2, 3]
        return Number(val.id)
      })
      console.log(resultList)
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
