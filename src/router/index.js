import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      component: (resolve) => require(['@/components/home/home.vue'],resolve),
    },
    {
      path:'/map',
      component: (resolve) => require(['@/common/map/map.vue'],resolve),
    }
  ]
})
