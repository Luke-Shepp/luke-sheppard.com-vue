import Home from "@/Pages/Home";
import PageNotFound from "@/Pages/PageNotFound";
import Portfolio from "@/Pages/Portfolio";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
