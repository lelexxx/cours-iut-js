import TodoList from '/view/components/TodoList.js';
import Todo from '/view/components/Todo.js';

Vue.createApp({
        data() {
            return {
                todoList: this.getTodoList(),
                title: Constant.TITLE
            }
        },
        computed: {

        },
        methods: {
            getTodoList() {
                let todolistJson = JSON.parse(Constant.TODOLIST);
                this.todoList = []; //initialisation d'un tableau vide

                todolistJson.forEach(element => {
                    this.todoList.push(new TodoItem(element.id, element.label, element.done));
                });

                console.log(this.todoList);
                return this.todoList;
            }
        }
    })
    .component('TodoList', TodoList)
    .component('Todo', Todo)
    .mount('#app');