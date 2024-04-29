function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  dato = []

  for (let i = texto.length - 1; i >= 0; i--) {
    dato.push(texto[i]);
  }

  return dato.join("");
}

module.exports = invertirTexto;
