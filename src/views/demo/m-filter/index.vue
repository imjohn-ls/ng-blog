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
      <el-input
          v-model="testValue"
          v-only-num
          maxlength="16"
          placeholder="下区间"
        ></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testData: {
        test: Date.now(),
        checkTest: ''
      },
      testValue: ''
    }
  },
  mounted() {
    // this.testData.checkTest = this.$options.filters.strAdd(this.testData.test)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.test-filter {
  p {
    font-size: 14px;
  }
}
</style>
