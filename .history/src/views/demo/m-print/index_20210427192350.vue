<template>
   <div>
     <el-b @click="vprint()">打印</el-b>
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
      printJS()
    }
  }
}
</script>
<style lang="scss" scoped></style>
