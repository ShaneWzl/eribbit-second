import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

]

// 创建路由实例
const router = createRouter({
  // 代表使用hash模式的路由
  history: createWebHashHistory(),
  routes
})

export default router
