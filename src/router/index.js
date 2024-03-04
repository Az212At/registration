import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import myRegistration from "../components/myRegistration.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "myRegistration",
          component: myRegistration,
        },
        {
          path: "/myHome",
          name: "myHome",
          component: () => import("@/views/MyHomeView.vue"),
        },
      ],
    },
  ],
});
export default router;
