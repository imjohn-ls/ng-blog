<template>
  <div>
    <el-upload
      class="upload-demo"
      action="/api/file/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      accept="*"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <div class="under_line"></div>
    <!-- <el-upload
      class="upload-demo"
      action="/api/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      accept="image/png, image/jpeg"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">视频上传</div>
    </el-upload> -->
    <!-- <div class="under_line"></div> -->
    <!-- <div>
      <div class="filebox">
        <el-button size="small" type="primary">点击上传</el-button>
        <input ref="test" type="file" @change="test()" class="filetest" name="test" id="test" accept="image/png, image/jpeg" multiple="multiple" />
      </div>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      <div class="img-list"></div>
    </div> -->
    <!-- <div class="under_line"></div> -->
    <div>
      <div class="filebox">
        <el-button size="small" type="primary">点击上传</el-button>
        <input ref="test2" type="file" @change="blobStream()" class="filetest" name="test2" id="test2" accept="*" multiple="multiple" />
      </div>
      <div slot="tip" class="el-upload__tip">只能上传pm4</div>
    </div>
    <div class="under_line"></div>
    <div>
      <el-link type="primary" @click="downLoad">下载</el-link>
    </div>
    <div>
      <el-link type="primary" @click="preView">预览</el-link>
    </div>
    <embed :src="this.pdfSrc" v-if="pdfSrc" width="100%" height="100%" type="application/pdf" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      pdfSrc: ''
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
          var li = document.createElement('li')
          li.innerHTML = `<div class="progress"><span><img src="${e.target.result}" alt=""></span></div>`
          document.querySelector('.img-list').append(li)
        }
      })
    },
    blobStream() {
      const bsFile = this.$refs.test2.files
      const audioData = new FormData()
      audioData.append('file', bsFile[0])
      console.log(audioData)
      this.$axios.post('/api/file/upload', audioData).then(res => {
        console.log(res)
      })
      // this.$httpPost('file/upload', audioData).then(res => {
      //   console.log(res)
      // })
    },
    preView() {
      let _ = this
      this.$axios({
        method: 'post',
        url: '/api/file/download',
        headers: {
          'Content-Type': 'application/json; application/octet-stream'
        },
        responseType: 'bolb'
      }).then(res => {
        setTimeout(() => {
          _.pdfSrc = _.getObjectURL(res.data)
          console.log(_.pdfSrc)
        }, 500)
      })
    },
    downLoad() {
      this.$axios({
        method: 'post',
        url: '/api/file/download',
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        },
        responseType: 'blob'
      })
        .then(response => {
          this.downloadFile(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    // 将返回的流数据转换为url
    getObjectURL(file) {
      let url = null
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file)
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        try {
          url = window.webkitURL.createObjectURL(file)
        } catch (error) {}
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        try {
          url = window.URL.createObjectURL(file)
        } catch (error) {}
      }
      return url
    },
    downloadFile(res) {
      if (!res.data) {
        return
      }
      const blob = new Blob([res.data], {
        type: 'application/actet-stream;charset=utf-8'
      })
      // for IE
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, res.headers['content-disposition'].split(';')[1].split('filename=')[1])
      }
      // for Non-IE (chrome, firefox etc.)
      else {
        const objectUrl = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = objectUrl
        // a.download = res.headers['content-disposition'].split(';')[1].split('filename=')[1]
        a.download = 'a.pdf'
        // a.click();
        // 下面这个写法兼容火狐
        a.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          })
        )
        window.URL.revokeObjectURL(blob)
      }
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
.under_line {
  width: 100%;
  height: 5px;
  font-size: 12px;
  border-bottom: 1px dashed #333;
  margin: 20px auto;
}
.el-upload__tip {
  margin-top: 30px;
}
</style>
