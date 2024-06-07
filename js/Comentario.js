class Comentario {
    constructor(com, nombre, correo) {
        this._com = com
        this._nombre = nombre
        this._correo = correo
    }

    get com() {
        return this._com
    }

    set com(com) {
        this._com = com
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre
    }

    get correo() {
        return this._correo
    }

    set correo(correo) {
        this._correo = correo
    }
}