//paso por valor 
let x = 1
let y ='Hola'
let z = null

let a = x
let b = y
let c = z


a = 12
b = 'javaScript'
c = undefined
console.log(x,y,z,a,b,c)
//Paso por referencia 
let frutas = ['manzana']
frutas.push('pera','sandia')
console.log(frutas)

let mascotas = ['perros']
mascotas.push('gatos','aves')
console.log(mascotas)
// ejemplo claro de referencia
let panes =['🥐']
let copiaPanes = panes
panes.push = ('🥖')
console.log(panes, copiaPanes)