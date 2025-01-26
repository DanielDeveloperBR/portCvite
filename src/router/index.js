import Home from '../views/Header.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/habilidades',
            name: 'habilidades',
            component: () => import('../views/Main.vue'),
        },
        {
            path: '/sobre',
            name: 'sobre',
            component: () => import('../views/Main.vue'),
        },
        {
            path: '/projetos',
            name: 'projetos',
            component: () => import('../views/Main.vue'),
        },
        {
            path: '/avaliacoes',
            name: 'avaliacoes',
            component: () => import('../views/Main.vue'),
        },
        {
            path: '/contatos',
            name: 'contatos',
            component: () => import('../views/Main.vue'),
        },
    ],
});
export default router;
