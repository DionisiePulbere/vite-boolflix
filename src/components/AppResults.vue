<script>
    import { store } from "../store.js"
    import AppFlag from "./AppFlag.vue";
    import AppRating from "./AppRating.vue";

    export default{
        name: 'AppResults',
        components: {
            AppFlag,
            AppRating
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
        <div class="d-flex overflow-scroll">
            <div v-if="store.movies.length === 0">Nessun risultato</div>
            <div class="m-2 " v-for="movie in store.movies" key="movie.id" >
                <div class="card-container">
                    <div class="card ">
                        <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w342' +  movie.poster_path" class="card-img-top" alt="...">
                        <img v-else src="https://www.ilregnodelcinema.com/cvu/modules/img_switcher.php?idfilm=44406&type=446&ext=jpg" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <div>Titolo originale: {{ movie.original_title }}</div>
                        <AppFlag :media="movie"></AppFlag> 
                        <AppRating :star="movie.vote_average"></AppRating>
                    </div>
                </div>
            </div>
        </div>
        <h2>TVs</h2>
        <div class="d-flex overflow-scroll">
            <div v-if="store.series.length === 0">Nessun risultato</div>
            <div class="m-2" v-for="serie in store.series">
                <div class="card-container">
                    <div class="card" >
                        <img v-if="serie.poster_path" :src="'https://image.tmdb.org/t/p/w342' +  serie.poster_path" class="card-img-top" alt="...">
                        <img v-else src="https://www.ilregnodelcinema.com/cvu/modules/img_switcher.php?idfilm=44406&type=446&ext=jpg" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ serie.name }}</h5>
                        <div>Titolo originale: {{ serie.original_name }}</div>
                        <AppFlag :media="serie"></AppFlag>
                        <AppRating :star="serie.vote_average"></AppRating>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
 .card-body{
        border: 1px solid gray;
        color: white;
        height: 100%;
        border-radius: 10px;
    }
.card-container{
    position: relative;
    height: 340px;
    width: 260px;
    overflow-y: hidden;
   
    .card{
        background-color: #3D3D3D;
        color: white;
        position: absolute;
        
        img{
            width: 100%;
        }
        
    }
    &:hover img{
        display: none;
    }
    &hover .card-body{
        display: block;
    }  
}
h2{
    color: white;
}

</style>