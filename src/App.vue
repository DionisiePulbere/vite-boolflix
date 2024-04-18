<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from "./components/AppMain.vue";

export default{
  components: {
    AppHeader,
    AppMain
  },
  data () {
    return{
      store,
      queryParams: {
        api_key: "b29ad49f9f4acf1df60087fab4c6cceb",
        query: store.filterInput
      }
    }
  },
  methods: {
    searchFromApi() {
      if (store.filterInput !== ""){
        this.queryParams.query = store.filterInput;
      } else {
        this.queryParams.archetype = "";
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
    <AppMain></AppMain>
  </main>
</template>

<style lang="scss">
@use './style/generic';

</style>
