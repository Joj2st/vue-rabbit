<script setup>
import HomeCategory from './components/homeCategory.vue'
import HomeBanner from './components/homeBanner.vue'
import HomeNew from './components/homeNew.vue'
import HomeHot from './components/homeHot.vue'
import HomeProduct from './components/homeProduct.vue'
import HomePanel from './components/homePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

</template>