/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.axios = require('axios');
// Per richiesta axios, necessaria non sempre
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// window.axios.get('http://127.0.0.1:8000/api/posts').then(results => {
//     console.log(results);
// }).catch(err => {
//     console.log(err)
// })

window.Vue = require('vue');

import AppComponent from './app/AppComponent';

import router from './routes';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    render: (createElement) => createElement(AppComponent),
    router
});
