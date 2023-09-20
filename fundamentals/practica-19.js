
//Escribe una función que tome un número (a) como argumento. Divida a en sus dígitos individuales y devuélvalos en una matriz. Sugerencia: es posible que desee cambiar el tipo de número para la división.

const myFunction = (a) => {

return a.toString().split('').map(Number)
}

console.log(myFunction(10))
console.log(myFunction(10))
console.log(myFunction(193278))
