<template>
  <div class="save-button">
   
  </div>
</template>

<script>
import CharactersInput from './CharactersInput.vue'

export default {
  name: 'SaveButton',
  components: {
    CharactersInput
  }
}
</script>

<style>
.save-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>