import { createWebHistory, createRouter } from 'vue-router';

import Intro from '../views/IntroView.vue';

const routes = [
    {
        path: '/',
        name: 'intro',
        component: Intro,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export { routes };
export default router;