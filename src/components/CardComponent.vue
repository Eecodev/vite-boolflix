<template>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="getImage" :alt="title" class="img-fluid poster d-block">
          </div>
          <div class="flip-card-back">
            <h3>{{title}}</h3>
            <p>
              <img :src="getFlag" :alt="language + ' flag'" class="flag">
            </p>
            <p>
              <i v-for="n in 5" :key="n" class="fa-star" :class="8n <= getVote ? 'fa-solid' : 'fa-regular'"></i>
            </p>
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
          getVote(){
            return Math.ceil(this.vote /2);
          },
          getFlag(){
            let flag = `/src/assets/images/${this.language}.png`;
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
.flip-card-inner {
  position: relative;
  // width: 100%;
  // height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}
.flip-card-back {

  color: black;
  transform: rotateY(180deg);
}
</style>