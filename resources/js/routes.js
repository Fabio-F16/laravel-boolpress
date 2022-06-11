import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: ContactsPage
        },
        {
            path: '/*',
            name: 'notFound',
            component: NotFoundPage
        },

    ],

});

export default router;
