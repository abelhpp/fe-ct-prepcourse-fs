function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  
  // Calculamos el promedio dividiendo la suma por la cantidad de elementos
  var promedio = suma / resultadosTest.length;
  
  // Retornamos el promedio
  return promedio;
}

module.exports = promedioResultadosTest;
