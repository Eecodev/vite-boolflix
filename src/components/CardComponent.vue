<template>
    <div class="card bg-transparent" @click="toggleCard">
      <div>
        <img :src="getImage" :alt="title" class="img-fluid poster d-block">
      </div>
    </div>
</template>

<script>
import {store} from '../data/store.js'
    export default {
        name: 'CardComponent',
        props:[
          'title',
          'vote',
          'language',
          'image',
          'overview'
        ],
        data() {
            return{
                store,
                imgPath: 'https://image.tmdb.org/t/p/w342',
                front: true
            }
            
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