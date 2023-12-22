
//mostrar un mensaje en el documento HTML
document.write('<p class = "text-center text-primary">Trabajo Practico Numero 1 - EJERCICIO 3 -  Conversión de Grados Celsius a Fahrenheit</p>')


// Ejercicio 3: Conversión de Grados Celsius a Fahrenheit
// Crea una variable llamada gradosCelsius y asígnale un 
// valor en grados Celsius. Luego, utiliza la fórmula de conversión para 
// calcular los grados Fahrenheit y almacénalos en una variable llamada gradosFahrenheit. 
// Muestra ambos valores en la pantalla.

//ventanas emergentes
//alert('Ejemplo de una alerta')

let gradosCelsius = parseInt(prompt('Ingrese un valor en grados Celsius: ')) 
let gradosFahrenheit = (gradosCelsius * (9/5)) + 32

document.write('<br>' + 'gradosCelsius: ' + gradosCelsius)
document.write('<br>' + 'gradosFahrenheit: ' + gradosFahrenheit)
