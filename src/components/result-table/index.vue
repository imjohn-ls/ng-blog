<template>
  <div>
    <table class="mt" cellspacing="0">
      <tbody>
        <slot name="front"></slot>
        <tr v-for="(tr,index) in result" :key="index">
          <!-- <span v-for="(td,id) in tr" :key="id"> -->
          <td>{{tr[0].title}}</td>
          <td v-if="tr[0].slot">
            <slot :name="tr[0].slot" :data="tr[0].value"></slot>
          </td>
          <td v-else>{{tr[0].value}}</td>
          <td>{{tr[1].title}}</td>
          <td v-if="tr[1].slot">
            <slot :name="tr[1].slot" :data="tr[1].value"></slot>
          </td>
          <td v-else>{{tr[1].value}}</td>
        </tr>
        <slot name="self"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Array,
      default() {
        return []
      }
    },
    widthFlag: {
      type: String,
      default() {
        return ''
      }
    },
  },
  created() {},
  mounted(){
    if(this.widthFlag==1){
      $('.mt tr td:even').addClass('evenWidth')
      $('.mt tr td:odd').addClass('oddWidth')
    }else{
      $('.mt tr td:even').removeClass('evenWidth')
      $('.mt tr td:odd').removeClass('oddWidth')
    }
  }
}
</script>

<style lang="scss" scoped>
.mt {
  width: 100%;
}
.mt td {
  border: 1px solid #e8e8e8;
  border-collapse: collapse;
}
.mt tr {
  line-height: 40px;
  word-break: break-all;
}
// .mt tr {
//   // height: 40px;
//   min-height: 40px;
//   width: 100%;
//   td {
//     align-items: center;
//     display: flex;
//     word-break: break-word;
//   }
// }
.mt tr td:nth-of-type(even) {
  width: 296px;
  // height: auto;
  padding: 2px 10px 2px 10px;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.mt tr td:nth-of-type(odd) {
  width: 150px;
  // height: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  text-align: left;
  padding: 2px 10px 2px 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #f7fbff;
}
.self-result {
  width: 80%;
  margin: 0 auto;
  tr {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    td {
      width: 50% !important;
      align-items: center;
      display: flex;
      word-break: break-word;
    }
  }
}
.mt tr td.evenWidth{
  width: 28%;
}
.mt tr td.oddWidth{
   width: 22%;
}
</style>
