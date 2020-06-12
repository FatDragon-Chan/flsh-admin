import { getAllClassify } from '@/api/user'

const state = {
    categoryData: [],
    tagData: []
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

