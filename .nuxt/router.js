import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1379245f = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0969a225 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _6284fc04 = () => interopDefault(import('../pages/database.vue' /* webpackChunkName: "pages/database" */))
const _f490fc14 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7d92a9db = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _13399876 = () => interopDefault(import('../pages/admin/profile.vue' /* webpackChunkName: "pages/admin/profile" */))
const _2d806326 = () => interopDefault(import('../pages/admin/settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _87e04242 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1379245f,
    name: "admin"
  }, {
    path: "/blog",
    component: _0969a225,
    name: "blog"
  }, {
    path: "/database",
    component: _6284fc04,
    name: "database"
  }, {
    path: "/login",
    component: _f490fc14,
    name: "login"
  }, {
    path: "/signup",
    component: _7d92a9db,
    name: "signup"
  }, {
    path: "/admin/profile",
    component: _13399876,
    name: "admin-profile"
  }, {
    path: "/admin/settings",
    component: _2d806326,
    name: "admin-settings"
  }, {
    path: "/",
    component: _87e04242,
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
