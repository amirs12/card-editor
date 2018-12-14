<template>
  <div class="bg-menu">
    <div class="bg-menu-title">BG</div>
    <DropdownBox 
      @applypalette="applyBgPalette($event)" 
      :palettes="palettes"
    />
  </div>
</template>

<script>
import DropdownBox from '../common/DropdownBox.vue'
import bgs from '../../bgs.json'

export default {
  name: 'BgMenu',
  components: {
    DropdownBox
  },
  data: () => ({
    palettes: bgs
  }),
  methods: {
    applyBgPalette: function(palette) {
      this.$emit('applyBgPalette', palette);
    }
  }
}
</script>

<style>
.bg-menu {
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 9px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>