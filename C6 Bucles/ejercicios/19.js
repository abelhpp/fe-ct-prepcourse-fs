function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 0;
  
  // Iteramos desde 1 hasta n
  for (var i = 1; i <= n; i++) {
    // Sumamos el número actual a la suma acumulada
    suma += i;
  }
  
  // Retornamos la suma total
  return suma;
}

module.exports = sumarHastaN;
