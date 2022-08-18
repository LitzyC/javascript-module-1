
function suma(num1, num2){
  const resultado = parseInt(num1) + parseInt(num2);
  console.log("La suma es de: "+resultado);
  return resultado;
}

suma(11, 25);






/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Ingresa el primer numero a calcular.`, num1, (`Ingresa el segundo numero a calcular.`, num2=> {
    console.log("La suma es de:" +num1 + +num2);
    readline.close();
}));

let num1 = setprom('Ingresa el primer numero a calcular.');
let num2 = Readline('Ingresa el segundo numero a calcular.');

function suma(num1, num2){
  const resultado = Number(num1) + Number(num2);
  console.log("La suma es de: "+resultado);
  return resultado;
}

suma(num1, num2);

const prompt = require("prompt");
const { rawListeners } = require('process');

let num1 = prompt('Ingresa el primer numero a calcular.');
let num2 = prompt('Ingresa el segundo numero a calcular.');

function suma(num1, num2){
  const resultado = parseInt(num1) + parseInt(num2);
  console.log("La suma es de: "+resultado);
  return resultado;
}

suma(num1, num2);



const readline = require('readline').createInterface({
input:process.stdin, 
output: process.stdin
});

let num1=Math.floor((Math.random()+1)+1);
let num2=Math.floor((Math.random()+1)+1);
let answer=num1+ num2;

rl.question(`Cual es la suma ${num1} + ${num2}? `,
(userInput)=>{
  if(userInput.trim()== answer){
    rl.close();
  }
});

rl.on('close',()=>{
    console.log('Correcto');
}else{
  rl.setprompt('Incorrecto');
  rl.prompt();
});

*/
