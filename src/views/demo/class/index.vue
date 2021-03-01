<template>
  <div>
    <div>
      <el-button @click="test()">check</el-button>
    </div>
  </div>
</template>
<script>
import ruleUtil from '@/libs/ruleUtil'
import { valiSm, valiUtil } from '@/libs/varliUtil'
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    test() {
      const vali = new valiUtil()
      const sm = new valiSm()
      const rule = new ruleUtil()
      // console.log(vali.checkType('34').turnPage('12', '56').onlyNum('111'))
      // console.log(valiSm)
      // console.log(valiUtil)
      sm.turnPage('12', '56')
      vali.checkType('12')
      rule.checkType('34').turnPage('12', '56')
    }
  }
}
</script>
<style lang="scss" scoped></style>
