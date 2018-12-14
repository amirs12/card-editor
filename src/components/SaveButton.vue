<template>
  <div class="save-button" v-on:click="saveCards()">
    <span class="save-text">Add {{chars.length}} Cards</span>
  </div>
</template>

<script>
export default {
  name: 'SaveButton',
  props: {
    chars: {
      required:true,
      type:Array
    }
  },
  data: () => ({
    shouldSuccessOpen: false
  }),
  methods: {
    saveCards: function() {
      // console.log()
      this.shouldSuccessOpen = true
      this.$emit('successOpen', this.shouldSuccessOpen)
    }
  }
}
</script>

<style>
.save-button {
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
}

.save-text {
  width: 100%;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5EBF4D;
  color: white;
  border-radius: 8%;
  font-size: 6px;
  padding: 1%;
  font-family: Arial, Helvetica, sans-serif;
}
</style>