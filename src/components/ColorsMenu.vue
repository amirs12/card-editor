<template>
  <div class="colors-menu">
    <div class="colors-menu-title">Colors</div>
    <DropdownBox 
      @applypalette="applyColorPalette($event)"
      :palettes="palettes"
    />
  </div>
</template>

<script>
import DropdownBox from '../common/DropdownBox.vue'
import colors from '../../colors.json'
import bgs from '../../bgs.json'

export default {
  name: 'ColorsMenu',
  components: {
    DropdownBox
  },
  data: () => ({
    palettes: [...bgs, ...colors]
  }),
  methods: {
    applyColorPalette: function(palette) {
      this.$emit('applyColorPalette', palette);
    }
  }
}
</script>

<style>
.colors-menu {
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 9px;
  font-family: Arial, Helvetica, sans-serif;  
}
.colors-menu-title {
  margin-right: 9px;
}
</style>