import request from '@/utils/request'

export function getArticleList(data) {
    return request({
        url: '/blog/selective',
        method: 'post',
        data
    })
}

export function changeArticleStatus(params) {
    return request({
        url: '/blog/changeArtStatus',
        method: 'post',
        params
    })
}

export function addOrUpdateArt(params) {
    return request({
        url: '/blog/addOrUpdateArt',
        method: 'post',
        params
    })
}
