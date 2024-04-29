function divide(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 2
  // 5, 5 ---> 1
  // Tu código:
  if(y==0){
    return 0;
  }
  return x / y;
}

module.exports = divide;