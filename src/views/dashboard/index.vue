<template>
  <div class="dashboard-container">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          今日访客
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          今日评论
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          今日
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          今日
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
