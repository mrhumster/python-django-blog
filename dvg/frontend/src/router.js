import { createRouter, createWebHistory } from 'vue-router'
import MyPost from '@/components/Post'
import MyAuthor from '@/components/Author'
import PostsByTag from '@/components/PostsByTag'
import AllPosts from '@/components/AllPosts'


const routes = [
  { path: '/author/:username', component: MyAuthor },
  { path: '/post/:slug', component: MyPost },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/', component: AllPosts },
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

export default router