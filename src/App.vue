<template>


  <MainComponent :movies="movie" :series="serie" />


</template>

<script>
import axios from 'axios'
import {store} from './data/store.js'
import MainComponent from './components/MainComponent.vue'
  export default {
    name: 'App',
    components:{
      MainComponent,
    },
    data(){
      return{
        movie: [],
        serie: []
      }
    },
    methods:{
      getMovies(){
      const movieurl = store.apiUrl + this.store.endPoint.movie;
      axios.get(movieurl, {params: this.store.params}).then((res)=>{
      console.log(res.data.results);
      store.movieList = res.data.results;
      });
      const tvurl = store.apiUrl + this.store.endPoint.series;
      axios.get(tvurl, {params: this.store.params}).then((res)=>{
      console.log(res.data.results);
      store.seriesList = res.data.results;
      });
    },
    created(){
      this.getMovies();
      this.getSeries();
    },
    
  }
}
</script>

<style lang="scss" scoped>

</style>