function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma = arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
  
  // Retornamos la suma de todos los elementos del array
  return suma;
}

module.exports = agregarNumeros;
