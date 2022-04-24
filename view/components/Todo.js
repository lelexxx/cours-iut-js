export default {
    data() {
        return {}
    },
    props: {
        item: TodoItem
    },
    computed: {
        getClass() {
            if (this.item.done == true)
                return 'alert alert-success';

            return 'alert alert-danger';
        }
    },
    methods: {
        changeState: function() {
            //permet de faire remonter un event au composant parent
            //l'event sera écouté à l'appel du composant enfant via @change-state="function"
            this.$emit('changeState', this.item.id);
        }
    },
    //le template doit être placé entre des antiquote (backquote en anglais)
    //@click permet de lier une méthode à l'évènement click
    //:class permet de relier l'attribut HTML class à une méthode/computed
    template: `<div :class="getClass" @click="changeState">
                {{ item.label }}
               </div>`
}