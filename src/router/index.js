import {createRouter, createWebHashHistory} from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";


let router;
router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "MainLayout",
            component: MainLayout,
            children: [
                {
                    path: '/myRegistration',
                    name: "myRegistration",
                    component: () => import("@/views/MyRegistrationView.vue"),
                },
                {
                    path: '/myHome',
                    name: "myHome",
                    component: () => import("@/views/MyHomeView.vue")
                },
            ]
        }
    ]
});
export default router;