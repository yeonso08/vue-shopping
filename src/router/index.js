import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Define your routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/HomeView.vue"), // Lazy load the Home component
    meta: { showNavbar: true }, // Add this line
  },
  {
    path: "/category/:id", // id 매개변수가 있는 카테고리 경로에 대한 새로운 라우트
    name: "Category",
    component: () => import("@/views/category/CategoryView.vue"), // 경로가 필요한 경우 조정하십시오.
    meta: { showNavbar: true },
  },
];

// Create the router instance
const router = new VueRouter({
  mode: "history", // this mode uses the HTML5 history API (removes the "#" from URLs)
  routes, // short for 'routes: routes'
});

export default router;
