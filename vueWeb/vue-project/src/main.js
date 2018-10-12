import Vue from 'vue'
// import App from './App.vue'
Vue.component('my-counter', {
  template: `
  <div>
    <h3>Ilość: {{ counter }}</h3>
    <button @click="add(1)">+1</button>
    <button @click="add(-1)">-1</button>
  </div>
  `,
  data: function(){
    return {
      counter: 0
    }
  },
  methods: {
    add: function(num) {
      this.counter+=(num)
    }
  }
})

new Vue({
  el: '#app',
  // render: h => h(App)
})