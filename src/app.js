import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: ["Walk Dog", "Washing", "Play Games"],

      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }

    }
  });
});
