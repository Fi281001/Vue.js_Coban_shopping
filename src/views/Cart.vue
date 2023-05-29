<template>
    <div>
        <NavBar/>
    </div>
    <div class="cart">
        <div class="mt-5 pt-5 container">
                    <div class="pb-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 bg-white rounded shadow-sm mb-5">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="p-2 px-3 text-uppercase">Sản Phẩm</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Đơn Giá</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Số Lượng</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Xóa</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(cart) in cart" :key="cart.id">
                                                    <th scope="row">
                                                        <div class="p-2">
                                                            <img src="" alt="" width="70" class="img-fluid rounded shadow-sm"/>
                                                            <div class="ml-3 d-inline-block align-middle">
                                                                <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">{{ cart.name }}</a></h5><span class="text-muted font-weight-normal font-italic"></span>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td class="align-middle"><strong>{{ cart.price }}</strong></td>
                                                    <td class="align-middle">
                                                        <a href="#"><button class="btnSub"  @click="decreaseQ(cart.id)"
                
                                                                            v-if="cart.quantity > 1">-</button></a> 
                                                        <strong> {{ cart.quantity }} </strong>
                                                        <a href="#"><button class="btnAdd"  @click="increaseQ(cart.id)"
                
                                                                    >+</button></a>
                                                    </td>
                                                    <td class="align-middle"><a href="#" class="text-dark">
                                                            <button type="button" class="btn btn-danger"  @click="removeProduct(cart.id)" >Delete</button>
                                                        </a>
                                                    </td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="row pb-5 p-4 bg-white rounded shadow-sm">

                            <div class="col-lg-6">
                                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Thành tiền  {{ total }}</div>
                                <div style="text-align: right; margin-top: 20px">
                                <button  class="btn btn-dark">Mua hàng</button>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
</template>
<script>
 import { computed } from "vue";
  import { useStore } from "vuex";
import NavBar from '../components/NavBar.vue'
   export default {

   name: 'product',
   components: {
   NavBar,
 },
 setup() {
      const store = useStore();
    //   function addProduct(p) {
    //     let cart = { ...p };
    //     console.log(">>>>>>",cart);
    //     store.dispatch("addProduct", cart);
    //   }
      function removeProduct(id) {
        console.log(">>>>>>",id);
        store.dispatch("removeProduct", id);
      }
      function increaseQ(id) {
        console.log(">>>>>>",id);
        store.dispatch("increase", id);
      }
      function decreaseQ(id) {
        console.log(">>>>>>",id);
        store.dispatch("decrease", id);
      }
  
      return {
       // addProduct,
        increaseQ,
        removeProduct,
        decreaseQ,
        cart: computed(() => store.getters.getCart),
        products: computed(() => store.getters.getProducts),
        total: computed(() => store.getters.getTotal),
        sum: computed(() => store.getters.getSum),

      };
    },
}
</script> 