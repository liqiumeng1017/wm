import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import index from 'components/index/index'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
import shop from 'components/shop/shop'
import vueTap from 'v-tap'
import fastclick from 'fastclick'
import Vuex from 'vuex'
import Zanui from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Zanui)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // 添加的商品元素
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index
    },
    { path: '/index', component: index },
    {
      path: '/shop',
      component: shop
    }, {
      path: '/goods',
      component: goods
    }, {
      path: '/ratings',
      component: ratings
    }, {
      path: '/seller',
      component: seller
    }],
  linkActiveClass: 'active'
})

new Vue({
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')


