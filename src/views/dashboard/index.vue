<template>
    <div class="dashboard-container">
        <el-row :gutter="12">
            <el-col :span="6">
                <el-card class="today-card" shadow="hover" style="background-color: rgb(24, 181, 249);">
                    今日访客
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="today-card" shadow="hover" style="background-color: rgb(126, 83, 197);">
                    今日访客
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="today-card" shadow="hover" style="background-color: rgb(40, 185, 105);">
                    今日访客
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="today-card" shadow="hover" style="background-color: rgb(109, 138, 218);">
                    今日访客
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

.today-card {
    color: #fff;
    height: 100px;
}
</style>
