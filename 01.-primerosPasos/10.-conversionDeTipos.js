// explicit type casting
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

//float = decimal
const stringFloat = '3.14'
const float = parseFloat(stringFloat)
console.log(float)
console.log(typeof float)


const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit type casting
//const sum ='5' + 3 junta no realiza la funcion
const sum = (parseInt('5') + 3) // funcion correcta
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const boobleanValue = true
console.log(stringValue + stringValue) //concatena
console.log(stringValue + numberValue)//concatena
console.log(stringValue + boobleanValue)//concatena

console.log(numberValue + stringValue)//concatena
console.log(numberValue + numberValue)//suma
console.log(numberValue + boobleanValue)//suma

console.log(boobleanValue + stringValue)//concatena
console.log(boobleanValue + numberValue)//suma
console.log(boobleanValue + boobleanValue)//suma
