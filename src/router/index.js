import Vue from 'vue'
import Router from 'vue-router'
import Level_05 from '@/components/Level_05'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Level_05',
      component: Level_05
    }
  ]
})
