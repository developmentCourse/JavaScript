const primeraOpcion = 'Cominlla simple'
const segundaOpcion = "Comilla Doble"
const terceraOpcion = `comilla inversa simple`

// 1.- concatenaciones: primera opcion
const direccion = 'Calle Olaneta 123'
const ciudad = 'Sucre'
const direccionCompleta = 'Mi direccion completa es: ' + direccion + ciudad
console.log(direccionCompleta)
//aumentando un espacio
const direccionCompletaConEspacio = 'Mi direccion completa es: ' + direccion +' '+ ciudad
console.log(direccionCompletaConEspacio)

//2.- concatenacion: template leterals
const nombre = 'Erick'
const pais = '🇧🇴' 
const presentacion = `Hola, soy ${nombre} soy de ${pais}`
console.log(presentacion)

//3.- concatenacion: join
const primeraParte = 'Aprendiendo'
const segundaParte = 'Java Script'
const terceraParte = '🇧🇴'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

//4.- concatenacion: concat
const hobbie1 = '🧑‍💻 computadoras'
const hobbie2 = '🧑‍🏫 lectura'
const hobbie3 = '🧙‍♂️ juegos'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobbies)
// caracteres de escape alternativo
const escapeAlternativivo = "I'm sistems engineer"
// caracteres de barra invertica
const escapeBarraAlternativivo = 'I\'m sistems engineer'
// caracteres literals
const escapeComillaAlternativivo = `I'm sistems engineer`

// escritura de strings largos
/*
    las rosas son rojas,
    las violetas son azules,
    Caracter inesterado,
    en la linea 86
*/
const poema =   'las rosas son rojas,\n' +
                'las violetas son azules,\n' +
                'Caracter inesterado,\n' +
                'en la linea 86' 
console.log(poema)

const poema2 =  'las rosas son rojas,\n\
las violetas son azules,\n\
Caracter inesterado,\n\
en la linea 86' 
console.log(poema2)

const poema3 =  `las rosas son rojas,
las violetas son azules,
Caracter inesterado,
en la linea 86.`
console.log(poema3)