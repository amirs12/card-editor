<template>
  <div class="dropdown-box">
    <div class="selected-li">Light Neutrals</div>
    <ul class="palletes">
      <li v-for="(pallete, index) in palletes" v-bind:key="index">
        <div class="pallete-title">{{pallete.title}}</div>
        <Swatch :swatches="pallete.swatches"/>
      </li>
    </ul> 
  </div>
</template>

<script>
import Swatch from './Swatch.vue'

export default {
  name: 'DropdownBox',
  components: {
    Swatch
  },
  data: () => ({
    palletes: [
      {
        title: "Light Neutrals",
        swatches: ["#F2F2F2", "#DFDFDF", "#EDF0FF", "#FFF0E5", "#FFEEEE"]
      },
      {
        title: "Light Greys",
        swatches: ["#EDEDED", "#F1F1F1", "#F4F4F4", "#F7F7F7", "#FAFAFA"]
      },
      {
        title: "Dark Greys",
        swatches: ["#111111", "#171717", "#222222", "#282828", "#333333"]
      },
      {
        title: "White",
        swatches: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      },
      {
        title: "Black",
        swatches: ["#000000", "#000000", "#000000", "#000000", "#000000"]
      },
      {
        title: "Pastels",
        swatches: ["#FFF5F0", "#F5FAFF", "#E3D1E8", "#D1E8D3", "#FFFAE5"]
      }
    ]
  })
}
</script>

<style>
.dropdown-box {
  width: 81%;
  height: 100%;
  background-color: white;
  border: solid 1px black;
}

.selected-li {
  padding-top: 6px;
  padding-left: 10px;
  font-size: 10px;
  color: black;
}

.palletes {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  font-size: 10px;
  color: black;
  background-color: white;
  border: solid 1px black;
  display: none;
}

.palletes>li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
}

.pallete-title {
  padding-top: 6px;
  padding-left: 10px;
}

.dropdown-box:hover .palletes {
    display: block;
}

.dropdown-box:hover .selected-li {
    display: none;
}
</style>