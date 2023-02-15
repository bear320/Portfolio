import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/AboutMe.vue";

const routes = [
    {
        path: "/",
        name: "about",
        component: () => import("@/views/AboutMe.vue"),
        meta: { title: "簡介｜熊伯祥的個人網站" },
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("@/views/Projects.vue"),
        meta: { title: "作品集｜熊伯祥的個人網站" },
    },
    {
        path: "/skills",
        name: "skills",
        component: () => import("@/views/Skills.vue"),
        meta: { title: "技能｜熊伯祥的個人網站" },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
