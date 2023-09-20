
//Escribe una función que tome un número (a) como argumento. Si a es un número entero (no tiene decimales), devuelve verdadero. De lo contrario, devuelve falso.

const myFunction = (a) => {

return Number.isInteger(a)
}

console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))
console.log(myFunction(10.48))