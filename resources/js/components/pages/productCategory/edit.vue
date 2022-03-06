<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-6">
                <div class="card rounded-1">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Edit Category</h4>
                        <router-link :to="{name:'product-Category'}" class="btn btn-success">Back</router-link>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="UpdateCategory()" class="form">
                            <input :class="{'is-invalid' : categoryForm.errors.has('name')}" v-model="categoryForm.name" type="text" name="name" class="form-control" placeholder="Category Name">

                            <has-error :form="categoryForm" field="name"></has-error>
                            <input :disabled="categoryForm.busy" type="submit" name="name" value="Update Category" class="btn btn-primary mt-3">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductEdit',

        data() {
            return {
                    categoryForm: new Form({
                    name: ''
                })
            };
        },

        mounted() {
            this.getCategories()
        },

        methods: {
            
            UpdateCategory(){
                let id = this.$route.params.id;
                this.categoryForm.put(`/api/categories/${id}`).then((response)=>{

                Toastr.success('Category Updated Successfully');

                })
                .catch((error)=>{
                    console.log(error);
                })
            },

            getCategories(){
                let id = this.$route.params.id;
                
                axios.get(`/api/categories/${id}/edit`).then(response => {
                    this.categoryForm.name = response.data.name
                })
                .catch();
            }
        },
    };

</script>

<style scoped>

</style>
