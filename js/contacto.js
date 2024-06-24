const btnMenuBurger = document.getElementById('btn-menu-burger')
const navBar = document.getElementById('nav-bar')
const btnEnviar = document.getElementById('btn-enviar')

btnMenuBurger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})


const validarCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.forms['form']
const nombre = form.txt_nombre
const apellido = form.txt_apellido
const correo = form.txt_correo
const mensaje = form.mensaje_cliente


btnEnviar.addEventListener('click', () => {
    if (nombre.value !== '' && apellido.value !== '' &&
        validarCorreo.test(correo.value) || correo.value !== '' && mensaje.value !== '') {
        alert('Mensaje Enviado con Exito')
        limpiar()
    } else {
        alert('Por favor complete todos los campos')
        if (nombre.value == '') {
            nombre.style.borderColor = 'red'
            nombre.focus()
        }
        if (apellido.value == '') {
            apellido.style.borderColor = 'red'
            apellido.focus()
        }
        if (validarCorreo.test(correo.value) || correo.value == '') {
            correo.style.borderColor = 'red'
            correo.focus()
        }
        if (mensaje.value == '') {
            mensaje.style.borderColor = 'red'
            mensaje.focus()
        }
    }
})

nombre.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (nombre.value.length > 0) {
        e.target.style.borderColor = 'green'
    }
})

apellido.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (apellido.value.length > 0) {
        e.target.style.borderColor = 'green'
    }
})

correo.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (validarCorreo.test(correo.value)) {
        e.target.style.borderColor = 'green'
    }
})

mensaje.addEventListener('input', (e) => {
    e.target.style.borderColor = ''
    if (mensaje.value.length > 0) {
        e.target.style.borderColor = 'green'
    }
})

function limpiar() {
    nombre.value = ''
    apellido.value = ''
    correo.value = ''
    mensaje.value = ''
    nombre.style.borderColor = ''
    apellido.style.borderColor = ''
    correo.style.borderColor = ''
    mensaje.style.borderColor = ''
}