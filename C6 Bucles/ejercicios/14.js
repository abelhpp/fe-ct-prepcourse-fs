function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  // Creamos un objeto para mapear los casos
  var casos = {
    "Error": num1 === 0 && num2 === 0 && num3 === 0,
    "Hay negativos": num1 < 0 || num2 < 0 || num3 < 0,
    "Numero 1 es mayor y positivo": num1 > num2 && num1 > num3,
  };

  // Iteramos sobre las claves del objeto casos
  for (var caso in casos) {
    if (casos[caso]) {
      return caso;
    }
  }
  // Verificamos si num3 es más grande que num1 y num2
  if (num3 > num1 && num3 > num2) {
    // Si es así, aumentamos su valor en 1 y retornamos el nuevo valor
    return num3 + 1;
  }

  // Si no se encontró ningún caso, retornamos false
  return false;
}

module.exports = operadoresLogicos;
