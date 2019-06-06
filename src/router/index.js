import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import discoverShopping from './shopping'
import search from './search'
import informations from './informations'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/discover"
    },
    discover,
    discoverShopping,
    search,
    informations
  ]
})
