// 封装分类信息相关代码



import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getTopCategoryAPI} from "@/apis/category";

export function useCategory (){

    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(()=>{getCategory()})
    // 路由守卫 解决路由缓存问题
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })

    return {categoryData}
}