/*Cajero Automático

Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
Persona 1
Persona 2
Persona 3
Para esto, puedes trabajar con un arreglo de objetos como el siguiente:
1
2
3
4
5
var cuentas = [
  { nombre: “Mali”, saldo: 200 }
  { nombre: “Gera”, saldo: 290 }
  { nombre: “Maui”, saldo: 67 }
];
Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
Consultar saldo
Ingresar monto
Retirar Monto
Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.*/


/*var cuentas = [
    { nombre: "Mali", saldo: 200, password: "unaContrasena" , hello: function(toWho) {console.log("hola" +  toWho);}},
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 },
];

console.log(cuentas[0].hello("Jorgitou"));
// Ingresar el usuario

// prompt*/
jQuery(document).ready(function($) {
	divCuentas();

    toastMsg('Bienvenido a su Banca Digital', 'Aquí podrá hacer todas sus operaciones bancarias');
});
//Array de cuentas
var Accounts = [
    {
    	cuenta: '100100320503052',
    	name:"Carlos Ritter", 
    	saldo:500.20, 
    	password:"carlos", 
    	user:"carlos"
    }, {
    	cuenta: '100100320503053',
    	name: "Cecilia",
    	saldo: 570.00, 
    	password: "cecilia",
    	user:"cecilia"
    }, {
    	cuenta: '100100320503054',
    	name:"Ever", 
    	saldo: 499.30, 
    	password: "ever", 
    	user:"ever"
    }, {
    	cuenta: '100100320503055',
    	name: "Stephano", 
    	saldo: 302.20,
    	password: "stephano", 
    	user:"stephano"
    }
];
//valores a tener en cuenta
let max = 990;
let min = 10;

const toastMsg = (titulo, msg) =>{
    const mensaje = document.querySelector("#mensaje");
    let toastHtml ='<div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 99999">\
        <div id="basicToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">\
            <div class="toast-header bg-primary text-light">\
            <h5 class="my-0">'+titulo+'</h5>\
            </div>\
            <div class="toast-body">'+msg+'</div>\
        </div>  \
    </div>';

    mensaje.innerHTML = toastHtml;

    new bootstrap.Toast(document.querySelector('#basicToast')).show();
}

//creamos los div de cada cuenta del array
const divCuentas = () =>{
	const homeCuentas = document.querySelector("#homeCuentas");
	let html = '';
	for (var i = 0; i < Accounts.length; i++) {
		persona = Accounts[i];

		html +='<div class="col">\
	        <div class="card mb-4 rounded-3 shadow-sm">\
	          <div class="card-header py-3">\
	            <h4 class="my-0 fw-normal">'+ persona.name +'</h4>\
	          </div>\
	          <div class="card-body">\
	            <ul class="list-unstyled mt-3 mb-4">\
	              <li>Nro Cuenta <br> ' + persona.cuenta + '</li>\
	            </ul>\
	            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onclick="elegirCuenta('+ persona.cuenta +')">Log In</button>\
	          </div>\
	        </div>\
	      </div>';

	}

	homeCuentas.innerHTML = html;
	
}
//fin de los div
//funcion para elegir la cuenta
const elegirCuenta = (cuenta) => {
	document.getElementById("cuenta").value = cuenta;
	login(cuenta);
}
//funcion para desplegar el modal del login
const login = (cuenta) => {
	$('#staticBackdrop').modal('show');
}
//funcion para validar los datos ingresados en el login
const validarDatos = () => {
	user = document.getElementById("user").value;
	pass = document.getElementById("pass").value;
	cta = document.getElementById("cuenta").value;
	
	let cont = 0;
	for (var i = 0; i < Accounts.length; i++) {
		persona = Accounts[i];

		if(user == persona.user && pass == persona.password && cta == persona.cuenta){
			cont++;
			document.getElementById("saldoOculto").value = persona.saldo;
			document.getElementById("persona").innerHTML = 'Hola '+persona.name
		}
	}

	if(cont > 0){
		//ocultamos el contenido de elegir cuenta
		$('#home').css('display', 'none');

		//visualizamos el contenido movimientos
		$('#movimientos').removeAttr('style');

		//Ocultamos el login
		$('#staticBackdrop').modal('hide');
	}else{
		toastMsg('Datos incorrectos','Hola, el usuario o la contraseña son incorrectos');
	}
}
//funcion para las validaciones dentro del detalle de las cuentas
const movimientos = (accion) => {

	saldo = document.getElementById("saldoOculto").value;
	saldo = parseFloat(saldo);

	if(accion == 'consultar'){
		document.getElementById("saldo").value = saldo;
		alert('Su saldo es: '+saldo)
	}else if(accion == 'depositar'){
    
		//Obtenemos el monto a depositar
		montoDepositar = document.getElementById("deposito").value;
		montoDepositar = parseFloat(montoDepositar);

		saldoTotal = saldo + montoDepositar;

		puedeDepositar = max - saldo;

		if(saldoTotal > max){
			alert('Excede el monto a depositar, solo puede depositar $ '+puedeDepositar);
			
		} else if (montoDepositar < 0 || montoDepositar == '') {
			alert('Debe ingresar un monto valido')
		}else{
			document.getElementById("saldoOculto").value = saldoTotal;
			document.getElementById("deposito").value = 0;
			alert('Monto depositado: $' + montoDepositar + '. Saldo disponible: $ '+ saldoTotal);
		}

	}else{
		montoRetirar = document.getElementById("retiro").value;
		montoRetirar = parseFloat(montoRetirar);

		saldoTotal = saldo - montoRetirar;

		puedeRetirar = saldo - min;
		if(saldoTotal < min){
			alert('Excede el monto a retirar, solo puede retirar $ '+puedeRetirar);
		}else if (montoRetirar < 0 || montoRetirar == '') {
			alert('Debe ingresar un monto valido')
		}else{
			document.getElementById("saldoOculto").value = saldoTotal;
			document.getElementById("retiro").value = 0;
			alert('Monto retirado: $' + montoRetirar + '. Saldo disponible: $ '+ saldoTotal);
		}
	}
}