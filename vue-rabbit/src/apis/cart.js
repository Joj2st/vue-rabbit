

// 加入购物车
import request from "@/utils/http";

export const insertCartAPI = ({skuId, count}) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车
export const findCartAPI = ({skuId, count}) => {
    return request({
        url: '/member/cart',
        method: 'GET',

    })
}

// 删除购物车
export const delCartAPI = (ids) => {
    return request({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCart = function (data)
{
    return request({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}