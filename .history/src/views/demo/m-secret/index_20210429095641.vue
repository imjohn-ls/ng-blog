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
        name: '张威',
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
    encode(str) {
      // 对字符串进行编码
      var encode = encodeURI(str)
      console.log('encode', encode)
      // 对编码的字符串转化base64
      var base64 = btoa(encode)
      return base64
    },
    /*
     *@Author: zhangW
     *@Date: 2021-04-23 17:28:49
     *@Param: str
     *@Description:base64转字符串
     */
    decode(base64) {
      // 对base64转编码
      var decode = atob(base64)
      console.log('decode', decode);
      // 编码转字符串
      var destr = decodeURI(decode)
      console.log('decode', decode);
      return destr
    },
    test() {
      const a = aesEncrypt(JSON.stringify(this.data))
      console.log(a)
      const b = aesDecrypt(a)
      console.log(b)
      const c = this.encode(JSON.stringify(this.data))
      console.log(c)
      const d = this.decode(c)
      console.log(typeof d)
      console.log(JSON.parse(d))
      // const e = this.decode('eyAgIm5hbWUiOiAiam9obiIsICAibmFtZTEiOiAiam9obiJ9')
      const e = this.decode('5LuK5aSp5Y+R5LiN5Y+R5bel6LWE')
      console.log(e)
      console.log(typeof e)
    }
  }
}
</script>
<style lang="scss">
</style>
