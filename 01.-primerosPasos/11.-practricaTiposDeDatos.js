//Social media profile

//1.- User information
const username = 'dev_pablo'
const fullName = 'Pablo Rojas'
const age = 25
const isStudent = true

// 2.-address

const address = {
    street: '123 Main Street',
    city: 'stadmends',
    state: 'Coodingland',
    zipCode: 54321
}

//3.-hobbies
const hobbies = ['Coding', 'Reading', 'Gaming']

//4.-generating personalized bio
const personalizedBio = `Hola, mi ${fullName} tengo ${age} años, soy ${isStudent}tengo el usuario ${username}
actualmente vivo en ${address.city}, en el estado de ${address.state}, con codigo ${address.zipCode},
y mi direccion es ${address.street}
Mis hobbies son ${hobbies.join(', ')}. me gusta los retos y los juegos`

//5.- print the user profile and bio
console.log(personalizedBio)