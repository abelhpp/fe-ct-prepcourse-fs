function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  // Array que contiene todas las vocales en minúscula
  var vocales = ['a', 'e', 'i', 'o', 'u'];

  // Convertimos la letra a minúscula para simplificar la comparación
  letra = letra.toLowerCase();

  // Variable para almacenar el resultado
  var resultado = "Dato incorrecto";

  // Recorremos el array de vocales utilizando forEach
  vocales.forEach(function(vocal) {
    // Verificamos si la letra coincide con alguna vocal del array
    if (letra === vocal) {
      resultado = "Es vocal"; // Si coincide, actualizamos el resultado
    }
  });

  // Devolvemos el resultado
  return resultado;
}

module.exports = esVocal;
