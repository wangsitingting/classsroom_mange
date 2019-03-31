import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index';
import Login from '../views/login';
import Register from '../views/register';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/Login',
            name: 'login',
            component: Login
        },
        {
            path: '/Register',
            name: 'register',
            component: Register
        }
    ]
})