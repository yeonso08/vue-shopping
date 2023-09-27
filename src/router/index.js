import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/HomeView.vue"),
    meta: { showNavbar: true },
  },
  {
    path: "/category/:id",
    name: "Category",
    component: () => import("@/views/category/CategoryView.vue"),
    meta: { showNavbar: true },
  },
  {
    path: "/products/:id",
    name: "Detail",
    component: () => import("@/views/detail/DetailView.vue"),
    meta: { showNavbar: true },
  },
  {
    path: "/carts/",
    name: "Carts",
    component: () => import("@/views/cart/CartView.vue"),
    meta: { showNavbar: true },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
