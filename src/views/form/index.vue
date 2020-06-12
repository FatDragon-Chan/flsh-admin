<template>
    <div class="app-container">
        <el-tree
            ref="tree"
            :data="data"
            show-checkbox
            default-expand-all
            node-key="id"
            highlight-current
        />
        <el-button @click="handleCheckChange">获取所有半选中跟选中的nodes</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2',
                        children: [
                            {
                                id: 9,
                                label: '三级3-1'
                            },
                            {
                                id: 10,
                                label: '三级3-2'
                            }
                        ]
                    }]
                }
            ]
        }
    },
    methods: {
        handleCheckChange() {
            const checkedKeys = this.$refs.tree.getHalfCheckedKeys().concat(this.$refs.tree.getCheckedKeys())
            const res = this.childrenCheck(this.data, checkedKeys)
            console.log(res)
        },
        childrenCheck(_arr, checkedKeys) {
            const res = []
            _arr.forEach(item => {
                if (checkedKeys.includes(item.id)) {
                    if (item.children) {
                        item.children = (this.childrenCheck(item.children, checkedKeys))
                    }
                    res.push(item)
                }
            })
            return res
        }
    }
}
</script>

<style scoped>
.line {
    text-align: center;
}
</style>

