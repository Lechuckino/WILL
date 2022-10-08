/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  numeroinv = num;
  let invertido = 0;
  while (numeroinv != 0) {
      invertido = 10 * invertido + numeroinv % 10
      numeroinv = (Math.floor(numeroinv / 10))
  }
  if (num === invertido){
      return true;
  }
  return false;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico