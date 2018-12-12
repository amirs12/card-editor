<template>
  <ul class="cards">
    <li v-for="(card, index) in cards" v-bind:key="index" class="card">
      <div 
        class="card-design" 
        :style="{'background-color': card.bg, 'color': card.color}"
      >{{card.char}}</div>
    </li>
  </ul> 
</template>

<script>
export default {
  name: 'Cards',
  data: () => ({
    cards: [
      {
        bg: 'yellow',
        color: 'black',
        char: 'A'
      },
      {
        bg: 'white',
        color: 'blue',
        char: 'A'
      },
      {
        bg: 'white',
        color: 'blue',
        char: 'A'
      },
      {
        bg: 'white',
        color: 'blue',
        char: 'A'
      },
      {
        bg: 'white',
        color: 'blue',
        char: 'A'
      },
      {
        bg: 'white',
        color: 'blue',
        char: 'A'
      },
      {
        bg: 'pink',
        color: 'red',
        char: '%'
      },
      {
        bg: 'white',
        color: 'black',
        char: 'B'
      }
    ]
  })
}
</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.card {
  width: 21%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  border: solid 1px black;
  background-color: white;
}

.card-design {
  width: 88%;
  height: 88%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>