<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <h1>Boolflix</h1>
            </div>
            <div>
                <input type="text" v-model="store.params.query" :keyup.enter="$emit('search')">
                <button>Search</button>
            </div>
        </div>
    </header>
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'HeaderComponent',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        background-color: black;
    }
    h1{
        color: red;
    }
</style>