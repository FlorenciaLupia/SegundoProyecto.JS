
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
   
   const productos =[]
   const precio = []
   
   function generadorAutomatico() {
       productos.push(new Producto(1234, "Sillon 3 cuerpos, Violeta", 90000))
       productos.push(new Producto(2345, "Sillon 2 cuerpos, Gris", 55000))
       productos.push(new Producto(3456, "Sillon L", 120999))
       productos.push(new Producto(4567, "Sillon Blanco", 120000))
       productos.push(new Producto(5678, "Sillon un cuerpo Flor", 45000))
       }
       function recorrerElementos() {
          for (let producto of productos){
           console.table(producto)
          }
       }
   
       class Producto {
           constructor(id, nombre, importe){
               this.id = id
               this.nombre = nombre
               this.importe = importe
           }
           precioFinal() {
               return parseFloat((this.importe * IVA).toFixed(2))
           }
       }
     