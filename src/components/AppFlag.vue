<script>
import { store } from '../store.js';

export default {
    name: 'AppFlag',
    props: ["language"],
    data (){
        return {
            store,
            flagMovie: ""
        }
    },
    methods: {
            getFlag(language){
                store.flags.forEach((flag) => {
                    if (flag.language.includes(language)){
                        this.flagMovie = "";
                        this.flagMovie = flag.emoji;
                    } 
                })
            }
        },
        mounted(){
            this.getFlag(this.language)
        }
}

</script>

<template>
<div>Lingua: {{ flagMovie !== "" ? flagMovie : store.movies.original_language  }}</div>
</template>

<style scoped lang="scss">
   
</style>