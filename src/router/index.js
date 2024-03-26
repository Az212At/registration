import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import MyRegistration from "@/components/MyRegistration.vue";
import MyHome from "@/components/MyHome.vue";

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
          name: "MyRegistration",
          component: MyRegistration,
        },
        {
          path: "/MyHome",
          name: "MyHome",
          component: MyHome,
        },
      ],
    },
  ],
});
export default router;
