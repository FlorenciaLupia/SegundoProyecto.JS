
/*
let limite = parseInt(prompt("Ingrese un numero:"))

for (let i = 0; i < limite; i++) {
    console.log("Hola!", i)
}
*/

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
