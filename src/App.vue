<template>
  <div id="app" class="app">
    <article class="card-editor-box">
      <div class="type-title">Type to create cards</div>
      <CharactersInput />
      <section class="menus-container">
        <ColorsMenu @applyColorPalette="applyColorPallete($event)" />
        <div>{{colorPalette.title}}</div>
        <BgMenu />
      </section>
      <section class="preview-box">
        <Cards />
      </section>
      <SaveButton />
    </article>  
  </div>
</template>

<script>
import CharactersInput from './components/CharactersInput.vue'
import ColorsMenu from './components/ColorsMenu.vue'
import BgMenu from './components/BgMenu.vue'
import Cards from './components/Cards.vue'
import SaveButton from './components/SaveButton.vue'

export default {
  name: 'app',
  components: {
    CharactersInput,
    ColorsMenu,
    BgMenu,
    Cards,
    SaveButton
  },
  data: () => ({
    colorPalette: {title: "text"}
  }),    
  methods: {
    applyColorPallete: function(palette) {
      this.colorPalette = palette;
    }
  }
}
</script>

<style>
.app {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: white;
}

.menus-container {
  width: 85%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
}

.preview-box {
  width: 85%;
}
</style>
