<script>
    import { store } from "../store.js"
    export default{
        name: 'AppMain',
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container d-flex flex-wrap">
        <div class="m-2" v-for="movie in store.movies">
            <div class="card" style="width: 16rem; height: 200px;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.title }}</h5>
                    <div>Titolo originale: {{ movie.original_title }}</div>
                    <div>Lingua: {{ movie.original_language }}</div>
                    <div>Voto: {{ movie.vote_average }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>