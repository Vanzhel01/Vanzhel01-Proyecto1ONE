//variables
let numeroMaximo=100;
let numeroSecreto=Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario=parseInt(prompt(`Ingrese un numero entre 1 y ${numeroMaximo}` ));
let counter=1;
//let palabraIntento='intento';
let numeroIntentos=10;

//console.log(typeof(numeroUsuario));
console.log(numeroSecreto);

//si erramos
while(numeroSecreto!=numeroUsuario){
    if(counter==numeroIntentos){
        alert(`Llegaste al limite de ${numeroIntentos} intentos`);
        break;
    }
    if(numeroSecreto>numeroUsuario){
        numeroUsuario=prompt(`Ingresaste ${numeroUsuario}, el numero secreto es mayor, ingrese otro numero. Te quedan ${numeroIntentos-counter}`);
    }
    else{
        numeroUsuario=prompt(`Ingresaste ${numeroUsuario}, el numero secreto es menor, ingrese otro numero. Te quedan ${numeroIntentos-counter}`);
    }
    counter++;
    //palabraIntento="intentos";
}
//si es correcto
if(numeroSecreto==numeroUsuario){
    alert(`Ganaste, te tomo ${counter} ${counter==1 ?'vez':'veces'}`);
}




/*console.log(Math.random());

console.log(parseInt(Math.random()*10)+1);

console.log(parseInt(Math.random()*1000)+1);
*/

/*let nota=5;

if(nota>=7){
    console.log('aprobado');
}
else{
    console.log('reprobado');
    
}*/

/*let contador=1
while(contador<=10){
    console.log(contador);
    contador++;
}*/

/*let numero=prompt('ingresa un numero entero');

if(numero>0){
    console.log('el numero es positivo');
}
else if(numero==0){
    console.log('el numero es 0');
}
else{
    console.log('el numero es negativo');
    
}*/

/*yearOld=prompt('ingresa tu edad');

if(yearOld>=18){
    console.log("eres la verga");
}
else{
    console.log("no eres la verga");
    
}*/

/*let valor1=5;
let valor2=7;
let resultado=0;

resultado=valor1+valor2;

console.log(`la suma de ${valor1} con ${valor2} es ${resultado}`);*/

/*let valor1=20;
let valor2=5;
let resultado=0;

resultado=valor1-valor2;

console.log(`la diferencia de ${valor1} con ${valor2} es ${resultado}`);*/

/*let no='luigui';
let lenguaje=prompt('que lenguaje de programacion prefieres');

console.log(`hola ${no}`);
alert(`hola ${no}`);
console.log(lenguaje);*/

/*let topnumber=prompt("ingrese un numero para la cuenta progresiva");
let contador4=0;
while(contador4<=topnumber){
    console.log(contador4);
    contador4++;
}*/

/*let contador3=prompt('Ingrese un numero para la cuenta regresiva');

while(contador3>=0){
    console.log(contador3);
    contador3--;
}*/

/*let contador2=10;

while(contador2>=0){
    console.log(contador2);
    contador2--;
}*/

/*let contador1=1;

while(contador1<=10){
    console.log(contador1);
    contador1++;
}*/

/*let namae=prompt('Ingrese su nombre, por favor');

alert(`Wilkommen ${namae}`);*/

/*let SaldoUsuarioCuenta=500;
alert(`Su saldo es: ${SaldoUsuarioCuenta}`);*/

/*let puntuacion=prompt('ingrese un munero')*10;

if(puntuacion>=100){
    alert('u win');
}*/

/*let number=prompt('ingrese un numero');

if(number>0){
    alert('el numero es positivo');
}
else if(number==0){
    alert('el numero es 0');
}
else{
    alert('el numero es negativo');
}*/

/*let dia=prompt('¿Que dia es hoy?');

if(dia=='sabado' || dia=='domingo'){
    alert('Buen finde bb');
}
else{
    alert('Buen dia de chamba bb');
}*/

/*let contraseniaDelSistema = "contraseniaPrueba!";

let contrasenia = prompt("Ingrese la contraseña del sistema:");

if (contrasenia == contraseniaDelSistema){
    alert("Acceso al sistema garantizado");
}
else{
    alert("Contraseña erronea");
}*/

/*alert('¡Bienvenida y bienvenido a nuestro sitio web!');

let nombre='Lua';
let edad=25;
let numeroDeVentas=50;
let saldoDisponible=1000;

let mensajeDeError='¡Error! Completa todos los campos';
alert(mensajeDeError);

nombre=prompt('Ingrese su nombre');
edad=prompt('Ingrese su edad');

console.log(nombre,edad,numeroDeVentas,saldoDisponible);

if(edad>=18){
    alert('¡Puedes obtener tu licencia de conducir!');
}*/