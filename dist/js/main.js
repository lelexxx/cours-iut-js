//Import des différents composants VueJS
import TodoList from '/view/components/TodoList.js';
import Todo from '/view/components/Todo.js';

Vue.createApp({
        created() {
            document.title = Constant.TITLE; //Initialisation de la base <title> à la création de l'application
        },
        data() {
            return {
                todoList: this.getTodoList(),
                title: Constant.TITLE
            }
        },
        computed: {
            getNbTodo() {
                return this.todoList.length;
            }
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