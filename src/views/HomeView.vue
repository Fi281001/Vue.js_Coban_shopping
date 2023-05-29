<template>
  <NavBar/>
  <div class="home">
    <img src="../assets/shopping.jpg" alt="error" style="height: 550px; width: 100%;"/>
  </div>
  <div class="container">
    <h1>Top 5</h1>
<div style="display:flex;flex-wrap:wrap; margin-top: 20px;" >
   <div :key="index" v-for="(product,index) in products"> -
    <div class="container mt-3">
  <div class="card" style="width:300px">
    <img class="card-img-top" :src="product.img" alt="Card image" style="width:250px;height: 300px;margin-left: 18px;margin-top: 11px;">
    <div class="card-body">
      <h4 class="card-title">{{ product.price }}$</h4>
      <p class="card-text">{{product.name.substring(0,12)}}...</p>
      <router-link :to="{ name: 'product.detail' , params: {id: product.id}}"
      class="btn btn-outline-dark me-2">Buy Now</router-link>
    </div>
  </div>
</div>
</div>
 </div> 
</div>
</template>
 <script>
 import NavBar from '../components/NavBar.vue'
    export default {
 
    name: 'product',
    components: {
    NavBar,
  },
    data(){
        return {
            products: [

            ]
        }
    },
    
    created(){
      this.getProducts()
    },
    methods:{
        getProducts() {
          this.axios.get("http://localhost:8000/book").then(
            (res) => {
              const sortedPeople = res.data.sort((a, b) => b.price - a.price); 
               const topFivePeople = sortedPeople.slice(0, 6);
              this.products = topFivePeople
            }
            
          ) 
         
          },
        
        }
    }
</script> 


