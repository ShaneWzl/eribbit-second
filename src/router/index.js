import { createRouter, createWebHashHistory } from 'vue-router'
// 按需引入
const Layout = () => import('@/views/layout.vue')
const Home = () => import('@/views/home/index.vue')
const TopCategory = () => import('@/views/category')
const SubCategory = () => import('@/views/category/sub.vue')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      }
    ]
  }

]

// 创建路由实例
const router = createRouter({
  // 代表使用hash模式的路由
  history: createWebHashHistory(),
  routes
})

export default router
