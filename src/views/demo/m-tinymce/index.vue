<template>
  <div>
    <div>
      <el-form :rules="rules" ref="form" :model="form" label-width="80px">
        <el-form-item class="reset-item" prop="atitle" label="标题:">
          <el-input v-model="form.atitle" placeholder="请输入标题" clearable></el-input>
        </el-form-item>
      </el-form>
    </div>
    <vue-tinymce v-model="form.content" :setting="setting" />
    <el-button class="btsubmit" @click="submitText('form')">提交</el-button>
  </div>
</template>
<script>
import { writeAticle } from '@api/api'
export default {
  inject: ['reload'],
  name: 'm-tinymce',
  data() {
    return {
      form: {
        atitle: '',
        content: ''
      },
      rules: {
        atitle: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      },
      setting: {
        menubar: true,
        toolbar:
          'undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |',
        toolbar_drawer: 'sliding',
        quickbars_selection_toolbar: 'removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor',
        plugins: 'link image media table lists fullscreen quickbars',
        language: 'zh_CN', // 本地化设置
        height: window.innerHeight - 300
      }
    }
  },
  mounted() {},
  methods: {
    submitText(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          debugger
          const form = {
            writeDate: this.$options.filters.timeFormat(new Date(), 'yyyy-mm-dd'),
            aticleTitle: this.form.atitle,
            aticleAuthor: sessionStorage.getItem('SESSION_ID'),
            aticleContent: this.form.content
          }
          const res = await writeAticle(form)
          if (res.data.respCode === '00000000') {
            this.$message('提交成功!')
            this.reload()
          } else {
            this.$message('提交失败!')
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.titleContent {
  padding: 10px;
  .textTitle {
    font-size: 14px;
    padding-right: 10px;
  }
}
.reset-item {
  margin: 30px auto;
  width: 360px;
}
.btsubmit {
  margin-top: 30px;
}
</style>
