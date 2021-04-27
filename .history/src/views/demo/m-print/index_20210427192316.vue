<template>
   <div>
     <m-btn>打印</m-btn>
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
