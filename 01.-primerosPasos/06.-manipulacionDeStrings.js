//Strings primitivos
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)
// other type
const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

//String Objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres

const saludo = 'Hola, Como estas?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Como'))
console.log(saludo.indexOf('como')) // no existe el valor buscado
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

const saludoConEspacios = 'Hola Mundo'
const saludoSinEsapacios = saludoConEspacios.trim()
console.log(saludoSinEsapacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo' , '🩵')
console.log(nuevoSaludo)