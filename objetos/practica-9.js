
//Extraer claves del objeto Javascript
//Escribe una función que tome un objeto (a) como argumento. Devuelve una matriz con todas las claves de los objetos.

const myFunction = (a) => {

return Object.keys(a)
} 

console.log(myFunction({a:1,b:2,c:3}))
console.log(myFunction({j:9,i:2,x:3,z:4}))
console.log(myFunction({w:15,x:22,y:13}))