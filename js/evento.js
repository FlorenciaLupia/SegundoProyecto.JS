 
const btnComprar = document.querySelectorAll('#btnComprar')
btnComprar.forEach(element =>  {
  element.addEventListener('mousemove', () => {
    element.title = 'Solo para Gran.BsAs!'
  })
})

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



