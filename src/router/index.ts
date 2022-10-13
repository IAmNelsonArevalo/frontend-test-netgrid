import useViews from "@/views";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

/** Views */
const { useScreens } = useViews();
const { Home, Login, Register } = useScreens();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
