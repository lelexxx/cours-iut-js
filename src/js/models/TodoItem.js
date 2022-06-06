class TodoItem {
    id;
    label; //propriété privée
    done = false;

    constructor(id, label, done) {
        if (!label || label === '')
            throw new EmptyFieldError('label');

        this.id = id;
        this.label = label;
        this.done = done;
    }

    check() {
        this.done = true;

        return this; //une méthode est dite fluent quand elle retourne l'objet courant
    }
}