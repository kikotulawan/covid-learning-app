import Vue from 'vue';
import VueRouter from 'vue-router';

import StartPage from '../views/Start.vue'
import MenuPage from '../views/Menu.vue'
import GameOne from '../views/GameOne.vue'

Vue.use(VueRouter);
    
const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/menu',
        component: MenuPage
    },
    {
        path: '/game/1',
        component: GameOne
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0, behavior: 'smooth' }
    }
});

export default router;