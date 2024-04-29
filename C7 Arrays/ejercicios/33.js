function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  const strings = [str1, str2, str3];
  let result = '';

  // Itera sobre cada cadena
  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];

    // Verifica si la cadena no está vacía
    if (str) {
      // Itera sobre cada carácter de la cadena
      for (let j = 0; j < str.length; j++) {
        // Agrega el carácter al resultado
        result += str[j];

        // Si hay más cadenas y no estamos en la última, agrega el carácter correspondiente a la siguiente cadena no vacía
        if (i < strings.length - 1 && strings[i + 1]) {
          result += strings[i + 1][j] || ''; // Si la siguiente cadena no tiene más caracteres, agrega una cadena vacía
        }
      }
    }
  }

  return result;




}

module.exports = combine;