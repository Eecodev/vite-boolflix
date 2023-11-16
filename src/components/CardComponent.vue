<template>

    <div class="card bg-transparent" @click="toggleCard">
      <div v-if="front">
        <img :src="getImage" :alt="title" class="img-fluid poster d-block">
      </div>
    </div>


      <!-- <main>
      <section id="movie" class="container">
        <h2>Movies</h2>
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.movieList" :key="movie.id">
            {{ movie.title }}
            <img :src="'https://image.tmdb.org/t/p/w300' + movie.backdrop_path" alt="">
          </div>
        </div>
      </section>
      <section id="tv" class="container">
        <h2>Tv</h2>
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3" v-for="(serie, index) in store.seriesList" :key="serie.id">
            {{ serie.name }}
            <img :src="'https://image.tmdb.org/t/p/w300' + serie.backdrop_path" alt="">
          </div>
        </div>
      </section>
    </main> -->
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'MainComponent',
        props:[
          'title',
          'vote',
          'language',
          'image',
          'overview'
        ],
        data(){
            return{
                store,
                imgPath: 'https://image.tmdb.org/t/p/w342',
                front: true
            },
            
        },
        computed:{
          getVote: function(){
            return Math.ceil(this.vote /2);
          },
          getImage(){
            return this.imgPath + this.image;
          }
        },
        methods:{
          toggleCard(){
            this.front = !this.front;
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>