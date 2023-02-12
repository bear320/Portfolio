import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/AboutMe.vue";

const routes = [
    {
        path: "/",
        name: "about",
        component: () => import("@/views/AboutMe.vue"),
        meta: { title: "About Me｜Oliver's Portfolio" },
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("@/views/Projects.vue"),
        meta: { title: "Projects｜Oliver's Portfolio" },
    },
    {
        path: "/skills",
        name: "skills",
        component: () => import("@/views/Skills.vue"),
        meta: { title: "Skills｜Oliver's Portfolio" },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
