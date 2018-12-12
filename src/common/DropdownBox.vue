<template>
  <div class="dropdown-box">
    <div class="selected-li-container">
      <div class="selected-li" v-on:click="openDropOptions()">
        {{selectedPalette.title}}
        <i class="fas fa-caret-down"></i>
      </div>
      <Swatch :swatches="selectedPalette.swatches"/>
    </div>  
    <ul class="palettes" v-if="isMenuOpen === true">
      <li 
        v-for="(palette, index) in palettes" 
        v-bind:key="index"
        @click="selectPalette(palette)"
      >
        <div class="palette-title">{{palette.title}}</div>
        <Swatch :swatches="palette.swatches"/>
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
    isMenuOpen: false,
    selectedPalette: {
      title: "Dark Greys",
      swatches: ["#111111", "#171717", "#222222", "#282828", "#333333"]
    },
    palettes: [
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
  }),
  methods: {
    openDropOptions() {
      this.isMenuOpen = true;
    },

    selectPalette(palette) {
      this.selectedPalette = palette;
      this.isMenuOpen = false;
      this.$emit('applypalette', palette)
    }
  }
}
</script>

<style>
.dropdown-box {
  width: 81%;
  height: 100%;
  background-color: white;
  border: solid 1px black;
}

.selected-li-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
}

.selected-li {
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
  padding-left: 10px;
  font-size: 10px;
  color: black;
}

.fa-caret-down {
  padding-right: 8px;
  font-size: 0.9rem;
}

.palettes {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  font-size: 10px;
  color: black;
  background-color: white;
  border: solid 1px black;
}

.palettes>li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
}

.palette-title {
  padding-top: 6px;
  padding-left: 10px;
}
</style>