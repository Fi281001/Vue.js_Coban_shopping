<template>
    <div style="display: flex; justify-content: space-between">
      <button style="margin-right: 10px;" class="btn btn-primary" :disabled="page === 1" @click="prevPage()">Prev</button>
      <button style="margin-inline: 5px;" v-for="pageNum in totalPages" :key="pageNum" :class="['btn', 'btn-primary', { 'disabled': pageNum === page}]" @click="goToPage(pageNum)">{{ pageNum }}</button>
      <button style="margin-left: 10px;" class="btn btn-primary" :disabled="page === totalPages" @click="nextPage()">Next</button>
    </div>
  </template>

  <script>
  export default {
    name: 'Pagination',
    props: {
      page: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
     goToPage(page) {
            this.$emit('page-change', page);
        },
      nextPage() {
        this.$emit('page-change', this.page + 1);
      },
      prevPage() {
        this.$emit('page-change', this.page - 1);
      }
    }
  }
  </script>