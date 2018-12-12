<template>
  <div class="characters-input">
    <input 
      class="input-field" 
      v-model="chars" 
      type="text" 
      placeholder="Type one character or emoji per card"
    >
  </div>
</template>

<script>
export default {
  name: 'CharactersInput',
  data: () => ({
    chars: ''
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.characters-input {
  width: 85%;
  margin-bottom: 20px;
  border: solid 1px black;
}

.input-field {
  width: 98%;
  height: 44px;
  font-size: 20px;
}
</style>
