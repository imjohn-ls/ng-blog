<template>
  <div>
    <el-button @click="vprint()">打印</el-button>
  </div>
</template>
<script>
import printJS from '@/plugin/print-js'
export default {
  data() {
    return {
      data
    }
  },
  mounted() {},
  methods: {
    vprint() {
      console.log('dsf')
      printJS({
        printable:
          'eyJjaWYiOnsiYWRkcmVzc2VzIjpbbnVsbF0sImNpZlN0YXRlIjoiTiIsImNpZkNvbnRyb2wiOmZhbHNlLCJjaWZFeGVtcHQiOmZhbHNlLCJjaWZMZXZlbCI6IjEiLCJjaWZUeXBlIjoiMiIsIm1vZHVsZUlkIjoicGVyIiwiY2lmU2VxIjo0NTUxNiwiY2hhbm5lbERlcHRzIjp7fSwiZXh0ZXJuYWxDSUZzIjpbXSwiY2lmTW9uaXRvciI6ZmFsc2UsImNpZkxvYW5GbGFnIjpmYWxzZX0sImxvZ2luVGltZXMiOiI4IiwidXNlclNlcSI6IjQ1NTE2IiwidXNlclN0YXRlIjoiTiIsImxhc3RMb2dpbkFkZHIiOiIxODMuMjMzLjE5Mi4xNzgiLCJtb2JpbGVQaG9uZSI6IjE4NioqKio2MDQ0IiwiZm9yY2VVcGRhdGVGbGFnIjoiZmFsc2UiLCJleHBpcmVDZXJ0Q291bnQiOiIwIiwidXNlckNlcnQiOnt9LCJnbG9iYWxKbmxObyI6IjE3NDEwMjk1Nzk4Njg1Njk2MCIsImxvZ2luVHlwZSI6IlIiLCJyZXNwTWVzc2FnZSI6IjAwMDAwMDAwIiwibGFzdExvZ2luVGltZSI6IjIwMjEtMDQtMjMiLCJyZXNwQ29kZSI6IjAwMDAwMDAwIiwiYWxsb3dMb2dpbkRheXMiOiIwIiwiZW5jb2RlVXNlclNlcSI6Ik5EVTFNVFk9IiwiYWRtaW5Vc2VyIjoiZmFsc2UiLCJpZGVudGl0eSI6e30sImZpcnN0TG9naW5GbGFnIjoiTiIsImJpbmREZXZpY2VGbGFnIjoidHJ1ZSIsInVuUGF5Q2VydENvdW50IjoiMCIsInVzZXJJZCI6IjE4NjEwNjE2MDQ0In0=',
        type: 'pdf',
        base64: true
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
