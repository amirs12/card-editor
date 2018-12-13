<template>
  <div class="bg-menu">
    <div class="bg-menu-title">BG</div>
    <DropdownBox @applypalette="applyBgPalette($event)"/>
  </div>
</template>

<script>
import DropdownBox from '../common/DropdownBox.vue'

export default {
  name: 'BgMenu',
  components: {
    DropdownBox
  },
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
  font-size: 10px;
}
</style>