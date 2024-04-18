<script>

export default {
    name: 'AppRating',
    props: ["star"],
    data (){
        return {
            yellowStar: 0,
            whiteStar: 0
        }
    },
    methods: {
        getStar(rating){
            const half = rating / 2;
            this.yellowStar = Math.ceil(half.toFixed(1));
            this.whiteStar = 5 - this.yellowStar
        }
    },
}

</script>

<template>
    <div class="d-flex">
        <i v-for="stars in this.yellowStar" class="fa-solid fa-star yellow" v-if="getStar(this.star)"></i>
        <i v-for="stars in this.whiteStar" class="fa-solid fa-star white" v-if="getStar(this.star)"></i>
    </div>
</template>

<style scoped lang="scss">
   .yellow{
    color: yellow;
   }

   .white{
    color: white;
   }
</style>