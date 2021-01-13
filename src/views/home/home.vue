<template>
  <div class="app-home">
    <el-button @click="goTo('./demo')">demo</el-button>
    <el-button @click="goTo('./m-table')">m-table</el-button>
    <el-button @click="goTo('./m-filter')">m-filter</el-button>
    <el-button @click="goTo('./m-provider')">m-provider</el-button>
    <el-button @click="goTo('./m-file')">m-file</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="80"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="80"> </el-table-column>
      <el-table-column prop="password" label="密码"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" @click="addUser('edit', scope.$index, scope.row)" size="small">编辑</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="danger" size="small" @click="addUser('add')">增加</el-button>
    <el-dialog title="新增" :visible.sync="showAddDetail" center :lock-scroll="true" :append-to-body="true">
      <el-form :model="UserForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="id" prop="id">
          <el-input type="text" v-model="UserForm.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="username">
          <el-input type="text" v-model="UserForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="UserForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model.number="UserForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="详情" :visible.sync="showMainDetail" center :lock-scroll="true" :append-to-body="true">
      <result-table class="self-table">
        <tr slot="self">
          <td>id</td>
          <td>{{ detailInfo.id }}</td>
          <td>姓名</td>
          <td>{{ detailInfo.username }}</td>
        </tr>
        <tr slot="self">
          <td>密码</td>
          <td>{{ detailInfo.password }}</td>
          <td>邮箱</td>
          <td>{{ detailInfo.email }}</td>
        </tr>
      </result-table>
    </el-dialog>
  </div>
</template>
<script>
import ResultTable from '@/components/result-table'
export default {
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
    this.test()
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    },
    test() {
      this.$axios.get('/userAll').then(res => {
        if (res.status === 200) {
          this.tableData = res.data
        }
      })
    },
    handleClick(item) {
      this.showMainDetail = true
      this.detailInfo = item
    },
    deleteRow(index, param) {
      const userId = param[index].id
      this.$axios.delete(`/user?userId=${userId}`).then(res => {
        if (res.data) {
          this.$message('删除成功!')
          this.tableData.splice(index, 1)
        }
      })
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
    submitForm() {
      if (this.oprate === 'edit') {
        this.$axios.put('/user', this.UserForm).then(res => {
          console.log(res)
          if (res.data) {
            this.$message('更改成功!')
            this.tableData[this.index] = this.UserForm
            this.showAddDetail = false
          }
        })
      } else {
        this.$axios.post('/user', this.UserForm).then(res => {
          if (res.data === 'success') {
            this.$message('添加成功!')
            this.tableData.push(this.UserForm)
            this.showAddDetail = false
          }
        })
      }
    }
  }
}
</script>
