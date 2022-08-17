 
const btnComprar = document.getElementById('btnComprar')
btnComprar.addEventListener("click", () => btnComprar.value='Gracias!')


const btnComprarEnter = document.getElementById("btnComprar");
btnComprarEnter.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnComprar").value='Gracias por el Enter!'
  }
});



