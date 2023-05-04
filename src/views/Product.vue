<template>
    <div class="product">
      <div class="container">
       <!-- load loại sản phẩm -->
  <div style="margin-top: 10px;display:flex;flex-wrap:wrap;">
    <button className="btn btn-outline-dark me-2" @click="fitterProduct(0)" >ALL</button>
    <div :key="index" v-for="(cate,index) in category">
      <button className="btn btn-outline-dark me-2" @click="fitterProduct(cate.id)" >{{ cate.name }}</button>
    </div>
  </div>   
        
<h1>Products</h1>
        
<div style="display:flex;flex-wrap:wrap; margin-top: 20px;" >
  <!-- load sản danh sách sản phẩm -->
  <div :key="index" v-for="(product,index) in  (showproduct.length > 0 ? showproduct : products)">
    <div class="container mt-3">
  <div class="card" style="width:300px">
    <img class="card-img-top" :src="product.img" alt="Card image" style="width:250px;height: 300px;margin-left: 18px;margin-top: 11px;">
    <div class="card-body">
      <h4 class="card-title"><strong>Price: </strong>{{ product.price }}$</h4>
      <p class="card-text"><strong>Name: </strong>{{product.name.substring(0,12)}}...</p>
      <router-link :to="{ name: 'product.detail' , params: {id: product.id}}"
      class="btn btn-outline-dark me-2">Buy Now</router-link>
    </div>
  </div>
</div>
</div>
</div>
<div style="margin-top: 10px; margin-bottom: 20px; text-align: center;">
  <div class="w3-bar">
      <button class="btn btn-outline-dark " style="margin-left: 10px;">Prev</button>
      <button class="btn btn-outline-dark ">Next</button>
</div>
</div>

</div>
    </div>
  </template>
<script>

    export default {
    name: 'ProductList',
  
    data(){
        return {
            products: [],
            category: [],
            showproduct:[],
        }
    },
    
    created(){
      this.getProducts(),
      this.getCategory()
    },
    methods:{

        getProducts() {
          this.axios.get("http://localhost:8000/book").then(
            (res) => {
              this.products = res.data
              console.log(this.products);
            }
          )
          },
        getCategory() {
          this.axios.get("http://localhost:8000/categories").then(
            (res) => {
              this.category = res.data
            }
          )
          },
  
       fitterProduct(id){
          this.showproduct = this.products.filter((product) => {
            return product.categoryId === id;
           });
       }  
        }
    }
</script>
