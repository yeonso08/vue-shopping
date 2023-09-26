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
];

// Create the router instance
const router = new VueRouter({
  mode: "history", // this mode uses the HTML5 history API (removes the "#" from URLs)
  routes, // short for 'routes: routes'
});

export default router;
