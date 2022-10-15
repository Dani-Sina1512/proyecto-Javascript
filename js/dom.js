const container = document.querySelector("main.container")
const carrito = []
const retornoCard = (producto)=> {
    return `<div class="card-product">
                <img class="card-product__imagen" src="${producto.imagen}"></img>
                <p class="card-product__leyend">${producto.nombre}</p>
                <p class="card-product__precio">$${producto.precio}</p>
                <button class="card-product__btn" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">AGREGAR AL CARRITO</button>
                </div>`
}

const activarBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll(".card-product__btn")
          botonesAdd.forEach(btn => {
            btn.addEventListener("click", ()=> {
                agregarAlCarrito(btn.id)
            })
          })
}

const cargarMisProductos = ()=> {
    if (container.innerHTML==null) return;
    container.innerHTML = ""
    productos.forEach(producto => {
        container.innerHTML += retornoCard(producto)
    })
    activarBotonesAdd()
    
}
cargarMisProductos()


const agregarAlCarrito = (producto)=> {
    let resultado = productos.find(prod => prod.nombre === producto)
        if (resultado !== undefined) {
            carrito.push(resultado)
            console.table(carrito)
        }
}