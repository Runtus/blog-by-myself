import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home";
import currentPage from "../views/currentPage";


Vue.use(VueRouter);

const routes = [
  {
    path: '/home/:pageNum',
    name: 'Home',
    component : home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path : "/home/:pageNum/:noteId",
    name : 'currentPage',
    component : currentPage
  },
  {
    path : "*",
    redirect : "/home/1"
  }
];

const router = new VueRouter({
  routes,
  mode : "history"
})

export default router
