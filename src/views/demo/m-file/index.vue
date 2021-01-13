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
      <input ref="test" @change="test()" type="file" name="test" id="test" accept="image/png, image/jpeg" multiple="multiple" />
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
    // 对图片进行压缩
    compress(fileObj, callback) {
      if (typeof FileReader === 'undefined') {
        console.log('当前浏览器内核不支持base64图标压缩')
        // 调用上传方式不压缩
        directTurnIntoBase64(fileObj, callback)
      } else {
        var reader = new FileReader()
        reader.onload = function(e) {
          // 要先确保图片完整获取到，这是个异步事件

          var image = new Image()
          image.src = e.target.result
          image.onload = function() {
            ;(square = 0.2), //定义画布的大小，也就是图片压缩之后的像素
              (canvas = document.createElement('canvas')), //创建canvas元素
              (context = canvas.getContext('2d')),
              (imageWidth = Math.round(square * image.width)), //压缩图片的大小
              (imageHeight = Math.round(square * image.height)),
              (data = '')

            canvas.width = imageWidth
            canvas.height = imageHeight
            context.clearRect(0, 0, imageWidth, imageHeight) //在给定矩形内清空一个矩形
            context.drawImage(this, 0, 0, imageWidth, imageHeight)
            var data = canvas.toDataURL('image/jpeg', 0.6)
            //压缩完成执行回调

            callback(data)
          }
        }
        reader.readAsDataURL(fileObj)
      }
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
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')
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
<style lang="scss" scoped></style>
