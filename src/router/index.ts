import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue') as any
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/pages/Services.vue') as any
  },
  {
    path: '/services/:id',
    name: 'ServiceDetail',
    component: () => import('@/pages/ServiceDetail.vue') as any
  },
  {
    path: '/government',
    name: 'Government',
    component: () => import('@/pages/Government.vue') as any
  },
  {
    path: '/barangay/:id',
    name: 'BarangayDetail',
    component: () => import('@/pages/BarangayDetail.vue') as any
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/pages/Statistics.vue') as any
  },
  {
    path: '/legislative',
    name: 'Legislative',
    component: () => import('@/pages/Legislative.vue') as any
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import('@/pages/Budget.vue') as any
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue') as any
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/pages/News.vue') as any
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('@/pages/NewsDetail.vue') as any
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue') as any
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
