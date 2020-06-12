import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/user/getUserInfo',
        method: 'post'
    })
}

export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post'
    })
}

export function getAllClassify() {
    return request({
        url: '/blog/getAllClassify',
        method: 'post',
        data: {
            select: 'all',
            type: 0
        }
    })
}
