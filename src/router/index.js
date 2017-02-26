
import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/Home'
import Goods from 'components/good/Goods'
import Promotion from 'components/promotion/Promotion'
import Me from 'components/me/Me'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/goods',
      name: 'Goods',
      component: Goods
    },{
      path: '/promotion',
      name: 'Promotion',
      component: Promotion
    },{
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
