import {createRouter, createWebHistory} from 'vue-router'
import login from '@/views/Login/login.vue'
import layout from '@/views/Layout/layout.vue'
import home from '@/views/Home/home.vue'
import category from "@/views/Category/category.vue";
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/component/PayBack.vue'
import VipCenter from '@/views/VipCenter/index.vue'
import Myinfo from "@/views/VipCenter/componment/Myinfo.vue";
import MyOder from "@/views/VipCenter/componment/MyOder.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 一级路由
            path: '/',
            name: 'layout',
            component: layout,
            children: [
                //二级路由
                {
                    path: '',
                    component: home,
                },
                {
                    path: 'category/:id',
                    component: category,
                },
                {
                    path: 'category/sub/:id',
                    component: SubCategory,
                },
                {
                    path: 'detail/:id',
                    component: Detail,
                },
                {
                    path: 'cartList',
                    component: CartList
                },
                {
                    path: 'checkout',
                    component: Checkout
                }, {
                    path: 'pay',
                    component: Pay
                }, {
                    path: 'paycallback',
                    component: PayBack
                }, {
                    path: 'member',
                    component: VipCenter,
                    redirect: 'member/user',
                    children: [
                        {
                            path: 'user',
                            component: Myinfo
                        },
                        {
                            path: 'order',
                            component: MyOder
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: login
        }
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
