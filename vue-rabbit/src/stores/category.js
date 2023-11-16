import {defineStore} from 'pinia'
import {ref} from 'vue'
import {getCategoryAPI} from "@/apis/layout";

// 全局头部导航分类信息
export const useCategoryStore = defineStore('category', () => {
    // 定义数据模型
    const categoryList = ref([])
    // 定义方法
    const getCategory = async function () {

        let resp = await getCategoryAPI()
        // console.log(result)
        categoryList.value = resp.result

    }

    return {categoryList, getCategory}
})