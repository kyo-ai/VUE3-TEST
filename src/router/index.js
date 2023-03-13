import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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

// view Plus 组件view-menu 练习
const viewMenuRoute = [
  {
    path: '/view-menu-test',
    name: 'viewMenu',
    component: () => import( '../views/view-menu-test/index.vue' )
  },
]

const allroutes = routes.concat(paramsRoute).concat(viewMenuRoute)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allroutes
})

export default router
