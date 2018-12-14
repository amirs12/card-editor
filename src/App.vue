<template>
  <div id="app" class="app">
    <article class="card-editor-box">
      <div class="type-title">Type to create cards</div>
      <CharactersInput 
        @applyCharChange="applyCharChange($event)" 
        :resetInput="resetOnSave"
      />
      <section class="menus-container">
        <ColorsMenu @applyColorPalette="applyColorPalette($event)" />
        <BgMenu @applyBgPalette="applyBgPalette($event)"/>
      </section>
      <span 
        class="no-preview"
        v-if="characters.length<1"
      >- No cards to preview yet -
      </span>
      <Success 
        v-if="isSuccessOpen === true" 
        :chars="characters"
        @closeSuccess="closeSuccessBox($event)"
      />
      <section class="preview-box">
        <Cards 
          v-if="isSuccessOpen === false"
          :chars="characters" 
          :colorPalette="colorPalette" 
          :bgPalette="bgPalette"
        />
      </section>
      <SaveButton 
        class="save-container" 
        :chars="characters" 
        v-if="characters.length>0 && isSuccessOpen === false"
        @successOpen="openSuccessBox($event)"
      />
    </article>  
  </div>
</template>

<script>
import CharactersInput from './components/CharactersInput.vue'
import ColorsMenu from './components/ColorsMenu.vue'
import BgMenu from './components/BgMenu.vue'
import Cards from './components/Cards.vue'
import SaveButton from './components/SaveButton.vue'
import Success from './components/Success.vue'

export default {
  name: 'app',
  components: {
    CharactersInput,
    ColorsMenu,
    BgMenu,
    Cards,
    SaveButton,
    Success
  },
  data: () => ({
    colorPalette: {
        title: "Black",
        swatches: ["#000000", "#000000", "#000000", "#000000", "#000000"]
      },
    bgPalette: {
        title: "Pastels",
        swatches: ["#FFF5F0", "#F5FAFF", "#E3D1E8", "#D1E8D3", "#FFFAE5"]
    },
    characters: [],
    isSuccessOpen: false,
    resetOnSave: false
  }),    
  methods: {
    applyColorPalette: function(palette) {
      this.colorPalette = palette;
    },
    applyBgPalette: function(palette) {
      this.bgPalette = palette;
    },
    applyCharChange: function(chars) {
      this.characters = chars;
    },
    openSuccessBox: function() {
      this.isSuccessOpen = true
    },
    closeSuccessBox: function() {
      this.isSuccessOpen = false
      this.resetOnSave = true
      document.querySelector('.input-field').value = ''
      this.characters = []
    }
  }
}
</script>

<style>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
}

.card-editor-box {
  width: 444px;
  height: 455px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4C4C4C;
  border-radius: 2%;
}

.type-title {
  margin: 16px 0px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: lighter;
  color: white;
}

.menus-container {
  width: 85%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  z-index: 1;
}

.no-preview {
  color: rgb(158, 155, 155);
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: 10px;
  position: relative;
  top: 24%;
}

.preview-box {
  width: 85%;
}

.save-container {
  position: relative;
  top: 56%;
}
</style>
