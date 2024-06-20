const tarjetas = document.getElementById('tarjetas');
const btnsHeader = document.querySelectorAll('.btn-header')
const btnVerTodos = document.getElementById('ver-todos')
console.log(btnsHeader)

const listaTarjetas = [
    {
        titulo: 'Hamburguesa Sencilla',
        descripcion: 'Jugosa carne de res, queso derretido, tocino crujiente, todo entre suaves panes brioche. ¡Una experiencia irresistible en cada bocado',
        precio: '45.000',
        image: '/img/front-img.jpg',
        categoria: 'burgers',
    },
    {
        titulo: 'Hamburguesa Doble',
        descripcion: 'Jugosa carne de res, queso derretido, tocino crujiente, todo entre suaves panes brioche. ¡Una experiencia irresistible en cada bocado',
        precio: '45.000',
        image: '/img/burger-doble.png',
        categoria: 'burgers',
    },
    {
        titulo: 'Pizza Peperoni',
        descripcion: 'Cada bocado es una explosión de sabores clásicos y frescos que te transportará a las calles de Nápoles.',
        precio: '50.000',
        image: '/img/pizza.png',
        categoria: 'pizzas'
    },
    {
        titulo: 'Pizza Champiñones',
        descripcion: 'Cada bocado es una explosión de sabores clásicos y frescos que te transportará a las calles de Nápoles.',
        precio: '50.000',
        image: '/img/pizza-champ.jpg',
        categoria: 'pizzas'
    },
    {
        titulo: 'Perro Caliente Sencillo',
        descripcion: '¡Cada mordisco es una explosión de sabor. ¡Una experiencia de comida rápida que no querrás perderte!',
        precio: '30.000',
        image: '/img/perro-caliente.png',
        categoria: 'perros-calientes',
    },
    {
        titulo: 'Perro Caliente Especial',
        descripcion: '¡Cada mordisco es una explosión de sabor. ¡Una experiencia de comida rápida que no querrás perderte!',
        precio: '30.000',
        image: '/img/perro-caliente.png',
        categoria: 'perros-calientes',
    },
    {
        titulo: 'Coca-Cola',
        descripcion: 'Refréscate con nuestras opciones de bebidas, preparadas con ingredientes frescos y de alta calidad, que te acompañarán en cada momento de tu visita.',
        precio: '5.000',
        image: '/img/coca-cola.jpg',
        categoria: 'bebidas',
    },
    {
        titulo: 'Cerveza',
        descripcion: 'Refréscate con nuestras opciones de bebidas, preparadas con ingredientes frescos y de alta calidad, que te acompañarán en cada momento de tu visita.',
        precio: '5.000',
        image: '/img/cerveza.jpg',
        categoria: 'bebidas',
    },
    {
        titulo: 'Guacamole',
        descripcion: 'Adición de guacamole',
        precio: '3.000',
        image: '/img/guacamole.jpg',
        categoria: 'adiciones',
    },
    {
        titulo: 'Tocineta',
        descripcion: 'Adición de Tocineta',
        precio: '4.000',
        image: '/img/tocineta.jpg',
        categoria: 'adiciones',
    },

]

function mostrarTarjetas(tarjeta) {
    const divTarjeta = document.createElement('div')
    divTarjeta.classList.add('tarjeta')
    divTarjeta.innerHTML = `
        <div class="tarjeta-rest" style="
          background: url(${tarjeta.image}) center;
          background-size: cover;
        ">
            <div class="wrap-text_tarjeta-rest">
              <h3>${tarjeta.titulo}</h3>
              <p>
                ${tarjeta.descripcion}
              </p>

              <div class="cta-wrap_tarjeta-rest">
                <div class="precio_tarjeta-rest">
                  <span>${tarjeta.precio}</span>
                </div>
              </div>
            </div>
        </div>`
    tarjetas.append(divTarjeta)
}

listaTarjetas.forEach(tarjeta => {
    mostrarTarjetas(tarjeta)
})

btnVerTodos.addEventListener('click', () => {
    tarjetas.innerHTML = ""
    listaTarjetas.forEach(tarjeta => {
        mostrarTarjetas(tarjeta)
    })
})

btnsHeader.forEach(btn => btn.addEventListener('click', (event) => {
    const btnId = event.currentTarget.id;
    tarjetas.innerHTML = ""
    listaTarjetas.forEach(tarjeta => {
        if (tarjeta.categoria === btnId) {
            mostrarTarjetas(tarjeta)
        }
    })
}))
