<template>

  <HeaderComponent/>
  <MainComponent />


</template>

<script>
import axios from 'axios'
import {store} from './data/store.js'
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
  export default {
    name: 'App',
    components:{
      MainComponent,
      HeaderComponent
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getMoviesAndSeries(){
      console.log('get movies');
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
    }
    
    
  },
  created(){
      this.getMoviesAndSeries();
  },
}
</script>

<style lang="scss" scoped>

</style>