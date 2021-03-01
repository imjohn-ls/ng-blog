<template>
  <div>
    <el-upload
      class="upload-demo"
      action="http://127.0.0.1:9000/api/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <div>------------------------------------</div>
    <div>
      <div class="filebox">
        <el-button size="small" type="primary">点击上传</el-button>
        <input ref="test" type="file" @change="test()" class="filetest" name="test" id="test" accept="image/png, image/jpeg" multiple="multiple" />
      </div>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      <div class="img-list"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    test() {
      if (!this.$refs.test.files.length) return
      if (this.$refs.test.files.length > 9) {
        alert('最多同时只可上传9张图片')
        return
      }
      const imgFile = this.$refs.test.files
      imgFile.forEach((file, i) => {
        if (!/\/(?:jpeg|png)/i.test(file.type)) return
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          debugger
          var li = document.createElement('li')
          li.innerHTML = `<div class="progress"><span><img src="${e.target.result}" alt=""></span></div>`
          document.querySelector('.img-list').append(li)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.filetest {
  position: absolute;
  opacity: 0;
  width: 80px;
  height: 32px;
  z-index: 3;
}
.el-button {
  text-align: center;
  position: absolute;
}
.filebox {
  height: 32px;
  position: relative;
}
</style>
