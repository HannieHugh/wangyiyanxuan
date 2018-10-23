import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import MSite from '../pages/MSite/MSite.vue'
import Goods from '../pages/Goods/Goods.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path: '/',
      component: App

    },
    {
      path: '/msite',
      component: MSite

    },
    {
      path: '/goods',
      component: Goods

    },
    {
      path: '/categorys',
      component: Categorys

    },
    {
      path: '/order',
      component: Order

    },
    {
      path: '/profile',
      component: Profile

    }

  ]
})
