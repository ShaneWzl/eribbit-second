<template>
  <div class="home-page">
    <!-- 首页入口 -->
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>

  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: 'HOME',
  components: {
    HomeCategory
  }
}
</script>

<style scoepd lang="less">
// @import '~@/assets/styles/mixins.less';
// .home-page {
//    min-height: 600px;
//   .hoverShadow()
// }
</style>
