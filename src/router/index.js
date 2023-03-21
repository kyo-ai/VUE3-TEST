import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const notFoundRoute = [
  {
    path: '/404',
    component: () => import( '@/components/not-found/Error404.vue' )
  },
  //不识别的路由直接重定向到404页面
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  },
]
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //父子孙间通信
  {
    path: '/contact-test',
    name: 'contactTest',
    component: () => import( '../views/contact-test/index.vue' )
  },

  //View-Design 组件库
  {
    path: '/view-design-test',
    name: 'viewDesign',
    component: () => import( '../views/view-ui-test/index.vue' )
  },

  //路由嵌套
  {
    path: '/router-children-test',
    name: 'childrenTest',
    component: () => import( '../views/router-children-test/index.vue' ),
    redirect: '/router-children-test/one',
    children:[
      {
        path: 'one',
        name: 'one',
        component: () => import( '../views/router-children-test/One.vue' ),
      },
      {
        path: 'two',
        name: 'two',
        component: () => import( '../views/router-children-test/Two.vue' ),
      }
    ]
  },  
]

//路由传参
const paramsRoute = [
  {
    path: '/router-params-test',
    name: 'routerParams',
    component: () => import( '../views/router-params-test/index.vue' )
  },
  {
    path: '/router-params-test/page1/:id/:msg',
    name: 'paramsPage1',
    component: () => import( '../views/router-params-test/PageOne.vue' )
  },
  {
    path: '/router-params-test/page2',
    name: 'paramsPage2',
    component: () => import( '../views/router-params-test/PageTwo.vue' )
  },
]

//$on、$off、$once 测试路由
const eventContactRoute = [
  {
    path: '/event-contact',
    name: 'EventContact',
    component: () => import( '../views/on-off-once/index.vue' )
  },
  {
    path: '/event-contact-son',
    name: 'EventContactSon',
    component: () => import( '../views/on-off-once/event-contact/Son.vue' )
  },
]

//动态权限相关路由测试首页
const powerRoute = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import( '../views/admin-router/index.vue' )
  },
]
//需要动态添加的超级管理员的路由
export const superAdminRoute = [
  {
    path: '/super-admin',
    name: 'SuperAdmin',
    component: () => import( '../views/admin-router/SuperAdmin.vue' ),
    children:[
      {
        path: '/super-admin-child',
        name: 'SuperAdminChild',
        component: () => import( '../views/admin-router/SuperAdminChild.vue' )
      }
    ]
  },
]

const allroutes = routes.concat(paramsRoute).concat(eventContactRoute).concat(powerRoute).concat(notFoundRoute)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allroutes
})

export default router
