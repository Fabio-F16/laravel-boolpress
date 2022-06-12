import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactsPage from './pages/ContactsPage';
import SingleBlogPage from './pages/SingleBlogPage';

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
        }
        ,
        {
            path: '/blog/:slug',
            name: 'single-blog',
            component: SingleBlogPage
        },

    ],

});

export default router;
