<template>
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
                        <button className="btn btn-outline-dark px-4 py-2" >ADD TO CART</button>
                        <router-link to="/cart" class="btn btn-outline-dark ms-2 px-4 py-2">
                            Go to cart
                        </router-link>
                    </div> 
            </div>
        </div>
       
    </div>
</template>
<script>
 export default {
    name: 'ProductDetail',
    data(){
        return {
            product: [],
        }
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