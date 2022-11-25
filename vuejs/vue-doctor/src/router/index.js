import { createWebHistory,createRouter } from "vue-router";
import DoctorCompo from '../components/DoctorHome.vue';
import LoginCompo from '../components/LoginCompo.vue';
import PatHome from '../components/PatHome.vue';
import PresCompo from '../components/PresCompo.vue';
const routes = [
    {
        path:'/',
        alias:'/login',
        name:'login-compo',
        component:LoginCompo
    },
    {
        path:'/doc',
        name:'doctor-compo',
        component:DoctorCompo
    },
    {
        path:'/pat',
        name:'pat-home',
        component:PatHome
    },
    {
        path:'/pres',
        name:'pres-compo',
        component:PresCompo
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
