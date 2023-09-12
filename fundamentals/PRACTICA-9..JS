
// Escribe una función que tome una cadena (a) como argumento. Extrae la primera mitad a. Devolver el resultado

const myFunction = (a) => {

return a.slice(0, a.length / 2)
}

console.log(myFunction('abcdefgh'))
console.log(myFunction('1234'))
console.log(myFunction('gedcba'))