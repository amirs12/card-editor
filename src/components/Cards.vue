<template>
  <div class="cards">
   
  </div>
</template>

<script>
import CharactersInput from './CharactersInput.vue'

export default {
  name: 'Cards',
  components: {
    CharactersInput
  }
}
</script>

<style>
.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>