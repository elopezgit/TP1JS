// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt
// Ejemplo:

// input: Hola mundo
// Output: oauo

let frase = prompt("Ingrese una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i).toLowerCase();

  if ("aeiou".indexOf(caracter) !== -1) {
    vocales += caracter;
  }
}

document.write("Las vocales en la frase son: " + vocales);
