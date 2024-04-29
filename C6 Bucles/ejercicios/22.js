function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // Utiliza el bucle do-while.
  // Tu código:
  var contador = 0;
  
  // Utilizamos un bucle do-while para aumentar num en 5 hasta un máximo de 8 veces
  do {
    // Aumentamos num en 5
    num += 5;
    
    // Incrementamos el contador
    contador++;
  } while (contador < 8); // Continuamos mientras el contador sea menor que 8
  
  // Retornamos el valor final de num
  return num;
}

module.exports = doWhile;