<script>
    import { store } from "../store.js"
    import AppFlag from "./AppFlag.vue";

    export default{
        name: 'AppMain',
        components: {
            AppFlag
        },
        data(){
            return {
                store,
            }
        }
    }
</script>

<template>
    <div class="container">
        <h2>Movies</h2>
        <div class=" d-flex overflow-scroll">
            <div v-if="store.movies.length === 0">Nessun risultato</div>
            <div class="m-2" v-for="movie in store.movies">
                <div class="card" style="width: 16rem; height: 400px;">
                    <img :src="'https://image.tmdb.org/t/p/w342' +  movie.backdrop_path" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <div>Titolo originale: {{ movie.original_title }}</div>
                        <AppFlag :language="movie.original_language"></AppFlag> 
                        <div>Voto: {{ movie.vote_average }}</div>

                    </div>
                </div>
            </div>
        </div>
        <h2>TVs</h2>
        <div class=" d-flex overflow-scroll">
            <div v-if="store.series.length === 0">Nessun risultato</div>
            <div class="m-2" v-for="serie in store.series">
                <div class="card" style="width: 16rem; height: 400px;">
                    <img :src="'https://image.tmdb.org/t/p/w342' +  serie.backdrop_path" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ serie.name }}</h5>
                        <div>Titolo originale: {{ serie.original_name }}</div>
                        <AppFlag :language="serie.original_language"></AppFlag>
                        <div>Voto: {{ serie.vote_average }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2{
    color: white;
}
.card{
    background-color: #3D3D3D;
    color: white;
}
</style>