<template>
  <div>
  </div>
</template>
<script>
import { aesEncrypt, aesDecrypt } from '@/libs/utils/secret'
export default {
  data() {
    return {
      data: {
        name: 'john',
        name1: 'john',
        name2: 'john',
        name3: 'john',
        name4: 'john',
        name5: 'john',
        name6: 'john',
        name7: 'john'
      }
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    /*
     *@Author: zhangW
     *@Date: 2021-04-23 17:28:49
     *@Param: str
     *@Description:字符串转base64
     */
    // encode(str) {
    //   // 对字符串进行编码
    //   var encode = encodeURI(str)
    //   console.log('encode', encode)
    //   // 对编码的字符串转化base64
    //   var base64 = btoa(encode)
    //   return base64
    // },
    /*
     *@Author: zhangW
     *@Date: 2021-04-23 17:28:49
     *@Param: str
     *@Description:base64转字符串
     */
    // decode(base64) {
    //   // 对base64转编码
    //   var decode = atob(base64)
    //   // 编码转字符串
    //   var destr = decodeURI(decode)
    //   return destr
    // },
    // test() {
    //   const a = aesEncrypt(JSON.stringify(this.data))
    //   console.log(a)
    //   const b = aesDecrypt(a)
    //   console.log(b)
    //   const c = this.encode(JSON.stringify(this.data))
    //   console.log(c)
    //   const d = this.decode(c)
    //   console.log(typeof d)
    //   console.log(JSON.parse(d))
    //   // const e = this.decode('eyAgIm5hbWUiOiAiam9obiIsICAibmFtZTEiOiAiam9obiJ9')
    //   const e = this.decode('eyJjaWYiOnsiYWRkcmVzc2VzIjpbbnVsbF0sImNpZlN0YXRlIjoiTiIsImNpZkNvbnRyb2wiOmZhbHNlLCJjaWZFeGVtcHQiOmZhbHNlLCJjaWZMZXZlbCI6IjEiLCJjaWZUeXBlIjoiMiIsIm1vZHVsZUlkIjoicGVyIiwiY2lmU2VxIjo0NTUxNiwiY2hhbm5lbERlcHRzIjp7fSwiZXh0ZXJuYWxDSUZzIjpbXSwiY2lmTW9uaXRvciI6ZmFsc2UsImNpZkxvYW5GbGFnIjpmYWxzZX0sImxvZ2luVGltZXMiOiI4IiwidXNlclNlcSI6IjQ1NTE2IiwidXNlclN0YXRlIjoiTiIsImxhc3RMb2dpbkFkZHIiOiIxODMuMjMzLjE5Mi4xNzgiLCJtb2JpbGVQaG9uZSI6IjE4NioqKio2MDQ0IiwiZm9yY2VVcGRhdGVGbGFnIjoiZmFsc2UiLCJleHBpcmVDZXJ0Q291bnQiOiIwIiwidXNlckNlcnQiOnt9LCJnbG9iYWxKbmxObyI6IjE3NDEwMjk1Nzk4Njg1Njk2MCIsImxvZ2luVHlwZSI6IlIiLCJyZXNwTWVzc2FnZSI6IjAwMDAwMDAwIiwibGFzdExvZ2luVGltZSI6IjIwMjEtMDQtMjMiLCJyZXNwQ29kZSI6IjAwMDAwMDAwIiwiYWxsb3dMb2dpbkRheXMiOiIwIiwiZW5jb2RlVXNlclNlcSI6Ik5EVTFNVFk9IiwiYWRtaW5Vc2VyIjoiZmFsc2UiLCJpZGVudGl0eSI6e30sImZpcnN0TG9naW5GbGFnIjoiTiIsImJpbmREZXZpY2VGbGFnIjoidHJ1ZSIsInVuUGF5Q2VydENvdW50IjoiMCIsInVzZXJJZCI6IjE4NjEwNjE2MDQ0In0=')
    //   console.log(e)
    //   console.log(typeof e)
    // }
  }
}
</script>
<style lang="scss">
</style>
