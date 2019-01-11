import Vue from 'vue'
import Router from 'vue-router'
import Level_02 from '@/components/Level_02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Level_02',
      component: Level_02
    }
  ]
})
