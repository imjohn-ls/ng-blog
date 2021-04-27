<template>
   <div>
     <el-btn @click="vprint()">打印</el-btn>
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
