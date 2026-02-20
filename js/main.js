// Base de datos clientes 

class Cliente {
  static id = 0 
  constructor (dni,nombre,deuda,estado,banco,agencia) {
    this.id = ++ Cliente.id,
    this.dni = dni,
    this.nombre = nombre,
    this.deuda = deuda,
    this.estado = estado,
    this.banco = banco,
    this.agencia = agencia

  }

}

const clientes = []

const cargaClientes = () => {
  let cargaDni = parseInt(prompt("Ingrese el Numero de DNI: "))
  let cargaNombre = prompt("Cargue el nombre del Cliente: ")
  let cargaDeuda = parseInt(prompt( "Cargue el monto de la Deuda: "))
  let cargaEstado = prompt("Carga estado de la deuda: ")
  let cargaBanco = prompt("Carga banco emisor de la deuda: ")
  let cargaAgencia = prompt("Carga agencia de gestion de Deuda: ")

  const cliente = new Cliente(cargaDni , cargaNombre , cargaDeuda , cargaEstado ,  cargaBanco , cargaAgencia )

  clientes.push(cliente)
  
  // console.log (clientes)
  
}
// cargaClientes()

const verClientes = () =>{
  if(clientes.length == 0){
    alert("No hay clientes cargados")
  }else{
    console.log(clientes)
  }
}
// cargaClientes()

let menu = parseInt(prompt(" Elija una opcion para continuar: \n 1 para ver Cliente, \n 2 para cargar Cliente nuevo, \n 3 para salir"))
while( menu !== 3){
  switch(menu) {
    case 1:
      verClientes()
      break

    case 2:
      cargaClientes()
      break
  
    default:
      alert("Opcion Incorrecta")  


  }
  menu = parseInt(prompt(" Elija una opcion para continuar: \n 1 para ver Cliente, \n 2 para cargar Cliente nuevo, \n 3 para salir"))
}

Storage
localStorage.setItem("clientes", clientes)
const clientesJSON = JSON.stringify (clientes)
localStorage.setItem("clientes",clientesJSON)
// console.log(localStorage.getItem("clientes"))

const clientes1 = JSON.parse(localStorage.getItem(clientes))
console.log(clientes1)

// ForEach devuelve nombre y monto adeudado
clientes.forEach(cliente => {
  console.log("Sr/Sra: "+cliente.nombre + "," + "El monto de la deuda es:$"+cliente.deuda)
})


let buscarAgencia = prompt("Ingrese el nombre de la agencia a Buscar: ")
const filtro = clientes.filter (cliente =>cliente.agencia == buscarAgencia)

// console.log(filtro)

// Total de la deudade la base de datos
const total = clientes.reduce((contador , Cliente)=> contador + Cliente.deuda, 0)
console.log("Deuda total de la base de datos:$" +total)


let titulo = document.getElementById("title")
console.log(titulo)
titulo.innerText = "Informes de Clientes "

let clients = document.getElementById ("clientes")

clientes.forEach(cliente =>{
  let card = document.createElement("div")
  card.className = "card"
  card.innerHTML = `<span> ID: ${cliente.id}</span>
                    <h2 class ="card-client"> DNI: Nº${cliente.dni} </h2>
                    <h2 class ="card-client"> Nombre: ${cliente.nombre}</h2>
                    <h3 class ="card-h3"> Deuda: $${cliente.deuda}</h3>
                    <h3 class ="card-h3"> Estado de la Deuda: ${cliente.estado}</h3>
                    <h3 class ="card-h3"> Banco Emisor: ${cliente.banco}</h3>
                    <h3 class  ="card-h3"> Agencia que Gestiona la Deuda: ${cliente.agencia}</h3> `
                   clients.appendChild(card)
})



let input = document.getElementById("input")