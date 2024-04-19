<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppResults from "./components/AppResults.vue";

export default{
  components: {
    AppHeader,
    AppResults
  },
  data () {
    return{
      store,
      queryParams: {
        api_key: store.api_key,
        query: store.filterInput
      }
    }
  },
  methods: {
    searchFromApi() {
      if (store.filterInput !== ""){
        this.queryParams.query = store.filterInput;
      } else {
        this.queryParams.query= "";
      };
      axios.get("https://api.themoviedb.org/3/search/movie?", { params: this.queryParams })
      .then((response) => {
        store.movies = response.data.results;
      });
      axios.get("https://api.themoviedb.org/3/search/tv?", { params: this.queryParams })
      .then((response) => {
        store.series = response.data.results;
      });
    },
  },
  
}

</script>

<template>
  <AppHeader @filterInput="searchFromApi"></AppHeader>
  <main>
    <AppResults></AppResults>
  </main>
</template>

<style lang="scss">
@use './style/generic';

</style>
