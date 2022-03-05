<template>
    <div>
        <Header></Header>
        <router-view></router-view> 
    </div>
</template>

<script>
    import Header from '../components/pages/Header.vue'
    import Home from '../components/pages/Home.vue'
    export default {
        components:{
            Home,Header
        }
    }

</script>
