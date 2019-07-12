// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import 'babel-polyfill'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import Echarts from 'echarts'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(new VueSocketio({
  debug:false,
  // connection:'http://192.168.33.104:2121/',
  connection:'http://192.168.33.104:2121',
  options: { path: "/home" }
}));//填后台给的socket地址，端口号根据实际后台端口写
//Vue.use(VueSocketio,'http://192.168.33.104:2121');
Vue.config.productionTip = false
Vue.prototype.Echarts = Echarts;
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs
Vue.use(ElementUI)

Vue.use(Viewer)
Viewer.setDefaults({
  Options: {"inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source"}
})

/* eslint-disable no-new */
window.store = store
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// router.beforeEach((to, from, next) => {
//   if (to.path == '/') {
//     next()
//   } else {
//     if (to.path == '/home') {
//       if (window.sessionStorage.getItem('username')) {
//         next()
//       } else {
//         next({path: '/'})
//       }
//     }
//   }
// })
