<template>
  <div>
    <!-- <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" sortable label="数值 1"> </el-table-column>
      <el-table-column prop="amount2" sortable label="数值 2"> </el-table-column>
      <el-table-column prop="amount3" sortable label="数值 3"> </el-table-column>
    </el-table> -->
    <el-button align="left" type="text" @click="test">操作员管理</el-button>
    <el-table
      :data="tablelist"
      :span-method="objectSpanMethod"
      border
      style="width:80%; margin-top: 20px;margin: 0 auto"
      :row-class-name="tableRowClassName"
      @cell-mouse-leave="cellMouseLeave"
      @cell-mouse-enter="cellMouseEnter"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column prop="id" label="转账类型" width="180"></el-table-column>
      <el-table-column prop="startAmount" label="起始金额"> </el-table-column>
      <el-table-column prop="endAmount" label="末尾金额"> </el-table-column>
      <el-table-column prop="amount1" label="一级授权人"> </el-table-column>
      <el-table-column prop="amount2" label="二级授权人"> </el-table-column>
      <el-table-column prop="amount3" label="三级授权人"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <table>
      <tr>
        <td>ID</td>
        <td>起始金额</td>
        <td>末尾金额</td>
        <td>一级授权人</td>
        <td>二级授权人</td>
        <td>三级授权人</td>
      </tr>
      <tr v-for="(item, index) in tablelist" :key="index">
        <td >{{ item.id }}</td>
        <td>{{ item.startAmount }}</td>
        <td>{{ item.endAmount }}</td>
        <td>{{ item.amount1 }}</td>
        <td>{{ item.amount2 }}</td>
        <td>{{ item.amount3 }}</td>
      </tr>
    </table> -->

    <!-- <table class="table1">
      <tr>
        <td>ID</td>
        <td>起始金额</td>
        <td>末尾金额</td>
        <td>一级授权人</td>
        <td>二级授权人</td>
        <td>三级授权人</td>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.id }}</td>
        <td colspan="5">
          <table class="table2" style="width: 100%">
            <tr v-for="(item2, val) in item.list" :key="val">
              <td>{{ item2.startAmount }}</td>
              <td>{{ item2.endAmount }}</td>
              <td>{{ item2.amount1 }}</td>
              <td>{{ item2.amount2 }}</td>
              <td>{{ item2.amount3 }}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table> -->

    <div v-for="(item, index) in arrList" :key="index">
      <el-checkbox :indeterminate="item.isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="item.checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in item.list" :label="city" :key="city">{{ city }}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div>
      <div v-for="(item, index) in list" :key="index">
        {{ item.text }}
        <div v-for="(item2, index) in item.childList" :key="index">
          {{ item2.text }}
          <el-input class="test" @input="test2(item2)" v-model="item2.subList"></el-input>
          <el-input class="test" @input="test2(item2)" v-model="item2.v1"></el-input>
          <el-input class="test" @input="test2(item2)" v-model="item2.v2"></el-input>
          <el-input class="test" @input="test2(item2)" v-model="item2.v3"></el-input>
        </div>
      </div>
    </div>
    <el-button @click="interTo()">处理</el-button>

    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '单笔转账',
          list: [
            {
              startAmount: '0',
              endAmount: '1000',
              amount1: '0',
              amount2: '0',
              amount3: '1'
            },
            {
              startAmount: '1000',
              endAmount: '100000',
              amount1: '1',
              amount2: '0',
              amount3: '0'
            },
            {
              startAmount: '100000',
              endAmount: '10000000',
              amount1: '0',
              amount2: '1',
              amount3: '0'
            }
          ]
        },
        {
          id: '批量转账',
          list: [
            {
              startAmount: '0',
              endAmount: '1000',
              amount1: '0',
              amount2: '0',
              amount3: '1'
            },
            {
              startAmount: '1000',
              endAmount: '100000',
              amount1: '1',
              amount2: '0',
              amount3: '0'
            }
          ]
        }
      ],
      tablelist: [
        {
          id: '单笔转账',
          startAmount: '0',
          endAmount: '1000',
          amount1: '0',
          amount2: '0',
          amount3: '1'
        },
        {
          id: '单笔转账',
          startAmount: '1000',
          endAmount: '100000',
          amount1: '1',
          amount2: '0',
          amount3: '0'
        },
        {
          id: '单笔转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        },
        {
          id: '批量转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        },
        {
          id: '批量转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        },
        {
          id: '批量转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        },
        {
          id: '批量转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        },
        {
          id: '批量转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        },
        {
          id: '陌陌转账',
          startAmount: '100000',
          endAmount: '10000000',
          amount1: '0',
          amount2: '1',
          amount3: '0'
        }
      ],
      tableArr: [],
      curRowArr: [],
      sameRowArr: [],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      isIndeterminate: true,
      arrList: [
        {
          isIndeterminate: true,
          checkedCities: ['上海', '北京', '广州', '深圳'],
          list: ['上海', '北京', '广州', '深圳']
        },
        {
          isIndeterminate: true,
          checkedCities: ['上海', '北京'],
          list: ['上海', '北京', '广州', '深圳']
        },
        {
          isIndeterminate: true,
          checkedCities: ['上海', '北京'],
          list: ['上海', '北京', '广州', '深圳']
        }
      ],
      list: [
        {
          text: '1',
          childList: [
            {
              text: '11',
              subList: 'xxxx',
              v1: 'xxxx',
              v2: 'xxxx',
              v3: 'xxxx'
            }
          ]
        },
        {
          text: '2',
          childList: [
            {
              text: '22',
              subList: 'xxxx',
              v1: 'xxxx',
              v2: 'xxxx',
              v3: 'xxxx'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.init()
    this.test()
    // for (let i = 0; i < this.tableData.length; i++) {
    //   this.tableData[i].list.forEach(ele => {
    //     this.tableArr.push(this.tableData[i].list.length)
    //   })
    // }
    // console.log(this.tableArr)
  },
  methods: {
    interTo() {
      console.log(this.list)
    },
    test2(ele, val) {
      debugger
      ele.subList = ele.subList.replace(/[^\d.]/g, '')
      // ele.v1 = ele.v1.replace(/[^\d.]/g, '')
      // ele.v2 = ele.v2.replace(/[^\d.]/g, '')
      // ele.v3 = ele.v3.replace(/[^\d.]/g, '')
      console.log(ele)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      debugger
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    test() {
      // this.$httpPost(
      //   'test.do',
      //   {}
      // ).then((res) => {
      //   console.log(res)
      // })
      // this.$httpPost(
      //   '/api/login',
      //   {
      //     username: 'admin',
      //     password: 'admin'
      //   }
      // ).then((res) => {
      //   debugger
      //   console.log(res)
      // })
      // this.$httpGet('/p1', {}).then(res => {
      //   console.log(res)
      // })
      debugger
      this.$httpPost('/p1', { name: 'john' }).then(res => {
        debugger
        console.log(res)
      })
    },
    init() {
      this.tableArr = []
      this.curRowArr = []
      this.sameRowArr = []
      let contactDot = 0
      let sIdx = 0
      this.tablelist.forEach((item, index) => {
        item.index = index
        if (index === 0) {
          this.tableArr.push(1)
          this.sameRowArr.push([index])
        } else {
          if (item.id === this.tablelist[index - 1].id) {
            this.tableArr[contactDot] += 1
            this.tableArr.push(0)
            this.sameRowArr[sIdx].push(index)
          } else {
            this.tableArr.push(1)
            contactDot = index
            sIdx = sIdx + 1
            this.sameRowArr.push([index])
          }
        }
      })
      console.log(this.tableArr)
      console.log(this.sameRowArr)
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      debugger
      this.tablelist.splice(index, 1)
      console.log(this.tablelist)
      console.log(index, row)
      this.init()
    },
    // row_class为定义好的css样式类名
    tableRowClassName({ row, rowIndex }) {
      // 同一行
      const temArr = this.curRowArr
      for (let i = 0; i < temArr.length; i++) {
        if (rowIndex == temArr[i]) {
          return 'row_class'
        }
      }
    },
    cellMouseEnter(row, column, cell, event) {
      this.sameRowArr.forEach((arr, i) => {
        if (arr.indexOf(row.index) != -1) {
          this.curRowArr = arr
        }
      })
    },
    cellMouseLeave(row, column, cell, event) {
      this.curRowArr = []
    },
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2]
    //     } else if (columnIndex === 1) {
    //       return [0, 0]
    //     }
    //   }
    // },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        const _row = this.tableArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
table {
  tr {
    td {
      font-size: 14px;
    }
  }
}
.table1 {
  td {
    width: 120px;
    font-size: 14px;
  }
}
.table2 {
  tr {
    td {
      font-size: 14px;
    }
  }
}
.test {
  width: 120px;
}
</style>
