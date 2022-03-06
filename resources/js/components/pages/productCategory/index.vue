<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-8">
                <div class="card rounded-1">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Categories</h4>
                        <router-link :to="{name:'create-product-Category'}" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Add Category</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table bg-primary text-white rounded-1 p-3">
                            <thead>
                                <tr class="py-3">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(category,id) in categories" :key="id">
                                    <td>{{ id }}</td>
                                    <td>{{ category.name }}</td>
                                    <td>{{ category.slug }}</td>
                                    <td>
                                        <router-link class="btn btn-info btn-sm" :to="{name: 'edit-product-Category', params:{id:category.id}}"><i class="fa fa-edit text-white"></i></router-link>
                                        <a @click.prevent="deleteCategory(category)" class="btn btn-danger btn-sm" href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductIndex',

        data() {
            return {
                categories: [],
            };
        },

        mounted() {
            this.getCategories()
        },

        methods: {
            getCategories(){
                axios.get('/api/categories').then((response)=>{
                    this.categories = response.data
                })
                .catch((error)=>{

                });
            },

            deleteCategory(category){
                axios.delete(`/api/categories/${category.id}`).then((response)=>{

                Toastr.success('Category Deleted Successfully');

                })

                let index = this.categories.indexOf(category);
                this.categories.splice(index, 1)
                .catch((error)=>{
                    console.log(error);
                })
            }
        },
    };

</script>

<style scoped>
    table,
    th,
    td {
        border-collapse: collapse;
        border: none;
    }
    th,td{
        padding-left: 15px;
    }

</style>
