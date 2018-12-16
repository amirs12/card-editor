<template>
  <form class="characters-input">
    <input 
      class="input-field" 
      v-model="chars" 
      type="text"
      emoji
      placeholder="Type one character or emoji per card" 
      v-on:input="charsChangeHandler(chars)"
      data-emojiable="true"
    >
  </form>
</template>

<script>
export default {
  name: 'CharactersInput',
  data: () => ({
    currentChars: '',
    previousChars: '',
    delta: '',
    currentDeltas: []
//    previousDeltas: []
  }),
  methods: {
    charsChangeHandler: function(chars) {
      this.previousChars = this.currentChars
      this.currentChars = chars.replace(/\s/g,'')
      if (this.currentChars.length === 0) {
        this.previousChars = ''
        this.currentDeltas = []
        this.delta = ''
        this.$emit('applyCharChange', this.currentDeltas)
      }
      if (this.currentChars.length > this.previousChars.length) {
        this.delta = this.currentChars.substring(this.previousChars.length)
        if (this.currentDeltas.indexOf(this.delta) < 0) {
          this.currentDeltas.push(this.delta)
          this.$emit('applyCharChange', this.currentDeltas)
        }
      } else if (this.currentChars.length < this.previousChars.length){
        this.delta = this.previousChars.substring(this.currentChars.length)
        if (this.currentChars.indexOf(this.delta) < 0) {
//          let filteredDeltas = this.currentDeltas.fliter(delta => (this.delta !== delta))
//          this.currentDeltas = filteredDeltas
          this.currentDeltas.pop()
          this.$emit('applyCharChange', this.currentDeltas)
        }  
      }
    }
  }
}
</script>

<style>
.characters-input {
  width: 85%;
  margin-bottom: 24px;
  border-bottom: solid 1px black;
}

.input-field {
  width: 98%;
  height: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 8px;
  padding-left: 8px;
}

.input-field::placeholder {
  color: rgb(203, 203, 203, 0.8);
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 1px;
}

.input-field:focus { 
  background-color: rgb(240, 240, 240)
}
</style>
