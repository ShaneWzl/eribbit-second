<template>
  <AppTopNav/>
  <AppHeader/>
  <main>
      <!-- 二级路由入口 -->
      <router-view/>
  </main>
  <AppFooter/>

</template>

<script>
import AppTopNav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import { useStore } from 'vuex'
export default {
  name: 'xtx-layout',
  components: {
    AppTopNav,
    AppHeader,
    AppFooter
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }

}
</script>

<style scoped lang="less">

</style>
