import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiredAuth: false },
    },
    {
        path: '/Laptop',
        name: 'Laptop',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/laptopView.vue'),
        meta: { requiredAuth: false },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach(async (to) => {
    if (to.meta?.requiredAuth) {
        let isAuthenticated = store.state.auth.user
        if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')
        if (!isAuthenticated)
            return {
                name: 'login',
            }
    }
})

export default router
