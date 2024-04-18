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
    <header>
        <div class="container py-3 d-flex justify-content-between">
            <div class="logo">
                <h1>Boolify</h1>
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
    }

    input{
        width: 300px;
    }
</style>