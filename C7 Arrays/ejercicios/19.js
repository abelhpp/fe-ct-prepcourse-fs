function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  
  
  
  
  let producValue = Object.values(arguments)
  let inicio = 1;
  if(producValue.length === 0){
    inicio = 0
  }
  
  let producto = producValue.reduce(function(acumulador, valorActual){
    return acumulador * valorActual;
  },inicio);
  return producto;
}

module.exports = multiplicarArgumentos;