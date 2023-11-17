<template>

  <HeaderComponent @search="getMoviesAndSeries"/>
  <main>

    <section id="movie" class="container">
      <h2>Movies</h2>
      <div class="row gy-4">
        <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.movieList" :key="movie.id">
          <CardComponent :title="movie.title" :vote="movie.vote_average" :language="movie.original_language" :image="movie.poster_path" :overview="movie.overview" />
        </div>
      </div>
    </section>

    <section id="tv" class="container">
      <h2>Tv</h2>
      <div class="row gy-4">
        <div class="col-12 col-md-4 col-lg-3" v-for="(serie, index) in store.seriesList" :key="serie.id">
          <CardComponent :title="serie.title" :vote="serie.vote_average" :language="serie.original_language" :image="serie.poster_path" :overview="serie.overview" />
        </div>
      </div>
    </section>

  </main>
  


</template>

<script>
import axios from 'axios'
import {store} from './data/store.js'
import HeaderComponent from './components/HeaderComponent.vue'
import CardComponent from './components/CardComponent.vue'
  export default {
    name: 'App',
    components:{
      HeaderComponent,
      CardComponent
    },
    data(){
      return{
        store
      }
    },
    methods:{
        getMoviesAndSeries(){
        const movieUrl = this.store.apiUrl + this.store.endPoint.movie;
        axios.get(movieUrl, {params: this.store.params}).then((res)=>{
        console.log(res.data.results);
        this.store.movieList = res.data.results;
        });
        const tvUrl = store.apiUrl + this.store.endPoint.series;
        axios.get(tvUrl, {params: this.store.params}).then((res)=>{
        console.log(res.data.results);
        this.store.seriesList = res.data.results;
        });
      },

        getPopular() {
        const popularMovieUrl = this.store.apiUrl + '/trending/movie/day?language=en-US';
        axios.get(popularMovieUrl, { params: this.store.params }).then((res) => {
          console.log('popular movies: ', res.data.results);
          this.store.movieList = res.data.results;
        });
        const popularTvUrl = this.store.apiUrl + '/trending/tv/day?language=en-US';
        axios.get(popularTvUrl, { params: this.store.params }).then((res) => {
          console.log('popular series: ', res.data.results);
          this.store.seriesList = res.data.results;
        });
      }
    },
    computed(){
        this.getMoviesAndSeries();
        this.getPopular();
    },
    created(){
        this.getMoviesAndSeries();
        this.getPopular();
    },
  }
</script>

<style lang="scss" scoped>

</style>