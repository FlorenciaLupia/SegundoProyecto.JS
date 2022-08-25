
/* Primer ejercicio complementario. 
let limite = parseInt(prompt("Ingrese un numero:"))

for (let i = 0; i < limite; i++) {
    console.log("Hola!", i)
}


let precio = parseInt(prompt("Precio del sillon:"))
let color = prompt("Blanco o Beige")
let masCaro = "Beige"

switch (color){
    case "Blanco":
        alert("Soy Blanco");
        break;
    case "Beige":
        alert("Soy Beige");
       break;
    default:
        alert("No hay stock.");
       break;   
}

    function calculoCuotas (num1, num2) {
        return num1 * num2
    }
    
    function calculoMasCaro (num1) {
        return num1 * "1.10"
    }
    
    let iva = "1.21"
    let calculo = calculoCuotas(precio, iva)
    
    if (color === masCaro) {
        console.log(calculoMasCaro(calculo))} 
        else {console.log(calculo)
    }

   let envio = confirm("Quiere envio gratis?")
   for (let i = envio; i === "true";) {
    alert(i); 
   }
*/

   const IVA = 1.21
   const sillones = ["Negro","Blanco","Gris", "Rosa"]

   class Producto {
    constructor(id,nombre, importe, imagen){
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.imagen = imagen
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}
   
   const productos = []
   const precio = []
   
   function generadorAutomatico() {
       productos.push(new Producto (1,"SILLON VIOLETA", 90000, "./img/sillon violeta.jpg"))
       productos.push(new Producto (2,"SILLON L", 180000, "./img/sillon en l.jpg"))
       productos.push(new Producto (3,"SILLON BIG L", 55000, "./img/sillon en l grande.jpg"))
       productos.push(new Producto (4,"SILLON BLANCO", 120000, "./img/sillon 3 cuerpos.jpg"))
       productos.push(new Producto (5,"SILLON UN CUERPO", 85000, "./img/sillon individual.jpg"))
       productos.push(new Producto (6,"SILLAS ROMANAS", 45000, "./img/sillas colores.jpg"))
       }
    generadorAutomatico()
    
      
  
   function recorrerElementos() {
          for (let producto of productos){console.table(producto)}
       }
   
      
    function filtrarProducto() {
        let prod = prompt("Ingrese el termino a buscar:")
        const resultado = productos.filter(elemento => elemento.nombre.includes(prod.toUpperCase()))
        console.table(resultado)
    }
  
    
    function buscarProductosNombre() {
        let prod = prompt("Ingrese el producto a buscar:")
            prod = prod.toUpperCase()
        const resultado = productos.find(elemento => elemento.nombre === prod)
        console.table(resultado)
    }

    function proyeccionIncremento (porcentaje) {
        let resultado = productos.map(producto => {
            return {
                nombre: producto.nombre,
                importe: producto.importe,
                proyeccion: producto.importe * 1.30
            }
        })
        console.table(resultado)

    }

   
   