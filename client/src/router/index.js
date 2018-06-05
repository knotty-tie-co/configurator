import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Callback from '@/components/Callback'
import Restricted from '@/components/Restricted'
import Color from '@/components/Color'
import Configurator from '@/components/Configurator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/configurator',
      name: 'Configurator',
      component: Configurator
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/color',
      name: 'Color',
      component: Color
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/restricted',
      name: 'Restricted',
      component: Restricted
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})