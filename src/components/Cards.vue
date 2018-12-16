<template>
  <ul class="cards">
    <li v-for="(char, index) in chars" v-bind:key="index" class="card">
      <div 
        class="card-design" 
        :style="{
          'background-color': colorsMatrix[index%colorsMatrix.length].bg, 
          'color': colorsMatrix[index%colorsMatrix.length].color
        }"
      >{{char}}</div>
    </li>
  </ul> 
</template>

<script>
import { hex } from 'wcag-contrast'

export default {
  name: 'Cards',
  props:{
    chars:{
      required:true,
      type:Array
    },
    colorPalette:{
      required:true,
      type:Object
    },
    bgPalette:{
      required:true,
      type:Object
    }
  },
  computed: {
    colorsMatrix: function() {
      let validColorMatches = []
      for (let shifter = 0; shifter < 5; shifter++) {
        for (let index = 0; index < 5; index++) {
          if (hex(this.colorPalette.swatches[index], this.bgPalette.swatches[(index+shifter)%5]) > 2) {
            validColorMatches.push({
              color: this.colorPalette.swatches[index],
              bg: this.bgPalette.swatches[(index+shifter)%5]
            })
          }
        }
      }
      return validColorMatches
    }
  }
}
</script>

<style>
.cards {
  width: 408px;
  height: 240px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  top: 227px;
  position: fixed;
  overflow: scroll;
}

.card {
  width: 20%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  margin-right: 14px;
  border: solid 1px black;
  background-color: white;
}

.card-design {
  width: 88%;
  height: 88%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Risque', cursive;
}
</style>