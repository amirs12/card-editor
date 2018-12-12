<template>
  <div class="colors-menu">
    <div class="colors-menu-title">Colors</div>
    <DropdownBox @applypalette="applyColorPalette($event)"/>
    <div>{{midP.title}}</div>
  </div>
</template>

<script>
import DropdownBox from '../common/DropdownBox.vue'

export default {
  name: 'ColorsMenu',
  components: {
    DropdownBox
  },
  data: () => ({
    midP: { title: 'mid' }
  }),
  methods: {
    applyColorPalette: function(palette) {
      this.midP = palette;
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
  font-size: 10px;
}
.colors-menu-title {
  margin-right: 9px;
}
</style>