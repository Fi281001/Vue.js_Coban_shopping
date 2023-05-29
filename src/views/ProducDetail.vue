<template>
    <div>
        <NavBar/>
    </div>
    <div class="product_detail">
        <div className="container py-5">
            <div className="row py-4">
                <div className="col-md-6 ">
             <img :src="product.img" style="height: 500px; width: 400px;"/>
                    </div>
                     <div className="col-md-6 mt-5">
                        <h3 className='text-uppercase text-black-50'>
                       <strong> Name: </strong>  {{ product.name }}
                        </h3>
                        <h4 className='display-6 fw-bold my-4'>
                            <strong> Price: </strong>  ${{ product.price }}
                        </h4>
                        <p className="lead">
                            <strong> Status: </strong>    {{ product.status }}
                        </p>
                        <button className="btn btn-outline-dark px-4 py-2" @click="addProduct(product)" >ADD TO CART</button>
                        <router-link to="/cart" class="btn btn-outline-dark ms-2 px-4 py-2">
                            Go to cart
                        </router-link>
                    </div> 
            </div>
        </div>
       
    </div>
</template>
<script>
 import NavBar from '../components/NavBar.vue'
 import { computed } from "vue";
  import { useStore } from "vuex"; export default {
    name: 'ProductDetail',
    components:{
        NavBar
    },
    data(){
        return {
            product: [],
        }
    },
    setup() {
      const store = useStore();
      function addProduct(p) {
        let cart = { ...p };
        console.log(">>>>>>",cart);
        // store.dispatch("addProduct", cart);
      }
      return {
        addProduct,
        cart: computed(() => store.getters.getCart),
        sum: computed(() => store.getters.getSum),
      };
    },
    created(){
      let productid = this.$route.params.id
      if(productid){
        this.getProduct(productid)
      }
    },
    methods:{
        getProduct(productid) {
          this.axios.get(`http://localhost:8000/book/${productid}`).then(
            (res) => {
              this.product = res.data
            }
          )
          },
        }
    }
</script>