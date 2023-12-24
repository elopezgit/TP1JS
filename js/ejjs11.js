// 11.- Añadir al ejercicio anterior que nos diga 
// por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210

// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.


let numero = parseInt(prompt("Ingrese un número:"));
let divisores = [];

if (numero % 2 === 0) {
  divisores.push(2);
}

if (numero % 3 === 0) {
  divisores.push(3);
}

if (numero % 5 === 0) {
  divisores.push(5);
}

if (numero % 7 === 0) {
  divisores.push(7);
}

if (divisores.length > 0) {
  document.write("El " + numero + " es divisible por " + divisores.join(", "));
} else {
  document.write("El " + numero + " no es divisible por 2, 3, 5 ,7");
}
