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
                            <input :class="{'is-invalid' : categoryForm.errors.has('name')}" v-model="categoryForm.name" type="text" name="name" class="form-control" placeholder="Category Name">

                            <has-error :form="categoryForm" field="name"></has-error>
                            <input :disabled="categoryForm.busy" type="submit" name="name" value="Add Category" class="btn btn-primary mt-3">
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
                    categoryForm: new Form({
                    name: ''
                })
            };
        },

        mounted() {

        },

        methods: {
            createCategory(){
                this.categoryForm.post('/api/categories').then((response)=>{
                Toastr.success('Category Added Successfully');

				this.categoryForm.name = null;
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
