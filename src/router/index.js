import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home";
import currentPage from "../views/currentPage";
import about from "../views/about";
import classPage from "../views/class-page"
import classMore from "../views/class-page/class-page-inf"
import MoreInf  from  "../views/class-page/class-page-more-inf"

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
    path : "/about",
    name : "about" ,
    component : about
  },
  {
    path : "/class",
    name : "class",
    component : classPage
  },
  {
    path : "/class/:choose",
    name : "class-choose",
    component : classMore

  },
  {
    path : "/class/:choose/:noteId",
    name : "moreInf",
    component : MoreInf
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
