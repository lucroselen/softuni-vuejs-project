import { createRouter, createWebHistory } from "vue-router";
import PageHome from "../views/PageHome.vue";
import PageLogin from "../views/PageLogin.vue";
import PageRegister from "../views/PageRegister.vue";
import PageNotFound from "../views/PageNotFound.vue";
import PageUserProfile from "../views/PageUserProfile.vue";
import PageAddCar from "../views/PageAddCar.vue";
import PageEditCar from "../views/PageEditCar.vue";
import PageFindUs from "../views/PageFindUs.vue";
import PageCars from "../views/PageCars.vue";
import PageCarDetails from "../views/PageCarDetails.vue";
import { useUserStore } from "../store/userStore";

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
