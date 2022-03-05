
require('./bootstrap');

// Vue
window.Vue = require('vue').default;

// Vue Router
import {router} from './router/index'

// V Form
window.Form = Form; 
import Form from 'vform'
import { HasError, AlertError, AlertSuccess } from 'vform/src/components/bootstrap5'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertError.name, AlertSuccess)


// Toastr js
window.Toastr = Toastr
import Toastr from 'toastr'
Toastr.options = {
  "closeButton": true,
  "newestOnTop": true,
  "positionClass": "toast-top-right",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

Vue.component('app', require('./components/App.vue').default);


const app = new Vue({
    el: '#app',
    router
});
