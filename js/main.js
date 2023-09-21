
alert("hola fulanito, bienvenido a tu cajero virtual");
let saldo = 3000

prompt("Ingrese la tarjeta" + entrarACajero());

function entrarACajero(){
	let tarjeta = confirm(" Has ingreso de tu tarjeta");

	ingresarClave(tarjeta)
}



function ingresarClave(valor){
	if(valor){
		let clave = prompt("Ingresa la clave: ");
		validarClave(clave);
	}
	else{
		alert("Es necesario el ingreso de una tarjeta")
	}
}


function validarClave(clave) {
	if (clave === "1122") {
	  console.log("Ud tiene un saldo de " + saldo);
	  console.log("Que operación deseas realizar: " + seleccionarOperacion());
	} else {
	  while (clave !== "1122") {
		alert("Clave incorrecta, introduzca la clave correcta");
		clave = prompt("Intente nuevamente: ");
	  }
	  console.log("Ud tiene un saldo de " + saldo);
	  console.log("Que operación deseas realizar: " + seleccionarOperacion());
	}
  }




// opcion 1 del switch 
function retirarDinero(monto) {
	console.log("Dinero a retirar: " + monto);
	if (monto > saldo) {
	  alert("Saldo insuficiente para la operación");
	  monto = prompt("Intente con un monto menor: ");
	} else {
	  saldo = saldo - monto;
	  console.log("Operacion Exitosa, retire su dinero");
	  console.log("-------------------------------------------")
	  console.log("Su saldo actual es: " + saldo);
	  console.log("------------------------------------------")
	  console.log("Quieres realizar otra operación: " + seleccionarOperacion())
	
	}
  
	
  }
  

// opcion 2 del switch 
function ingresarDinero(monto){
	console.log("saldo + monto");
	saldo = saldo + monto;
	seleccionarOperacion();
}

// opcion 3 del switch
function consultarSaldo(){
	console.log("Su saldo es: " + saldo);
	seleccionarOperacion();
}

//opcion 4 del switch
function salir(){
	alert("Fin del proceso");
}








function seleccionarOperacion(){
	console.log("Elija la operacion que desea realizar: ");
	console.log("1 - Retirar Dinero");
	console.log("2 - Ingresar Dinero");
	console.log("3 - Consultar Saldo");
	console.log("4 - Salir");

	console.log("---------------------------------");

	let operacion = prompt("Seleccione una opcion");
	
	let monto;
	switch(operacion){
		case "1":
			let monto = Number(prompt("Cuanto desea retirar: "));
			retirarDinero(monto);
			break;
		case "2":
			monto = Number(prompt("Ingrese el monto a depositar: "));
			ingresarDinero(monto);
			break;
		case "3": 
			consultarSaldo();
			break;
		case "4": 
			salir();
			break;
	}

}


