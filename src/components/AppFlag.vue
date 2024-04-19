<script>

export default {
    name: 'AppFlag',
    props: ["media"],
    data (){
        return {
            supportedFlags: [
                'it',
                'en',
                'fr',
                'es',
                'zh',
                'cn',
                'pt',
                'ru',
                'de',
                'ja'

            ]
        };
    },
    methods: {
            // getFlag(language){
            //     store.flags.forEach((flag) => {
            //         if (flag.language === language){
            //             this.flagMovie = "";
            //             this.flagMovie = flag.emoji;
            //         } 
            //     })
            // },
            getFlagUrl(){
                let flagImageName = this.media.original_language + '.png';
                // if (this.movie.orifinal_language === 'en') {
                //     flgaImageName = "uk.png"
                // } else if (this.movie.original_language === 'it') {
                //     flgaImageName = "it.png"
                // } else if (this.movie.original_language === 'fr') {
                //     flgaImageName = "fr.png"
                // }

                return new URL(`../assets/img/${flagImageName}`, import.meta.url).href;
            }
        }
}

</script>

<template>
    <div>Lingua: <img v-if="supportedFlags.includes(media.original_language)" :src="getFlagUrl()" alt="">
        <span v-else>{{ media.original_language }}</span>
    </div>
</template>

<style scoped lang="scss">
img{
    width: 30px;
}
   
</style>