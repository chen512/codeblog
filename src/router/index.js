import Vue from 'vue';
import Router from 'vue-router';
import login from '../components/login.vue';
import register from '../components/register.vue';
import home from '../components/home.vue';
import addCustomer from '../components/addCustomer.vue';
import willCustomer from '../components/willCustomer.vue';

//通过 Vue.use() 明确地安装路由
Vue.use(Router);

//const login         = () => import('../components/login.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => {
    y: 0
  },
  routes: [{
    path: '/login',
    name: 'login',
    component: login
    }, {
        path: '/register',
        name: 'register',
        component: register
    }, {
        path: '/home',
        name: 'home',
        component: home
    }, {
        path: '/addCustomer',
        name: 'addCustomer',
        component: addCustomer
    }, {
    path: '/willCustomer',
    name: 'willCustomer',
    component: willCustomer
    }]
    })
