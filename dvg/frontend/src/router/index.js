import Vue from 'vue'
import VueRouter from 'vue-router'

import MyPost from '@/components/Post'
import MyAuthor from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'

Vue.use(VueRouter)

const routes = [
  { path: '/author/:username', component: MyAuthor },
  { path: '/post/:slug', component: MyPost },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/', component: AllPosts },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})
export default router