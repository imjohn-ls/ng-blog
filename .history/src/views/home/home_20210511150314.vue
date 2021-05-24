<template>
  <div class="app-home">
    <!-- <el-button @click="goTo('./demo')">demo</el-button>
    <el-button @click="goTo('./m-table')">m-table</el-button>
    <el-button @click="goTo('./m-filter')">m-filter</el-button>
    <el-button @click="goTo('./m-provider')">m-provider</el-button>
    <el-button @click="goTo('./m-file')">m-file</el-button>
    <el-button @click="goTo('./m-qrcode')">m-qrcode</el-button>
    <el-button @click="goTo('./m-class')">m-class</el-button>
    <el-button @click="goTo('./m-blob')">m-blob</el-button>
    <el-button @click="goTo('./m-secret')">m-secret</el-button>
    <el-button @click="goTo('./m-print')">m-print</el-button> -->

  </div>
</template>
<script>
import ResultTable from '@/components/result-table'
export default {
  name: 'Home',
  components: {
    ResultTable
  },
  data() {
    return {
      tableData: [],
      showMainDetail: false,
      showAddDetail: false,
      detailInfo: {},
      UserForm: {},
      oprate: '',
      index: ''
    }
  },
  mounted() {
    console.log(this.$router)
    this.test()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    },
    async test() {
      let result = await perQueryStu()
      this.tableData = result.data
      // this.$axios.post('/api/student/findAll').then(res => {
      //   debugger
      //   if (res.status === 200) {
      //     this.tableData = res.data
      //   }
      // })
    },
    handleClick(item) {
      this.showMainDetail = true
      this.detailInfo = item
    },
    async deleteRow(index, param) {
      const userId = param[index].id
      const res1 = await perDelStu({
        id: userId
      })
      res1.status === 200 && this.$message('删除成功!')
      this.tableData.splice(index, 1)
      // this.$axios.delete(`/user?userId=${userId}`).then(res => {
      //   if (res.data) {
      //     this.$message('删除成功!')
      //     this.tableData.splice(index, 1)
      //   }
      // })
    },
    addUser(item, index, param) {
      this.showAddDetail = true
      if (item === 'add') {
        this.oprate = 'add'
      } else {
        this.oprate = 'edit'
        this.index = index
        this.UserForm = param
      }
    },
    async submitForm() {
      if (this.oprate === 'edit') {
        const res1 = await perEditStu(this.UserForm)
        res1.status === 200 && this.$message('修改成功!')
        // this.$axios.put('/user', this.UserForm).then(res => {
        //   console.log(res)
        //   if (res.data) {
        //     this.$message('更改成功!')
        //     this.tableData[this.index] = this.UserForm
        //     this.showAddDetail = false
        //   }
        // })
      } else {
        const res2 = await perAddStu(this.UserForm)
        res2.status === 200 && this.$message('添加成功!')
        this.test()
        // this.$axios.post('/user', this.UserForm).then(res => {
        //   if (res.data === 'success') {
        //     this.$message('添加成功!')
        //     this.tableData.push(this.UserForm)
        //     this.showAddDetail = false
        //   }
        // })
      }
    }
  }
}
</script>
