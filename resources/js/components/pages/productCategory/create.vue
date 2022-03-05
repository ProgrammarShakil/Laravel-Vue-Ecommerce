<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-6">
                <div class="card rounded-1">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Categories</h4>
                        <router-link :to="{name:'product-Category'}" class="btn btn-success">Back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="createCategory()" class="form">
                            <input v-model="createName" type="text" name="name" class="form-control">
                            <input type="submit" name="name" value="Add Category" class="btn btn-primary mt-3">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCreate',

        data() {
            return {
                createName: '',
            };
        },

        mounted() {

        },

        methods: {
            createCategory(){
                axios.post('/api/categories', {name: this.createName}).then((response)=>{
                    console.log(response);
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
    };

</script>

<style scoped>

</style>
