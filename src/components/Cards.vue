<template>
  <ul class="cards">
    <li v-for="(char, index) in chars" v-bind:key="index" class="card">
      <div 
        class="card-design" 
        :style="{
          'background-color': bgPalette.swatches[index%5], 
          'color': colorPalette.swatches[index%5]
        }"
      >{{char}}</div>
    </li>
  </ul> 
</template>

<script>
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
  data: () => ({

  })
  // methods: {
  //   checkContrast: function() {

  //   }
  // },
  // computed: {
  //   colorsMatrix: function () {
  //     let validMatches = []
  //     for (let color of colorPalette.swatches) {
  //       for (let bg of bgPalette.swatches) {
  //         if (checkContrast(color, bg) > 2) {
  //           validMatches.push({ color: color, bg: bg})
  //         }
  //       }
  //     }
  //     return validMatches
  //   }
  // }
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