const btnMenuBurger = document.getElementById('btn-menu-burger')
const navBar = document.getElementById('nav-bar')
const btnConocerMenu = document.getElementById('envio-menu')

btnMenuBurger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

btnConocerMenu.addEventListener('click', () => {
    window.location.href = "/html/menu.html"
})