function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
   // Creamos un objeto para mapear los casos
   var casos = {
    "fizzbuzz": num % 5 === 0 && num % 3 === 0,
    "fizz": num % 3 === 0,
    "buzz": num % 5 === 0
  };

  // Iteramos sobre las claves del objeto casos
  for (var caso in casos) {
    // Verificamos si el número cumple con el caso actual
    if (casos[caso]) {
      // Si lo cumple, retornamos el caso
      return caso;
    }
  }

  // Si no se encontró ningún caso, retornamos false
  return false;
}

module.exports = fizzBuzz;
