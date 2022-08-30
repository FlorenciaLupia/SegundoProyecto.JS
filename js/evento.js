 
const btnComprar = document.querySelectorAll('#btnComprar')
btnComprar.forEach(element =>  {
  element.addEventListener('mousemove', () => {
    element.title = 'Solo para Gran.BsAs!'
  })
})

const btnFinalizarCompra = document.querySelector(".finalizar")
  function finalizarCompra() {
      btnFinalizarCompra.addEventListener("click", () => {
       alert(`Muchas gracias por tu compra`)
       console.log(btnFinalizarCompra,"elboton")
      })
    }
   
    finalizarCompra()