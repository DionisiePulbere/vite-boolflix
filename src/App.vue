<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';

export default{
  components: {
    AppHeader,
  },
  data () {
    return{
      store,
      queryParams: {
        
      }
    }
  },
  methods: {
  },
  mounted() {
   
  }
}

</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss">
@use './style/generic'
</style>
