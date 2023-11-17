<template>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="getImage" :alt="title" class="img-fluid poster d-block">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
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
                flags:[
                  'en',
                  'es',
                  'fr',
                  'it',
                  'de'
                ],
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
  .flip-card {
  background-color: transparent;
  width: 300px;
  height: 450px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; 
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  // width: 100%;
  // height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  color: white;
  transform: rotateY(180deg);
}
</style>