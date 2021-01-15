import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7488fab2 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0dbbf332 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _5f92f6ea = () => interopDefault(import('../pages/database.vue' /* webpackChunkName: "pages/database" */))
const _0baf5289 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _92d628b0 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _6fad2609 = () => interopDefault(import('../pages/admin/profile.vue' /* webpackChunkName: "pages/admin/profile" */))
const _5f7e87f3 = () => interopDefault(import('../pages/admin/settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _4207af72 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _7488fab2,
    name: "admin"
  }, {
    path: "/blog",
    component: _0dbbf332,
    name: "blog"
  }, {
    path: "/database",
    component: _5f92f6ea,
    name: "database"
  }, {
    path: "/login",
    component: _0baf5289,
    name: "login"
  }, {
    path: "/signup",
    component: _92d628b0,
    name: "signup"
  }, {
    path: "/admin/profile",
    component: _6fad2609,
    name: "admin-profile"
  }, {
    path: "/admin/settings",
    component: _5f7e87f3,
    name: "admin-settings"
  }, {
    path: "/",
    component: _4207af72,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
