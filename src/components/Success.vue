<template>
  <div class="success" v-on:click="saveCards()">
    <div class="close-success-box">
      <i class="fas fa-times" v-on:click="closeSuccess()"></i>
    </div>    
    <i class="fas fa-check-circle"></i>
    <span class="success-header">Success!</span>
    <span 
      class="success-text"
    >You have created {{chars.length}} new cards
    </span>
    <div class="success-ok" v-on:click="closeSuccess()">Ok</div>
  </div>
</template>

<script>
export default {
  name: 'Success',
  props: {
    chars: {
      required:true,
      type:Array
    }
  },
  data: () => ({
    shouldSuccessClose: false
  }),
  methods: {
    closeSuccess: function() {
      this.shouldSuccessClose = true
      this.$emit('closeSuccess', this.shouldSuccessClose)
    }
  }
}
</script>

<style>
.success {
  z-index: 2;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8%;
  border: solid 1px lightgray;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.close-success-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
}

.fa-times {
  margin-right: 3%;
  padding-top: 2%;
  color: #9FAAB6;
}

.fa-check-circle {
  margin-bottom: 4%;
  font-size: 40px;
  color: #6CD197;
}

.success-header {
  font-size: 20px;
  color: #4D4D4D;
  margin-bottom: 1%;
}

.success-text {
  color: #777575;
  font-size: 11px;
  margin-bottom: 10%;
}

.success-ok {
  width: 22%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8%;
  padding: 2% 0%;
  margin-bottom: 10%;
  background-color: #44A1EA;
  color: white;
  font-size: 7px;
}
</style>