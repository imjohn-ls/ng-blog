<template>
  <div>
    <div class="test-filter">
      <p>{{ testData.test | timeFormat('yyyy-mm-dd') }}</p>
      <p>{{ testData.test | timeFormat('yyyy-mm') }}</p>
      <p>{{ testData.test | timeFormat('hh:mm') }}</p>
      <p>{{ testData.test | timeFormat('yyyy') }}</p>
      <p>{{ testData.test | timeFormat('mm-dd') }}</p>
      <p>{{ testData.test | timeFormat('hh:mm') }}</p>
      <p>{{ testData.test | timeFormat('ymd') }}</p>
      <p>{{ testData.test | timeFormat }}</p>
    </div>
    <div>
      <el-input v-model="testValue" v-only-num maxlength="16" placeholder="下区间"></el-input>
    </div>
    <div>
      <el-button @click="test">test</el-button>
      <div>
        <p>{{ p1 }}</p>
        <p>{{ p2 }}</p>
        <p>{{ p3 }}</p>
      </div>
    </div>
    <div>
      <el-radio-group v-model="radio" @change="klc()">
        <el-radio :label="3">霍林春1</el-radio>
        <el-radio :label="6">霍林春3</el-radio>
        <el-radio :label="9">霍林春2</el-radio>
      </el-radio-group>
      <div v-for="(item, index) of actest" :key="index">
        <el-checkbox-group v-model="item.checkList">
          <el-checkbox :label="item.AuthFlag"></el-checkbox>
          <el-checkbox :label="item.MakeFlag"></el-checkbox>
        </el-checkbox-group>
      </div>
      <!-- <el-checkbox-group v-model="checkList">
        <el-checkbox label="1"></el-checkbox>
        <el-checkbox label="0"></el-checkbox>
      </el-checkbox-group> -->
    </div>
  </div>
</template>
<script>
import { getList, postList } from '@/api/api'
export default {
  data() {
    return {
      alllist: [
        {
          name: '理財超市',
          children: [
            {
              name: '水电费',
              children: [
                {
                  AuthFlag: '1',
                  MakeFlag: '1',
                  checkList: ['1'],
                  check: '0',
                  text: '协定存款签约',
                  type: '0',
                  value: 'ent.AgreementDepositSign'
                }
              ]
            }
          ]
        },
        {
          name: '理財超市',
          children: [
            {
              name: '水电费',
              children: [
                {
                  AuthFlag: '1',
                  MakeFlag: '1',
                  checkList: ['1'],
                  check: '0',
                  text: '协定存款签约',
                  type: '0',
                  value: 'ent.AgreementDepositSign'
                }
              ]
            }
          ]
        },
        {
          name: '理財超市',
          children: [
            {
              name: '水电费',
              children: [
                {
                  AuthFlag: '1',
                  MakeFlag: '1',
                  checkList: ['1'],
                  check: '0',
                  text: '协定存款签约',
                  type: '0',
                  value: 'ent.AgreementDepositSign'
                }
              ]
            }
          ]
        }
      ],
      actest: [
        {
          AuthFlag: '1',
          MakeFlag: '1',
          checkList: ['1'],
          check: '0',
          text: '协定存款签约',
          type: '0',
          value: 'ent.AgreementDepositSign'
        },
        {
          AuthFlag: '0',
          MakeFlag: '0',
          checkList: ['1'],
          check: '0',
          text: '协定存款签约',
          type: '0',
          value: 'ent.AgreementDepositSign'
        }
      ],
      checkList: ['1'],
      radio: '',
      testData: {
        test: Date.now(),
        checkTest: ''
      },
      testValue: '',
      p1: '',
      p2: '',
      p3: ''
    }
  },
  mounted() {
    // this.init()
    this.init2()
    // this.testData.checkTest = this.$options.filters.strAdd(this.testData.test)
  },
  methods: {
    klc() {
      alert('sdfds')
    },
    test() {},
    async init() {
      // const alist = await this.$httpGet('p1')
      // this.p1 = alist
      // const c = await this.$httpPost('merlist', { a: '3' })
      // console.log(c)
      // await this.$httpGet('p3', {}).then(res => {
      //   this.p3 = res.data
      //   // console.log(res)
      // })

      // const alist = await getList('p1')
      // this.p1 = alist
      console.log('d')
    },
    init2() {
      // getList('')
      //   .then(res => {
      //     this.p1 = res
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
      postList({ a: '2' })
        .then(res => {
          this.p1 = res
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.test-filter {
  p {
    font-size: 14px;
  }
}
</style>
