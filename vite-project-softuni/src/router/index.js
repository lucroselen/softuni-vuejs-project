import { createRouter, createWebHistory } from "vue-router";
import PageHome from "../components/PageHome.vue";
import PageLogin from "../components/PageLogin.vue";
import PageRegister from "../components/PageRegister.vue";
import PageNotFound from "../components/PageNotFound.vue";
import PageUserProfile from "../components/PageUserProfile.vue";

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/user/login",
    component: PageLogin,
  },
  {
    path: "/user/register",
    component: PageRegister,
  },
  {
    path: "/user/profile",
    component: PageUserProfile,
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
