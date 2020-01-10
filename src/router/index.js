import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetups'
import Signup from '@/components/user/Signup'
import Login from '@/components/user/Login'
import Profile from '@/components/user/Profile'
import UserUpdate from '@/components/user/UserUpdate'
import Create from '@/components/CreateMeet'


import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    // ゲストユーザーだけ
    meta: {onlyGestUser: true}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    // ゲストユーザーだけ
    meta: {onlyGestUser: true}
  },
  {
    path: '/users/me',
    name: 'Profile',
    component: Profile,
    // 承認ユーザーだけ
    meta: {onlyAuthUser: true}
  },
  {
    path: '/users/me/edit',
      name: 'edit',
      component: UserUpdate,
      // 承認ユーザーだけ
      meta: {
        onlyAuthUser: true
      }
  },
  {
    path: '/users/me/edit',
    name: 'edit',
    component: UserUpdate,
    // 承認ユーザーだけ
    meta: {
      onlyAuthUser: true
    }
  },
  {
    path: '/create',
    name: 'create',
    component: Create,
    // 承認ユーザーだけ
    meta: {
      onlyAuthUser: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authUser = firebase.auth().currentUser
  // 認証済みの場合
  if (to.meta.onlyAuthUser) {
    if (authUser) {
      // 認証はそのまま進める
      next()
    } else {
      // 非認証はLOGINに戻される
      next({
        name: 'login'
      })
    }
    // ゲストの場合
  } else if (to.meta.onlyGestUser) {
    if (authUser) {
      // 認証済みはHOMEに戻される
      next({
        name: 'home'
      })
    } else {
      // ゲストはそのまま進める
      next()
    }
  } else {
    next()
  }
})

export default router
