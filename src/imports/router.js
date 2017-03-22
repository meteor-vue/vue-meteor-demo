import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import NotFound from './ui/NotFound.vue'
import Home from './ui/Home.vue'
import Notes from './ui/Notes.vue'
import About from './ui/About.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/notes', name: 'notes', component: Notes },
    { path: '/about', name: 'about', component: About },
    { path: '*', name: 'not-found', component: NotFound },
  ],
})

export default router
