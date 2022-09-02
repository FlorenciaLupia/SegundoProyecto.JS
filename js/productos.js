const containerDiv = document.querySelector(".containerDiv");
const carritoDiv = document.querySelector(".carritoDiv");
const totalProducto = document.querySelector(".totalProducto")
const formulario = document.querySelector(".formulario")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


async function cargarProducto(){
  await fetch('js/productosfetch.json')
  .then((response) => response.json())
  .then(data => 
    data.forEach((producto) => {
    containerDiv.innerHTML += `<div>
                                <h3 class="tituloProducto">${producto.nombre}</h3>
                                <p class="importe">$${producto.importe}</p>
                                <img src="${producto.imagen}" class="img-fluid imagenes">
                                <button class="btnAgregar" id="btnAgregar${producto.id}">Comprar</button>
                               </div `;
  })  
    
  );
  agregarFuncionalidad ()
}

async function agregarFuncionalidad(){
  await fetch('js/productosfetch.json')
  .then((response) => response.json())
  .then(data => 
    data.forEach((producto) => {
        document
        .querySelector(`#btnAgregar${producto.id}`)
        .addEventListener("click", () => {
          agregarAlCarrito(producto);
            Toastify({
                  text: "Añadido al carrito",
                  duration: 3000,
                  newWindow: true,
                  close: true,
                  gravity: "botton", 
                  position: "right", 
                  stopOnFocus: true,
            style: {
              background: "#6f42c1",
            },
            onClick: function(){} 
          }).showToast();
        });
    })
  );
}

function agregarAlCarrito(producto){
    let existe = carrito.some((productoSome) => productoSome.id === producto.id);
    let productoFind = carrito.find(productoFind => productoFind.id === producto.id);

    existe === false ?  (producto.cantidad = 1, carrito.push(producto)) : (productoFind.cantidad ++);

    entregarCarrito() 
}

function entregarCarrito() {
    carritoDiv.innerHTML=`<div class="row">
                            <p class="col">Producto</p>
                            <p class="col">Cantidad</p>
                            <p class="col">Precio</p>
                            <p class="col">Eliminar</p>
                          </div> `;
    let total = 0;

        if (carrito.length > 0) {
        carrito.forEach((producto) => {
        carritoDiv.innerHTML +=`
        
                                <div class="row" >
                                   <p class="col tituloProducto">${producto.nombre}</p>
                                   <p class="col importe">${producto.cantidad}</p>
                                   <p class="col precio">$${producto.cantidad * producto.importe}</p>
                                   <button class="col Borrar btn-borrar${producto.id}">X</button>
                                </div> `;
         
         let calculoTotal = total += parseInt(producto.importe) * parseInt(producto.cantidad)
           
        totalProducto.innerHTML = `<div class="totalProducto">
                                     <p>Total:$${calculoTotal}</p>
                                   </div>`  
        formulario.innerHTML =   ` <div>
                                    <p>NOMBRE Y APELLIDO:</p>
                                    <div><input type="text" name="name"></div>
                                    </div>
                                    <div>
                                    <p>EMAIL:</p>
                                    <div><input type="text" name="email"></div>
                                    </div>
                                    <div>
                                    <p>DIRECCION:</p>
                                    <div><input type="text" name="adress"></div>
                                    </div>
                                    <div>
                                    <button class="finalizar">FINALIZAR PEDIDO</button>
                                 </div> `                                           
    }); 
    } else {
    carritoDiv.innerHTML = ``
    totalProducto.innerHTML = ``
    formulario.innerHTML = ``
}
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    borrarProducto()


    const btnFinalizarCompra = document.querySelector(".finalizar")
    if (btnFinalizarCompra) {btnFinalizarCompra.addEventListener("click", () => {
      toastSwal(`Su pedido entro correctamente. Te llegara toda la informacion por email`, `success`,`white`)
    })}

      const toastSwal = (mensaje, icono) => {
        Swal.fire({
          //toast: true,
          title: "Gracias por tu compra!",
          text: mensaje,
          imageUrl: `img/logodos.jpg`,
          imageAlt:  `imagen`,
          showConfirmButton: false, 
          timer: 4000,
          //icon: icono,
        })
      }
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



