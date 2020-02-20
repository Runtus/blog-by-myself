import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home";


Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component : home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path : "*",
    redirect : "/home"
  }
];

const router = new VueRouter({
  routes,
  mode : "history"
})

export default router
