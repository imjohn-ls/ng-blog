<template>
  <el-form
    :model="Form"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="num">
      <el-input type="text" v-model="Form.num" autocomplete="off"> </el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="Form.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <div class="drag" ref="dragDiv">
      <div class="drag_bg"></div>
      <div class="drag_text">{{ confirmWords }}</div>
      <div
        ref="moveDiv"
        @mousedown="mousedownFn($event)"
        :class="{ handler_ok_bg: confirmSuccess }"
        class="handler handler_bg"
        style="position: absolute;top: 0px;left: 0px;"
      ></div>
    </div>
    <el-form-item>
      <el-button
        :disabled="!confirmSuccess"
        type="primary"
        @click="submitForm('ruleForm')"
        >提交</el-button
      >
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
const validateNum = (rule, value, callback) => {
  callback()
  // if (!value) {
  //   return callback(new Error('账号不能为空'))
  // } else if (!/^\d$/.test(value)) {
  //   callback('账号不正确')
  // } else {
  //   callback()
  // }
}
const validatePass = (rule, value, callback) => {
  callback()
  // if (!value) {
  //   return callback(new Error('密码不能为空'))
  // } else if (!/^\d$/.test(value)) {
  //   callback('密码不正确')
  // } else {
  //   callback()
  // }
}
import { checkId } from "@/libs/util.js";
export default {
  data() {
    return {
      Form: {
        num: "",
        password: ""
      },
      beginClientX: 0 /*距离屏幕左端距离*/,
      mouseMoveStata: false /*触发拖动状态  判断*/,
      maxwidth: "" /*拖动最大宽度，依据滑块宽度算出来的*/,
      confirmWords: "拖动滑块验证" /*滑块文字*/,
      confirmSuccess: false /*验证成功判断*/,
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        num: [{ validator: validateNum, trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.maxwidth =
      this.$refs.dragDiv.clientWidth - this.$refs.moveDiv.clientWidth;
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mousemove", this.mouseMoveFn);
    document
      .getElementsByTagName("html")[0]
      .addEventListener("mouseup", this.moseUpFn);
  },
  methods: {
    mousedownFn: function(e) {
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault(); //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
      }
    }, //mousedoen 事件
    successFunction() {
      this.confirmSuccess = true;
      this.confirmWords = "验证通过";
      if (window.addEventListener) {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mousemove", this.mouseMoveFn);
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", this.moseUpFn);
      } else {
        document
          .getElementsByTagName("html")[0]
          .removeEventListener("mouseup", () => {});
      }
      document.getElementsByClassName("drag_text")[0].style.color = "#fff";
      document.getElementsByClassName("handler")[0].style.left =
        this.maxwidth + "px";
      document.getElementsByClassName("drag_bg")[0].style.width =
        this.maxwidth + "px";
    }, //验证成功函数
    mouseMoveFn(e) {
      if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;
        if (width > 0 && width <= this.maxwidth) {
          document.getElementsByClassName("handler")[0].style.left =
            width + "px";
          document.getElementsByClassName("drag_bg")[0].style.width =
            width + "px";
        } else if (width > this.maxwidth) {
          this.successFunction();
        }
      }
    }, //mousemove事件
    moseUpFn(e) {
      this.mouseMoveStata = false;
      var width = e.clientX - this.beginClientX;
      if (width < this.maxwidth) {
        document.getElementsByClassName("handler")[0].style.left = 0 + "px";
        document.getElementsByClassName("drag_bg")[0].style.width = 0 + "px";
      }
    }, //mouseup事件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.Form.num,
            password: this.Form.password
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
