<template>
   <div>
     <el-button @click="vprint()">打印</el-button>
   </div>
</template>
<script>
import printJS from '@/plugin/print-js'
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    vprint() {
      printJS({
        printable:
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
