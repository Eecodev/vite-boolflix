<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center p-2">
            <a href="/">
                <h1>Boolflix</h1>
            </a>
            <div>
                <input type="text" v-model="store.params.query" :keyup.enter="$emit('search')">
                <button @click="$emit('search')">Search</button>
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
                store,
                textInput: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        background-color: black;
    }
    a{
        text-decoration: none;
    }
    h1{
        text-transform: uppercase;
        color: red;
    }
</style>