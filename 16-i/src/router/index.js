import { createRouter, createWebHistory } from 'vue-router';
import Title from '@/components/Title.vue';
import Welcome from '@/components/Welcome.vue';
import Params from '@/components/Params.vue';
import GoBack from '@/components/GoBack.vue';
import NotFound from '@/components/NotFound.vue';
import Admin from '@/components/Admin.vue';
import Login from '@/components/Login.vue';
import Utilisateur from '@/components/Utilisateur.vue';


const routes = [
    { path: '/', component: Title },
    { path: '/welcome', component: Welcome },
    { path: '/param/:id', component: Params },
    { path: '/back', component: GoBack },
    { path: '/admin', component: Admin, meta: { AuthRequired: true} },
    { path: '/login', component: Login },
    { path: '/users', component: Utilisateur },
    { path: '/:patchMatch(.*)*', component: NotFound },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

// to: Route vers laquelle on se dirige
router.beforeEach((to, from, next) => {
    if (to.meta.AuthRequired) {
        // L'utilisateur doit être connecté
        const email = localStorage.getItem('email');
        if (email) {
            next();
        } else {
            next('/login');
        }
    }
    else {
            next()
    }
});

export default router;
