<template>
  <div class="app-container">
    <el-card class="app-card">
      <div class="app-search">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" :xl="4">
            <el-input v-model="searchForm.keyword" size="mini" placeholder="请输入文章标题模糊搜索" />
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :xl="4">
            <el-select v-model="searchForm.categoryId" style="width: 100%" size="mini" placeholder="请选择文章分类">
              <el-option
                v-for="item in categoryData"
                :key="item.cat_name"
                :label="item.cat_name"
                :value="item.cat_id"
              />
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="12" :md="6" :xl="4">
            <el-select v-model="searchForm.status" style="width: 100%" size="mini" placeholder="请选择文章状态">
              <el-option
                v-for="item in typeData"
                :key="item.label"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="app-table">
        <el-table :data="tableData" border size="mini" style="width: 100%">
          <el-table-column prop="art_title" label="文章标题" width="180" align="center" />
          <el-table-column prop="art_desc" label="文章副标题" width="180" align="center"/>
          <el-table-column prop="art_cover" label="文章主图" align="center" />
          <el-table-column prop="art_content" label="文章内容" align="center"/>
          <el-table-column prop="cat_name" label="文章分类" align="center" />
          <el-table-column prop="create_time" label="创建时间" align="center" />
          <el-table-column prop="update_time" label="更新时间" align="center"  />
          <el-table-column prop="cat_status" label="文章状态" align="center" />
          <el-table-column label="操作"  align="center" width="240" >
            <template slot-scope="scope" >
              <el-button size="mini" type="text" v-permission="['10011000']">新增</el-button>
              <el-button size="mini" type="text" v-permission="['10011002']">编辑</el-button>
              <el-button size="mini" type="text" v-permission="['10011001']">启用</el-button>
              <el-button size="mini" type="text" v-permission="['10011001']">详情</el-button>
              <el-button size="mini" type="text" v-permission="['10011003']">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'typeData',
      'categoryData'
      // ...
    ])
  },
  data() {
    return {
      searchForm: {
        keyword: '',
        status: '',
        categoryId: '',
        page: 1,
        pageSize: 10,
        isLastPage: false,
        lastPage: '',
        total: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.post('blog/selective', this.searchForm).then(res => {
        console.log(res)
        const { blogData, total, lastPage, isLastPage } = res.data
        this.tableData = blogData
        this.searchForm.total = total
        this.searchForm.lastPage = lastPage
        this.searchForm.isLastPage = isLastPage
      })
    }
  }
}
</script>

<style scoped>

</style>
