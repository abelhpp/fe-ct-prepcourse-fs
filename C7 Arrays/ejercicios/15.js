function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceMayor = array.reduce((indiceMax, elemento, indice, arr) => {
    if (elemento > arr[indiceMax]) {
      return indice;
    } else {
      return indiceMax;
    }
  }, 0);
  
  // Retornamos el índice del número más grande en el array
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
