export default {
    data() {
        return {
            redraw: true
        }
    },
    props: {
        todoList: { type: Array, required: true }
    },
    methods: {
        changeState(id) {
            let item = this.todoList.find(function(element) {
                return element.id === id;
            });

            item.check();
            this.redraw = !this.redraw;
        }
    },
    //:key permet de forcer la réactualisation lorsque l'attribut renseigné est modifié
    //:item permet de lier un objet à une props qui se nomme item dans le composant todo
    //l'attribut @change-state="changeState" va permettre d'exécuter la méthode changeState lorsque le composant
    //enfant va déclencher l'événement changeStage via la commande this.$emit('changeState', this.item.id);
    template: `<todo :item="todo" :key="redraw" v-for="todo in todoList" @change-state="changeState"></todo>`
}