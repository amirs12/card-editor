<template>
    <ul class="swatch">
      <li v-for="(swatch, index) in swatches" v-bind:key="index" class="swatch-color">
        <div class="swatch-color" :style="{'background-color': swatch}"></div>
      </li>
    </ul> 
</template>

<script>
export default {
  name: 'Swatch',
  props: ['swatches']
}
</script>

<style>
.swatch {
  display: flex;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.swatch-color {
  height: 2px;
  width: 100%;
  display: block;
}
</style>