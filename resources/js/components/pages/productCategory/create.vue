<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-8">
                <div class="card rounded-1">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Categories</h4>
                        <router-link :to="{name:'product-Category'}" class="btn btn-success">Back</router-link>
                    </div>
                    <div class="card-body">
                        <form action="" method="post" class="form">
                            <input type="text" class="form-control">
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

            };
        },

        mounted() {

        },

        methods: {

        },
    };

</script>

<style scoped>

</style>
