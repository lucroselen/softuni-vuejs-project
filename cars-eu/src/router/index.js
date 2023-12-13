import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/userStore";
const PageHome = () => import("../views/PageHome.vue");
const PageLogin = () => import("../views/PageLogin.vue");
const PageRegister = () => import("../views/PageRegister.vue");
const PageNotFound = () => import("../views/PageNotFound.vue");
const PageUserProfile = () => import("../views/PageUserProfile.vue");
const PageAddCar = () => import("../views/PageAddCar.vue");
const PageEditCar = () => import("../views/PageEditCar.vue");
const PageFindUs = () => import("../views/PageFindUs.vue");
const PageCars = () => import("../views/PageCars.vue");
const PageCarDetails = () => import("../views/PageCarDetails.vue");

function validateUser() {
  const userStore = useUserStore();
  return userStore.isAuthenticated
    ? userStore.isAuthenticated
    : { path: "/user/login" };
}

function isLoggedIn() {
  const userStore = useUserStore();
  return userStore.isAuthenticated ? { path: "/user/profile" } : true;
}

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/all-cars",
    component: PageCars,
  },
  {
    path: "/top-10",
    component: PageCars,
  },
  {
    path: "/add",
    component: PageAddCar,
    beforeEnter: validateUser,
  },
  {
    path: "/find-us",
    component: PageFindUs,
  },
  {
    path: "/edit/:id",
    component: PageEditCar,
    beforeEnter: validateUser,
  },
  {
    path: "/details/:id",
    component: PageCarDetails,
  },
  {
    path: "/user/login",
    component: PageLogin,
    beforeEnter: isLoggedIn,
  },
  {
    path: "/user/register",
    component: PageRegister,
    beforeEnter: isLoggedIn,
  },
  {
    path: "/user/profile",
    component: PageUserProfile,
    beforeEnter: validateUser,
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
