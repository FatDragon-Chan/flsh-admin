<template>
  <div class="app-container">
    <el-card class="app-card">
      <el-form ref="articleForm" size="mini" :model="articleForm" label-width="100px" class="app-el-form">
        <el-form-item label="文章标题">
          <el-input v-model="articleForm.art_title" />
        </el-form-item>
        <el-form-item label="文章副标题">
          <el-input v-model="articleForm.art_desc" />
        </el-form-item>
        <el-form-item label="文章主图 ">
          <el-upload
            class="upload-demo"
            drag
            accept=".jpg,.png"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :before-upload="beforeUpload"
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div class="article-conver">
            <el-image src="http://image.chenzian.cn/tumblr_nmxfkc5Udl1qfirfao1_1280.jpg" />
          </div>
        </el-form-item>
        <el-form-item label="文章分类">
          <el-select v-model="articleForm.cat_id" :disabled="loading" clearable style="width: 100%" size="mini" placeholder="请选择文章分类">
            <el-option
              v-for="item in categoryData"
              :key="item.cat_name"
              :label="item.cat_name"
              :value="item.cat_id"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <div class="app-editor">
            <mavon-editor v-model="articleForm.art_content" :editable="type !== 3" :default-open="type === 3?'preview':'edit'" :toolbars="toolbars" code-style="monokai-sublime" :subfield="false" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { toolbars } from '@/utils/dictionary'
export default {
  data() {
    return {
      type: '',
      toolbars,
      articleForm: {
        art_title: '',
        art_desc: '',
        art_content: ''
      }
    }
  },
  computed: {
    ...mapGetters(['categoryData', 'loading'])
  },
  mounted() {
    this.type = this.$route.meta.type
  },
  methods: {
    beforeUpload(file) {
      console.log(file.type)
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG或PNG 格式!')
        return
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
        return
      }
      return isJPG && isLt2M
    }
  }

}
</script>

<style lang="scss" scoped>
.article-conver {
  width: 400px;
}
</style>
