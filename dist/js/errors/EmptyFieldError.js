class EmptyFieldError {
    #message = ''

    constructor(field) {
        if(!field instanceof String)
            throw new TypeError('Le paramètre field n\' est pas une chaine de caractère')

        this.#message = `Le champ ${field} est obligatoire`; //les antiquotes permettent d'interpréter des variable via ${var}
    }

    toString() {
        return this.#message;
    }
}