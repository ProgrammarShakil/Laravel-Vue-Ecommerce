import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'

// product category
import index from '../components/pages/productCategory/index.vue'
import create from '../components/pages/productCategory/create.vue'
import edit from '../components/pages/productCategory/edit.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/product-Category', component: index, name: 'product-Category' },
    { path: '/create-product-Category', component: create, name: 'create-product-Category' },
    { path: '/edit-product-Category/:id', component: edit, name: 'edit-product-Category' },
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
