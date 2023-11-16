// 管理用户数据相关

import {defineStore} from 'pinia'
import {ref} from 'vue'
import {LoginApi} from '@/apis/user.js'
import { useCartStore} from '@/stores/cartStore'
export const useUserStore = defineStore('user', () => {
    const {clearCart} = useCartStore()

    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async (LoginData) => {
        const res = await LoginApi(LoginData)
        userInfo.value = res.result
        userInfo.value.active = true
        return '1'
    }
    // 退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        clearCart()
    }
    // 3. 以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})