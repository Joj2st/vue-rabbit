<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {useCategoryStore} from '@/stores/category'
import {onMounted} from "vue";

// 获取导航数据
let categoryStore = useCategoryStore()


onMounted(() => {
  categoryStore.getCategory()
  console.log(categoryStore.categoryList)
})


</script>

<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader/>
  <!--  二级路由-->
  <RouterView/>
  <LayoutFooter/>
</template>