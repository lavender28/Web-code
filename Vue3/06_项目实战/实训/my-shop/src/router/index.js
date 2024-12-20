import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '首页',
        isTab: true
      }
    },
    {
      name: 'category',
      path: '/category',
      component: () => import('@/views/Category.vue'),
      meta: {
        title: '分类',
        isTab: true,
        isShowNav: true
      }
    },
    {
      name: 'message',
      path: '/message',
      component: () => import('@/views/Message.vue'),
      meta: {
        title: '消息',
        isTab: true,
        isShowNav: true
      }
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('@/views/Cart.vue'),
      meta: {
        title: '购物车',
        isTab: true,
        isShowNav: true,
        isShowBack: true
      }
    },
    {
      name: 'user',
      path: '/user',
      component: () => import('@/views/User.vue'),
      meta: {
        title: '我的',
        isTab: true
      }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '登录',
        isTab: true,
        isShowNav: true,
        isShowBack: true
      }
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/views/Register.vue'),
      meta: {
        title: '注册',
        isTab: true,
        isShowNav: true,
        isShowBack: true
      }
    },
    {
      path: "/goodslist/:category_id",
      component: () => import("@/views/GoodsList.vue"),
      props: true,
      name: "goodslist",
      meta: {
        title: "商品列表",
        isTab: true,
        isShowNav: true,
        isShowBack: true,
      },
    },
    {
      path: '/goodsDetail/:id',
      component: () => import('@/views/GoodsDetail.vue'), 
      props: true, 
      name: 'goodsDetail', 
      meta: {
        title: '商品详情',
        isTab: false,
        isShowNav: true,
        isShowBack: true 
      } 
    },
  ]
})
router.beforeEach((to, from) => {
  const title = to.meta.title;
  if (title) {
    document.title = title + '-微商城'
  }
})

export default router