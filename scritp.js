function CompararNumeros(){
let number1 = Number(document.getElementById('numero1').value)
let number2 = Number( document.getElementById('numero2').value)
let number3 = Number( document.getElementById('numero3').value)

let numMayor=0
let numMedio=0
let numMenor=0

if(number1 > number2 && number1 > number3){
  numMayor = number1
  if(number2>number3){
    numMedio = number2
    numMenor = number3
  }
  else{
    numMedio = number3
    numMenor = number2
  }
}
else if(number2 > number3 && number2 > number3){
  numMayor = number2
  if(number1 > number2){
    numMedio = number1
    numMenor = number3
  }
  else{
    numMedio = number3
    numMenor = number1
  }
}
else if(number3 > number1 && number3 > number2){
  numMayor = number3
  if(number1 > number2){
    numMedio = number1
    numMenor = number2
  }
  else{
    numMedio = number2
    numMenor = number1
  }
}
 alert (`Numero mayor: ${numMayor}, Numero medio: ${numMedio}, Numero menor: ${numMenor}`)
console.log(`Numero mayor: ${numMayor}, Numero medio: ${numMedio}, Numero menor: ${numMenor}`)
}