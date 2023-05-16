<template>
    <div style="display: flex; justify-content: space-around">
      <button class="btn btn-primary" :disabled="currentPage === 1" @click="prevPage()">Prev</button>
      <button class="btn btn-primary" disabled>{{ currentPage }}</button>
      <button class="btn btn-primary" :disabled="currentPage === totalPages" @click="nextPage()">Next</button>
    </div>
  </template>

  <script>
  export default {
    name: 'Pagination',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      nextPage() {
        this.$emit('page-change', this.currentPage + 1);
      },
      prevPage() {
        this.$emit('page-change', this.currentPage - 1);
      }
    }
  }
  </script>