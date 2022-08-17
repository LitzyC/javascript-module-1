let num1 = prompt.length('Ingresa el primer numero a calcular.');
let num2 = prompt.length('Ingresa el segundo numero a calcular.');

function suma(num1, num2){
  const resultado = parseInt(num1) + parseInt(num2);
  console.log("La suma es de: "+resultado);
  return resultado;
}

suma(num1, num2);