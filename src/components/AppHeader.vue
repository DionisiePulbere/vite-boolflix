<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data (){
        return {
            store
        }
    }
}

</script>

<template>
    <header class="position-sticky top-0 start-0">
        <div class=" container py-3 d-flex justify-content-between">
            <div class="logo">
                <h1>Boolflix</h1>
            </div>
            <div class="serch-bar d-flex">
                <input v-model="store.filterInput" class="ps-3" type="text" placeholder="Cerca qualcosa da vedere">
                <button @click="$emit('filterInput')" class="btn btn-secondary ms-4">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    h1{
        color: red;
        text-transform: uppercase;
    }

    header{
        background-color: black;
        color: white;
        z-index: 20;
    }

    input{
        width: 300px;
    }
</style>