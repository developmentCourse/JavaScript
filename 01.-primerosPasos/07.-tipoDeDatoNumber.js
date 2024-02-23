//1.- Tipo etero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//Notacion cientifica
const cientifico = 5e3
console.log(typeof cientifico)

//3.- Infinitos y NaN
const infinito = Infinity
const noEsNumero = NaN

//4.- Operaciones  Suma,Resta, Muiltiplicacion y Dvision
const suma = 3 + 4
const resta = 3 - 4
const multiplicacion = 3 * 4
const division = 3 / 4

// modulo y exploneacionacion
const modulo = 15 % 8
const exponienciacion = 2** 3

// Precision

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)