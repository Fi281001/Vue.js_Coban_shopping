<template>
  <NavBar/>
  
  <router-view/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'NarBar',
  components: {
    NavBar,
  }
}
</script>

