function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   // Inicializamos la variable suma como 0
  var suma = 0;
  
  // Iteramos desde 1 hasta n
  for (var i = 1; i <= n; i++) {
    // Sumamos el número actual a la suma acumulada
    suma += i;
    
    // Verificamos si la suma supera 100
    if (suma > 100) {
      // Si supera 100, detenemos el bucle
      break;
    }
  }
  
  // Retornamos la suma total
  return suma;
}

module.exports = sumarHastaNConBreak;
