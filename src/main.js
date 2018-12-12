import Vue from 'vue'
import App from './App.vue'
//import DropdownBox from './common/DropdownBox.vue'

Vue.config.productionTip = false

//Vue.component('dropdown-box', DropdownBox)

new Vue({
  render: h => h(App),
}).$mount('#app')
