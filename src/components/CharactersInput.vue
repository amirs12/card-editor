<template>
  <div class="characters-input">
    <input 
      class="input-field" 
      v-model="chars" 
      type="text"
      emoji
      placeholder="Type one character or emoji per card" 
      v-on:input="charsChangeHandler(chars)"
      data-emojiable="true"
    >
  </div>
</template>

<script>
export default {
  name: 'CharactersInput',
  data: () => ({
    currentChars: '',
    previousChars: '',
    delta: '',
    deltasArray: []
  }),
  methods: {
    charsChangeHandler: function(chars) {
      this.previousChars = this.currentChars
      this.currentChars = chars.replace(/\s/g,'')
      if (this.currentChars.length > this.previousChars.length) {
        this.delta = this.currentChars.substring(this.previousChars.length)
        if (this.deltasArray.indexOf(this.delta) < 0) {
          this.deltasArray.push(this.delta)
          this.$emit('applyCharChange', this.deltasArray)
        }
      } else if (this.currentChars.length < this.previousChars.length){
        this.delta = this.previousChars.substring(this.currentChars.length)
        if (this.currentChars.indexOf(this.delta) < 0) {
          this.deltasArray.pop()
        }  
      }
    }
  }
}
</script>

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
