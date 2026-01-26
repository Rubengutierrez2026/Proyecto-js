
// BASE DE DATOS SIMULADA
let Nombre = "Adrian Gimenez"     
let dni = 30570778
let Banco = "Macro"
let Agencia ="Cobro ya"
let EstadoDeuda = "Deudor"
let MontoDeuda = 2000
let sinMonto = 0
// EL USUARIO INGRESA DNI QUE SE GUARDA EN VARIABLE 

let dniIngresado = parseInt (prompt("Ingrese el DNI del cliente:"))
console.log(dniIngresado)

// VALIDACION DE CLIENTE CON CONDICIONALES

   if (dni == dniIngresado){
    let resultado = Nombre 
    alert("Nombre de Cliente: " + Nombre)
   }else {
    alert("Cliente inexistente")
   }
 
 
// FUNCIONES
function montoDeuda(){
    let sinmonto =  sinMonto
    let monto = MontoDeuda 
    let resultadoDeuda =  (MontoDeuda + sinMonto)
    // console.log("Monto Adeudado: " + resultadoDeuda )
    alert("Monto Adeudado: " + resultadoDeuda)
}
montoDeuda()

function estadodeuda(){
   if ( MontoDeuda > 0){
    // console.log("Cliente con Deuda activa.!!!")
    alert("Cliente con Deuda activa.!!!")
   }else{
    // console.log("Cliente no registra Deuda.!!!")
    alert("Cliente no registra Deuda.!!!")
   }
}
estadodeuda()

 

    let menu = parseInt(prompt("Elija una opcion:  \n 1-Monto Deuda \n 2-Estado Deuda \n 3-Banco \n 4-Agencia \n 5-Salir"))

while(menu !== 5){
    switch(menu) {
        case 1:
          montoDeuda()
          break
        
        case 2:
          estadodeuda()
          break
          
        case 3:
          bancos()  
          break 
        
        case 4:
          agencia()
          break
          
        default:
          alert("Opcion incorrecta")  
         
       }
     menu = parseInt(prompt("Elija una opcion:  \n 1-Monto Deuda \n 2-Estado Deuda \n 3-Banco \n 4-Agencia \n 5-Salir"))

}   
        
     


const bancos = ["Macro","Galicia","Santander","Hbc"]
console.log(bancos)
 
const agencias =["Cobro ya","Credit","Asis","Cobromas"]
console.log(agencias)