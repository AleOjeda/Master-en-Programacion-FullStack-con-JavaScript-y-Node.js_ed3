//1 - Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

//usando if-else

let num1 = prompt("escriba un 1er numero","");
let num2 = prompt("escriba un 2º numero","");
if num1 === num2 {
  console.log("los numeros son iguales");
}
else if (num1 > num2) {
  console.log("el 1er numero es mayor");
}
else {
  console.log("el 2º numero es mayor");
}

//usando switch

let num1 = prompt("escriba un 1er numero","");
let num2 = prompt("escriba un 2º numero","");

switch (true) {
  case (num1 > num2):
    console.log("el primer numero es mayor");
    break;
  case (num1 < num2):
    console.log("el segundo es mayor");
    break;
  default:
    console.log("los numeros son iguales");
}

//2 - Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

//usando if-else

let num1 = prompt("escriba un 1er numero","");
let num2 = prompt("escriba un 2º numero","");
let num3 = prompt("escriba un 3er numero","");

if (num1 > num2) && (num1 > num3) {
console.log("el 1er numero es mayor");
}
else if (num2 > num1) && (num2 > num3) {
console.log("el 2º numero es mayor");
}
else {
console.log("el 3er numero es mayor");
}

//usando switch

