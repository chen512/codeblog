/**
 * Created by farben on 17/6/30.
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import vueResource from 'vue-resource';
//import flex from './common/flexible';
Vue.use(vueResource);
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
