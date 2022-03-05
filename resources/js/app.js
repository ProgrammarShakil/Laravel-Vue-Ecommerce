
require('./bootstrap');

window.Vue = require('vue').default;

import {router} from './router/index'


Vue.component('app', require('./components/App.vue').default);


const app = new Vue({
    el: '#app',
    router
});
