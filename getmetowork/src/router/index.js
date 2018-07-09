import Vue from 'vue'
import Router from 'vue-router'
import Transit from '@/components/Transit'
import Settings from '@/components/Settings'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Transit',
      component: Transit
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})