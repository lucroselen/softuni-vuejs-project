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
    name: "Home",
  },
  {
    path: "/all-cars",
    component: PageCars,
    name: "AllCars",
  },
  {
    path: "/top-10",
    component: PageCars,
    name: "Top10",
  },
  {
    path: "/add",
    component: PageAddCar,
    name: "AddCar",
    beforeEnter: validateUser,
  },
  {
    path: "/find-us",
    name: "FindUs",
    component: PageFindUs,
  },
  {
    path: "/edit/:id",
    component: PageEditCar,
    name: "EditCar",
    beforeEnter: validateUser,
  },
  {
    path: "/details/:id",
    component: PageCarDetails,
    name: "CarDetails",
  },
  {
    path: "/user/login",
    component: PageLogin,
    name: "Login",
    beforeEnter: isLoggedIn,
  },
  {
    path: "/user/register",
    component: PageRegister,
    name: "Register",
    beforeEnter: isLoggedIn,
  },
  {
    path: "/user/profile",
    component: PageUserProfile,
    name: "Profile",
    beforeEnter: validateUser,
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound, name: "404" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
