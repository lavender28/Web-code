import {
  createRouter,
  createWebHistory
} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/product',
      component: () => import('@/views/Product.vue'),
      children: [{
          path: 'phone',
          component: () => import('@/views/product/Phone.vue')
        },
        {
          path: 'appliances',
          component: () => import('@/views/product/Appliances.vue')
        },
        {
          path: 'electronics',
          component: () => import('@/views/product/Electronics.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('@/views/User.vue'),
      children: [{
        path: ':id',
        name: 'UserDetails',
        component: () => import('@/views/user/UserDetails.vue')
      }]
    }
  ]
})

export default router