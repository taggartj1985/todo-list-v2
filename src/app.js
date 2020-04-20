import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
    {todo: "Feed Dog", isPriority: false},
    {todo: "Play Games", isPriority: true},
    {todo: "Have A Beer", isPriority: false},
  ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        const taskToAdd= {
          todo: this.newTask,
          isPriority: false
        }
        this.tasks.push(taskToAdd);
        this.newTask = "";
      },
      highTask: function(index){
        this.tasks[index].isPriority = true;
      },

      lowTask: function(index){
        this.tasks[index].isPriority = false;
      }
    }
  });
});
