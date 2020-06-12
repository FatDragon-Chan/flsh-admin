<template>
  <div class="app-container">
    <el-card class="app-card" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Index',
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
                total: 0
            }
        }
    },
    computed: {
        ...mapGetters(['categoryData', 'tagData'])
    },
    mounted() {
        this.getData()
    },
    methods: {
        // 获取数据
        getData() {

        }
    }
}
</script>

<style scoped>

</style>
