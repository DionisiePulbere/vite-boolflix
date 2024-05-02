<script>

export default {
    name: 'AppRating',
    props: ["star"],
    data (){
        return {
        }
    },
    methods: {
        getStar(){
            return Math.ceil(this.star.vote_average / 2);
                
        }
        
    },
    
}


</script>

<template>
    <div class="d-flex align-items-center">
        Voto:
        <div class="d-flex ms-1">
            <i v-for="n in getStar()" class="fa-solid fa-star yellow"></i>
            <i v-for="n in 5 - getStar()" class="fa-regular fa-star"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
   .yellow{
    color: yellow;
   }

</style>