const btnMenuBurger = document.getElementById('btn-menu-burger')
const navBar = document.getElementById('nav-bar')
const btnConocerMenu = document.getElementById('envio-menu')

// Método para mostrar el menú en responsive
btnMenuBurger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

// Función para poder enviar la página a menú
btnConocerMenu.addEventListener('click', () => {
    window.location.href = "../html/menu.html"
})