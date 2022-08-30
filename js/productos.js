const containerDiv = document.querySelector(".containerDiv");
const carritoDiv = document.querySelector(".carritoDiv");
const totalProducto = document.querySelector(".totalProducto")
const formulario = document.querySelector(".formulario")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarProducto(){
    productos.forEach((producto) => {
    containerDiv.innerHTML += `<div>
                              <h3 class="tituloProducto">${producto.nombre}</h3>
                              <p class="importe">$${producto.importe}</p>
                              <img src="${producto.imagen}" class="img-fluid imagenes">
                              <button id="btnAgregar${producto.id}">Comprar</button>
                          </div `;
    });

    agregarFuncionalidad ()
}

function agregarFuncionalidad(){
    productos.forEach((producto) => {
        document
        .querySelector(`#btnAgregar${producto.id}`)
        .addEventListener("click", () => {
          console.log(producto);
          agregarAlCarrito(producto);
        });
    });
}

function agregarAlCarrito(producto){
    let existe = carrito.some((productoSome) => productoSome.id === producto.id);
    let productoFind = carrito.find(productoFind => productoFind.id === producto.id);

    existe === false ?  (producto.cantidad = 1, carrito.push(producto)) : (productoFind.cantidad ++);

    console.log(carrito);
    entregarCarrito() 
}

function entregarCarrito() {
    carritoDiv.innerHTML="";
    let total = 0;
    

    carrito.forEach((producto) => {
        carritoDiv.innerHTML +=`<div class="row" >
                                   <p class="col tituloProducto">${producto.nombre}</p>
                                   <p class="col importe">${producto.cantidad}</p>
                                   <p class="col precio">$${producto.cantidad * producto.importe}</p>
                                   <button class="col btn-borrar${producto.id}">Borrar</button>
                                </div> `;
        totalProducto.innerHTML = `<div class="totalProducto">
                                     <p>Total:$${total += parseInt(producto.importe) * parseInt(producto.cantidad)}</p>
                                   </div>`  
        formulario.innerHTML =   ` <div>
                                    <p>NOMBRE Y APELLIDO</p>
                                    <div><input type="text" name="name"></div>
                                    </div>
                                    <div>
                                    <p>EMAIL</p>
                                    <div><input type="text" name="email"></div>
                                    </div>
                                    <div>
                                    <p>DIRECCION</p>
                                    <div><input type="text" name="adress"></div>
                                    </div>
                                    <div>
                                    <button class="finalizar">FINALIZAR PEDIDO</button>
                                 </div> `                                           
    }); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
    borrarProducto()
}

function borrarProducto(){
    carrito.forEach((producto) => {
        document
        .querySelector(`.btn-borrar${producto.id}`)
        .addEventListener("click", () => {
          carrito = carrito.filter(
            (productoFilter) => productoFilter.id !== producto.id);
        entregarCarrito();
        });
    });
   
}
cargarProducto();
entregarCarrito();



