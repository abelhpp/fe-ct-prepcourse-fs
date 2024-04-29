function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  const datos = [];

  for (let i = 0; i < array.length; i++) {
    if (mesesBuscados.includes(array[i])) {
      datos.push(array[i]);
    }
  }

  if (datos.length === 3) {
    return datos;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
