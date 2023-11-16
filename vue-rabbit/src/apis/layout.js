
import httpInstance from '@/utils/http'

// 分类导航api
export function getCategoryAPI () {
    return httpInstance({
        url: '/home/category/head'
    })
}