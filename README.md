# Proyectos_Devf 🚧

🏧Cajero Automatico🏧

🌎English Doc:

Hi, this is my repository of the master in coding at DEVF's school
( https://devf.la/ ) in Mexico City.

I'm a visual artist which its taking new routes in learning technology. 
Hope you enjoy this archive and if you're not a coder, this repository 
will help you in your learning career.



🇲🇽 Español Doc:

Hola, este es mi repositorio de la maestría en programación en la escuela DEVF
( https://devf.la/ ) en la Ciudad de México.

Soy un artista visual que está tomando nuevas rutas en el aprendizaje de la tecnología.
Espero que disfrutes de este archivo y si no eres programador, este repositorio
le ayudará en su carrera de aprendizaje.



🥋KATA JS🥋

Crea una aplicación web con JavaScript dónde simulemos la interacción con un cajero automático.
Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar.
  Deben existir al menos tres cuentas:
  
    ‘Mali’
    ‘Gera’
    ‘Maui’

Para esto, puedes trabajar con un arreglo de objetos como el siguiente:


var cuentas = [
{
  nombre: "Mali", saldo: 200,password: '1234'},
{
  nombre: "Gera", saldo: 290, password: '1234'},
{
  nombre: "Maui", saldo: 67, password: '1234'},
];


Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. 
Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente.
Si el password es correcto, debes mostrar las siguientes opciones:

    Consultar saldo
    Ingresar monto
    Retirar monto

Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta.
Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar.
Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, 
debe mostrarle al usuario el monto retirado y el nuevo saldo total.
Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.

