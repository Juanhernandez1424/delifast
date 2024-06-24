const listaComentarios = document.getElementById('cartas-valoracion')
const btnAgregarComentario = document.getElementById('enviar-comentario')
const btnMenuBurger = document.getElementById('btn-menu-burger')
const navBar = document.getElementById('nav-bar')

btnMenuBurger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

let comentarios = [
    new Comentario('Excelente servicio', 'Juan', 'prueba@prueba.com'),
    new Comentario('Excelentes precios', 'Juan', 'prueba@prueba.com'),
]

function mostrarComentarios() {
    let comentarioHTML = ''

    for (let comentario of comentarios) {
        comentarioHTML += crearComentario(comentario)
    }

    listaComentarios.innerHTML = comentarioHTML
}

function crearComentario(comentario) {
    let innerComentario =
        `<div class="carta">
            <h5>"${comentario.com}"</h5>
            <div class="usuario-carta">
                <p><b>${comentario.nombre}</b></p>
                <p>${comentario.correo}</p>
            </div>
        </div>`
    return innerComentario
}

let form = document.forms['form']
let nombre = form.txt_nombre
let correo = form.txt_correo
let com = form.txt_comentario

const validarCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnAgregarComentario.addEventListener('click', () => {

    if (nombre.value !== '' && validarCorreo.test(correo.value) !== '' && com.value !== '') {
        let comentario = new Comentario(com.value, nombre.value, correo.value)
        comentarios.push(comentario)
        mostrarComentarios()
        limpiar()
    } else {
        alert('Ingrese los datos')

        if (nombre.value === '') {
            nombre.style.borderColor = 'red'
            nombre.focus()
        }
        if (correo.value === '' || validarCorreo.test(correo.value)) {
            correo.style.borderColor = 'red'
            correo.focus()
        }
        if (com.value === '') {
            com.style.borderColor = 'red'
            com.focus()
        }
    }
})

nombre.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (nombre.value.length > 0) {
        e.target.style.borderColor = 'green'
    }
})

correo.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (validarCorreo.test(correo.value)) {
        e.target.style.borderColor = 'green'
    }
})

com.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (com.value.length > 0) {
        e.target.style.borderColor = 'green'
    }
})

function limpiar() {
    nombre.value = ''
    correo.value = ''
    com.value = ''
    nombre.style.borderColor = ''
    correo.style.borderColor = ''
    com.style.borderColor = ''
}