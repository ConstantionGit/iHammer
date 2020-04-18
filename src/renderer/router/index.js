/**
 * @Author: Const
 * @Date: 2020-04-18 18:44:06
 * @LastEditors: Const
 * @LastEditTime: 2020-04-18 19:19:31
 * @Description:
 * @FilePath: \i-hammer\src\renderer\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coffin',
      component: require('@/views/Coffin.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
