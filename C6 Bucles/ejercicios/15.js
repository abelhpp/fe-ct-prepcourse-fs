function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  // Creamos un objeto para mapear los números a los días de la semana
  var dias = {
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
    7: "Domingo"
  };

  // Verificamos si el número está dentro del rango 1-7
  if (numero >= 1 && numero <= 7) {
    // Si está en el rango, devolvemos el día correspondiente
    return dias[numero];
  } else {
    // Si no está en el rango, devolvemos "No es un dia de la semana"
    return "No es un dia de la semana";
  }
}

module.exports = obtenerDiaSemana;