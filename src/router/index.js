import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import MSite from '../pages/MSite/MSite.vue'
import Goods from '../pages/Goods/Goods.vue'
import Categorys from '../pages/Categorys/Categorys.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import PhoneLogin from '../pages/PhoneLogin/PhoneLogin.vue'
import EmailLogin from '../pages/EmailLogin/EmailLogin.vue'
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path: '/',
      component: App

    },
    {
      path: '/msite',
      component: MSite,
      meta:{
        footerShow:true
      }

    },
    {
      path: '/goods',
      component: Goods,
      meta:{
        footerShow:true
      }

    },
    {
      path: '/categorys',
      component: Categorys,
      meta:{
        footerShow:true
      }

    },
    {
      path: '/order',
      component: Order,
      meta:{
        footerShow:true
      }

    },
    {
      path: '/profile',
      component: Profile

    },
    {
      path: '/phone',
      component: PhoneLogin
    },
    {
      path: '/email',
      component: EmailLogin,

    }
  ]
})
