function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  array.forEach(elemento => {
    
    if (elemento.length > 5) {
      return elemento;
    }
  });
  
  // Retornamos el primer string largo encontrado (o null si no se encontró ninguno)
  return false;
}

module.exports = obtenerPrimerStringLargo;
