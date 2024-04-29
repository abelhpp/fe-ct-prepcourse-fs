function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) {
    return true; // Si el array está vacío, todos los elementos son iguales
  }

  // Comparamos cada elemento del array con el primero
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[0]) {
      // Si encontramos un elemento diferente al primero, retornamos false
      return false;
    }
  }

  // Si todos los elementos son iguales, retornamos true
  return true;

}

module.exports = todosIguales;
