import {defineStore} from 'pinia'
import {ref} from 'vue'
import {computed} from "vue";
import {useUserStore} from './user'
import {insertCartAPI, findCartAPI, delCartAPI} from "@/apis/cart";

export const useCartStore = defineStore('cart', function () {


    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 定义数据模型
    const cartList = ref([])

    // 添加购物车方法
    const setCart = async function (goods) {
        if (isLogin.value) {
            // 登录之后的加入购车逻辑
            await insertCartAPI(goods.skuId, goods.count)
            findCartAPI()
        } else {
            // 添加过count+1
            const item = cartList.value.find(function (item) {
                goods.skuId === item.skuId
            })
            if (item) {
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }


    }
    // 删除购物车
    const delCart = async function (skuId) {
        if (isLogin.value) {
            // 调用接口实现接口购物车中的删除功能
            await delCartAPI([skuId])
            findCartAPI()
        } else {
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }


    }
    // 清除购物车
    const clearCart = function () {
        cartList.value = []

    }

    const allCount = ref(cartList.value.length)

    const allPrice = ref(cartList.value.length)
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选功能action
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }

// 是否全选计算属性
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    // 3. 已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
// 4. 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    return {
        cartList,
        setCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart


    }
}, {persist: true})