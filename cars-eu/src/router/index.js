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
  },
  {
    path: "/find-us",
    component: PageFindUs,
  },
  {
    path: "/edit/:id",
    component: PageEditCar,
  },
  {
    path: "/details/:id",
    component: PageCarDetails,
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
