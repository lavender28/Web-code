import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
// import About from "@/views/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/home'},
    { 
      path: '/',
      redirect: { name: 'zhuye' } },
    { 
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        { 
          name: 'remen',
          path: 'hot',
          component: ()=>import('@/views/home/Hot.vue'),
          meta: { requiresAuth: true } // 添加元数据来标记需要身份验证的路由
        },
        { 
          name: 'zuixin',
          path: 'latest',
          component: ()=>import('@/views/home/Latest.vue')
        }
      ]
    },
    { 
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          path: 'detail',
          // path: ':id/:title/:content',
          name: 'newsDetail',
          component:()=>import('@/views/news/NewsDetail.vue'),
          // props: true
          props(route) {
            return route.query
          }
        }
      ]
    },
    // { path: '/about', component: About }
    { 
      name: 'guanyu',
      path: '/about',
      component: () => import("@/views/About.vue"),
      beforeEnter: (to, from)=>{
        // 模拟检查是否允许访问关于页面
        const allowAccessToAbout = true; // 总是允许访问关于页面
        if (allowAccessToAbout) {
          alert('允许访问关于页面.')
        } else {
          return { path:'/home' }
        }
      }
    }
  ]
})

// 全局前置守卫 - 验证权限
router.beforeEach((to, from)=>{
  console.log(to, from)
  if (to.meta.requiresAuth ) {
    const isAuthenticated = false // 模拟用户未登录
    if (!isAuthenticated) {
      alert('需要登录才能访问热门推荐页面！')
      return '/' // 重定向到首页
    }
  }
})

// 全局解析守卫 - 获取数据
router.beforeResolve((to, from)=>{
  console.log('准备加载组件前获取数据')
})

// 全局后置守卫 - 更改标题、记录导航
router.afterEach((to, from) => {
  console.log(to.meta)
  document.title = to.meta.title || 'Default Title';
  console.log(`导航从 ${ from.path } 到: ${ to.path }`)
})

export default router
