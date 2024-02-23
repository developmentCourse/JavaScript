// Tipo de dato primitivo - Inmutable
let numero = 23
numero = numero + 10
console.log(numero)

let suma = 110
suma = suma + 123
console.log(suma)

let resta = 102
resta = resta - 111
console.log(resta)

let division = 102
division = division / 111
console.log(division)

let multiplicacion = 102
multiplicacion = multiplicacion * 111
console.log(multiplicacion)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato complejo - Mutable
let usuario = {nombre:'pepito', edad:15}
usuario.edad =20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[1] = 'guayaba'
console.log(frutas)

//Objetos
function cambioDeNombre (objeto){
    objeto.nombre = 'Nuevo Nombre'
}
let persona = {nombre: 'erick'}
console.log(persona)

//cambiando nombre
function cambioDeNombre2 (objeto){
    objeto.nombre2 = 'Nuevo Nombre2'
}
let persona2 = {nombre2: 'erick'}
cambioDeNombre2(persona2)
console.log(persona2)
