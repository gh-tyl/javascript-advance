import { createWebHistory, createRouter } from "vue-router";
import HarukaPage from "../components/HarukaPage.vue";
import JunPage from "../components/JunPage.vue";
import LucasPage from "../components/LucasPage.vue";
import MateusPage from "../components/MateusPage.vue";
import TinaPage from "../components/TinaPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HarukaPage,
    },
    {
        path: "/jun",
        name: "Jun",
        component: JunPage,
    },
    {
        path: "/lucas",
        name: "Lucas",
        component: LucasPage,
    },
    {
        path: "/mateus",

        name: "Mateus",
        component: MateusPage,
    },
    {
        path: "/tina",
        name: "Tina",
        component: TinaPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
