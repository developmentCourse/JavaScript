// Null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

//Undefinde
let name
console.log(name)

//Symbol
const uniqyeId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//BigInt

const bigNumber = 123213214324324321423213432432432n
console.log(bigNumber)

const numberOfParticlesInTheUniverse = 100000000000000000000000000000000n
console.log(numberOfParticlesInTheUniverse)