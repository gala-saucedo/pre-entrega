const nombreDelUsuario = prompt ("ingrese su primer nombre")

alert (`bienvenido a nuestro ecommerce ${nombreDelUsuario}`)

let ropa = prompt (`que desa comprar? ingrese la palabra Remera o Pantalon`)

if (ropa == "remera") {

    let compra = confirm ("usted eligio la opcion remera. Su valor es de $3000. Desea comprar este articulo? ")

    if (compra == true){
        const direccion = prompt ("ingrese su direccion para poder realizar el envio del pedido")
        confirm (`su articulo sera enviado a ${direccion}`)
        alert (`Muchas gracias por su compra`)
    }
    else if (compra == false) {
        alert ("gracias por su visita")
    }

} else if (ropa == "pantalon") {

    let compra = confirm ("usted eligio la opcion pantalon. Su valor es de $8000. desea comprar este articulo?")
    if (compra == true) {
        const direccion = prompt (`ingrese su direccion para poder realizar el envio del pedido`)
        confirm (`su articulo sera enviado a ${direccion}`)
        alert ("Muchas garcias por su compra")
    }
    else if (compra == false) {
        alert ("gracias por su visita")
    }
 }