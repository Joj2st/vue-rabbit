// 登录接口

import request from '@/utils/http'


export const LoginApi = (loginData)=>{
    return request({
        url:'/login',
        method:'POST',
        data:{
            account: loginData.username,
            password: loginData.password
        }

    })
}


export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}

export const getUserOrder = (params) => {
    return request({
        url:'/member/order',
        method:'GET',
        params
    })
}