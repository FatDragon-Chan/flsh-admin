import { getAllClassify } from '@/api/user'
const state = {
  categoryData: [],
  tagData: [],
  typeData: [
    {
      value: 0,
      label: '已删除'
    },
    {
      value: 1,
      label: '已发布'
    },
    {
      value: 0,
      label: '已下架'
    }
  ],
  accountStatus: [
    {
      value: 1,
      label: '启用'
    },
    {
      value: 2,
      label: '禁用'
    },
    {
      value: 0,
      label: '已删除'
    }
  ]
}

const mutations = {
  SET_CATEGORY: (state, categoryData) => {
    state.categoryData = categoryData
  },
  SET_TAG: (state, tagData) => {
    state.tagData = tagData
  }
}
const actions = {
  getAllClassify({ commit }, data) {
    return new Promise((resolve, reject) => {
      getAllClassify(data).then(response => {
        console.log(response)
        const { categoryData, tagData } = response.data
        commit('SET_CATEGORY', categoryData)
        commit('SET_TAG', tagData)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

