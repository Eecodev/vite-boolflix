<template>

  <HeaderComponent @search="getMoviesAndSeries"/>
  <main>
    <section id="movie" class="container">
    
    </section>
    <section id="tv" class="container">
    
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
    }
    
    
  },
  created(){
      // this.getMoviesAndSeries();
  },
}
</script>

<style lang="scss" scoped>

</style>