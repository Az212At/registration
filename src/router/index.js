import { createRouter, createWebHashHistory } from "vue-router";
import LoginLayout from "@/layouts/LoginLayout.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginLayout",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "Registration",
          component: () => import("@/views/RegistrationView.vue"),
        },
        {
          path: "/home",
          name: "HomeView",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
  ],
});
export default router;
