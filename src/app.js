import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
    {todo: "Feed Dog", isComplete: false},
    {todo: "Play Games", isComplete: true},
    {todo: "Have A Beer", isComplete: false},
  ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        const taskToAdd= {
          todo: this.newTask,
          isComplete: false
        }
        this.tasks.push(taskToAdd);
        this.newTask = "";
      },
      finishTask: function(index){
        this.tasks[index].isComplete = true;
      }
    }
  });
});
