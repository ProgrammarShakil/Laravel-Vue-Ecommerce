
require('./bootstrap');

window.Vue = require('vue').default;

import {router} from './router/index'

// V Form
window.Form = Form; 

import Form from 'vform'
import { HasError, AlertError, AlertSuccess } from 'vform/src/components/bootstrap5'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertError.name, AlertSuccess)


Vue.component('app', require('./components/App.vue').default);


const app = new Vue({
    el: '#app',
    router
});
