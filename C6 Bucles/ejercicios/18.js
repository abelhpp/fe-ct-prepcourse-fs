function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos los números entre a y b (inclusive).
  // Tu código:
  // Inicializamos el resultado como 1, ya que si a y b son iguales, el producto sería 1
  var producto = 1;
  
  // Iteramos desde a hasta b
  for (var i = a; i <= b; i++) {
    // Multiplicamos el resultado acumulado por el número actual
    producto = Math.abs(producto * i);
  }
  
  // Retornamos el producto
  return producto;
}
module.exports = productoEntreNúmeros;