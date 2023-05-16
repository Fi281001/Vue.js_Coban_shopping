<template>
  <div>
    <NavBar/>
  </div>
    <div class="product">
      <div class="container">
       <!-- load loại sản phẩm -->
  <div style="margin-top: 10px;display:flex;flex-wrap:wrap;">
    <button className="btn btn-outline-dark me-2 w-2" style="width: 58px;" @click="filterProduct(0)" >ALL</button>
    <div :key="index" v-for="(cate,index) in category">
      <button className="btn btn-outline-dark me-2" @click="filterProduct(cate.id)" >{{ cate.name }}</button>
    </div>
  </div>   
  <div style="display: flex;width: 500px;margin-top: 10px;">
    <select class="form-select"  style="margin-right: 10px;" v-model="selectedOption1" @change="Statusdata(selectedOption1)">
        <option value="">Tất cả</option>
        <option value="old">Old</option>
        <option value="new">New</option>
</select>
<select class="form-select" style="margin-right: 10px;" v-model="selectedOption2" @change="sortdata(selectedOption2)">
  <option value="">Tất cả</option>
  <option value="desc">Giảm</option>
  <option value="asc">Tăng</option>
</select>
  </div>
<h1>Products</h1>
        
<div style="display:flex;flex-wrap:wrap; margin-top: 20px;" >
  <!-- load sản danh sách sản phẩm -->
  <div :key="index" v-for="(product,index) in  products">
    <div class="container mt-3">
  <div class="card" style="width:300px">
    <img class="card-img-top" :src="product.img" alt="Card image" style="width:250px;height: 300px;margin-left: 18px;margin-top: 11px;">
    <div class="card-body">
      <h4 class="card-title"><strong>Price: </strong>{{ product.price }}$</h4>
      <p class="card-text"><strong>Status: </strong>{{ product.status }}</p>
      <p class="card-text"><strong>Name: </strong>{{product.name.substring(0,12)}}...</p>
      <router-link :to="{ name: 'product.detail' , params: {id: product.id}}"
      class="btn btn-outline-dark me-2">Buy Now</router-link>
    </div>
  </div>
</div>
</div>
</div>
<div class="text-center">
<div style="width: 235px;margin-top: 10px; margin-bottom: 20px;">
  <Pagination :currentPage="this.pagination._page" :totalPages="this.pagination.totalPages" @page-change="changePage" />
</div>
</div>
</div>
    </div>
  </template>
<script>
import NavBar from '../components/NavBar.vue'
import axios from 'axios'
import Pagination from '../components/Pagination.vue'
export default {
  name: 'ProductList',
  components: {
    NavBar,
    Pagination
  },
  data() {
    return {
      products: [],
      category: [],
      showproduct: [],
      pagination: {
        _limit: 4,
        _page: 1,
        totalPages: 0,
         categoryId: null,
        totalRows: 0,
        _sort: null,
        _order:null,
        status:null,
      },
      showPrevButton: true,
      selectedOption1: '',
      selectedOption2: ''
    }
  },
  created() {
    this.getProducts()
    this.getCategory()
  },
  methods: {
    
    getProducts() {
      const params = {
        _limit: this.pagination._limit,
        _page: this.pagination._page,
         categoryId:  this.pagination.categoryId,
        _order: this.pagination._order,
        _sort: this.pagination._sort,
        status: this.pagination.status,
      };

      axios.get(`http://localhost:8000/book`, { params })
        .then(response => {
          this.products = response.data;
          this.pagination.totalRows = Number(response.headers['x-total-count']);
          this.pagination.totalPages = Math.ceil(this.pagination.totalRows / this.pagination._limit);
          
        })
        .catch(error => {
          console.error(error);
        });
    },
    getCategory() {
      axios.get("http://localhost:8000/categories")
        .then(res => {
          this.category = res.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    filterProduct(id) {
    
      if (id === 0) {
      this.pagination.categoryId =null; // Đặt categoryId thành null để lấy tất cả sản phẩm
      this.getProducts();
       } else {
      this.pagination.categoryId = id;
      console.log("sss",this.pagination.categoryId);
      this.pagination._page = 1;
      this.getProducts();
    }
    },
    Statusdata(selectedOption1){
      if (selectedOption1 === 'new') {
            this.pagination.status = "new";
          this.pagination._page = 1;
          this.getProducts();
    } else if (selectedOption1 === 'old') {
        this.pagination.status = "old";
          this.pagination._page = 1;
          this.getProducts();
    }else if(selectedOption1 === ""){
      this.pagination.status =null;
      this.getProducts();
    }
    },
    sortdata(selectedOption2){
      if (selectedOption2 === 'desc') {
            this.pagination._sort = "price";
          this.pagination._order ="desc";
          this.pagination._page = 1;
          this.getProducts();
    } else if (selectedOption2 === 'asc') {
        this.pagination._sort = "price";
          this.pagination._order ="asc";
          this.pagination._page = 1;
          this.getProducts();
    }else if(selectedOption2 === ""){
      this.pagination._sort =null;
      this.pagination._order =null;
      this.getProducts();
    }
    },

    changePage(page) {
      this.pagination._page = page;
      this.getProducts();
    }
  
  }
}
</script>