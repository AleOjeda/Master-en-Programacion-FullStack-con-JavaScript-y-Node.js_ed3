// 1 - programa que imprime los numeros del 1 al 100

for (i = 0; i < 100; i++){
  console.log(i)
  }
  
// 2 - programa que muestra los numeros del 100 al 0

for (i = 100; i >= 0; i--){
  console.info(i)
  }
  
 // 3 - diseña un programa que muestre los numeros pares entre 0 y 100
 
 for (i = 0; i < 100; i++){
  if (i%2 === 0){
  console.info(i)
    }
  }

// 4 - Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz


  var coin = Math.round(Math.random()*(1 -0) + 0);
  if (coin === 1){
    console.log("ha salido cara")
  }
  else {
    console.log("ha salido cruz")
  }

// 5 - diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10

var dice1 = Math.round(Math.random()*(1 -0) + 0)
var dice2 = Math.round(Math.random()*(1 -0) + 0)

function roll2Dices (num1; num2)
  for (i = 0; i < 100; i++){
    if (num1 + num2 = 10)
      var coincidences += 1
    }

