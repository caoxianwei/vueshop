import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '../pages/index.vue'
import DetailPage from '../pages/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }, {
      path: '/detail',
      component: DetailPage
    }
  ]
})
