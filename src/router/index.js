import { createRouter, createWebHistory } from "vue-router";
import LoginLayout from "@/layouts/LoginLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LoginLayout",
      component: LoginLayout,
      children: [
        {
          path: "",
          name: "RegistrationView",
          component: () => import("@/views/RegistrationView.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "HomeView",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFoundView.vue"),
      meta: {
        title: "Страница не найдена",
      },
    },
  ],
});

router.beforeEach(async (to) => {
  const currentEmail = localStorage.getItem("email");

  if (currentEmail && to.name === "RegistrationView") {
    return { name: "HomeView" };
  } else if (!currentEmail && to.name === "HomeView") {
    return { name: "RegistrationView" };
  }

  document.title = to.meta.title ?? window.document.title;
});

export default router;
